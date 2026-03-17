"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, LogOut, LayoutDashboard, ChevronRight } from "lucide-react";
import { AuthMe } from "@/hooks/useAuthMe";
import "./UserDropdown.css";

interface UserDropdownProps {
  user: AuthMe | null;
  isAdmin: boolean;
  onLogout: () => void;
}

export function UserDropdown({ user, isAdmin, onLogout }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const displayName = user?.firstName ? `${user.firstName} ${user.lastName || ""}` : user?.email || "Usuário";

  return (
    <div className="user-dropdown-container" ref={dropdownRef}>
      <div className="user-dropdown-trigger" onClick={toggleDropdown}>
        {user?.imageUrl ? (
          <img src={user.imageUrl} alt="User" className="w-8 h-8 rounded-full border border-slate-200" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
            <User className="w-4 h-4 text-slate-500" />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="user-dropdown-menu">
          <div className="user-dropdown-header">
            <span className="user-dropdown-name">{displayName}</span>
            <span className="user-dropdown-email">{user?.email}</span>
          </div>

          <div className="user-dropdown-items">
            <Link href="/profile" className="user-dropdown-item" onClick={handleItemClick}>
              <User className="icon" />
              <span>Perfil</span>
              <ChevronRight className="icon ml-auto opacity-40" />
            </Link>

            {isAdmin && (
              <Link href="/admin" className="user-dropdown-item" onClick={handleItemClick}>
                <LayoutDashboard className="icon" />
                <span>Painel Admin</span>
                <ChevronRight className="icon ml-auto opacity-40" />
              </Link>
            )}

            <div className="user-dropdown-divider" />

            <button 
              onClick={() => {
                onLogout();
                handleItemClick();
              }} 
              className="user-dropdown-item destructive"
            >
              <LogOut className="icon" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
