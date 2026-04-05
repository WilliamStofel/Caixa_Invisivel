import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Suspense } from "react";
import { CartProvider } from "@/lib/CartContext";

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CartProvider>
            <div className="flex flex-col min-h-screen">
                <Suspense fallback={<div className="h-16 bg-background border-b" />}>
                    <Header />
                </Suspense>
                <main className="flex-1 bg-background">
                    {children}
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
}
