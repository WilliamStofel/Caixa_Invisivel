$ErrorActionPreference = "Continue"

function Download-GitHubFolder {
    param (
        [string]$RepoUrl,
        [string]$SubFolder,
        [string]$TargetFolder
    )
    
    $TempDir = Join-Path $env:TEMP ("skill_dl_" + (New-Guid).ToString())
    New-Item -ItemType Directory -Path $TempDir -Force | Out-Null
    
    Push-Location $TempDir
    try {
        git clone --quiet --depth 1 --filter=blob:none --no-checkout $RepoUrl . 2>$null
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Falha ao clonar repositorio $RepoUrl (Pode ser privado ou inexistente)"
            return
        }
        
        if ($SubFolder -ne "") {
            git sparse-checkout set $SubFolder 2>$null
        }
        git checkout --quiet 2>$null
        
        $TargetAbs = Join-Path "c:\Users\User\Documents\devai" $TargetFolder
        $SourcePath = if ($SubFolder -eq "") { $TempDir } else { Join-Path $TempDir $SubFolder }
        
        if (Test-Path $SourcePath) {
            if (-not (Test-Path $TargetAbs)) {
                New-Item -ItemType Directory -Path $TargetAbs -Force | Out-Null
            }
            Write-Host "Copiando de $RepoUrl ($SubFolder) para $TargetFolder..."
            Get-ChildItem -Path $SourcePath -Force | Where-Object { $_.Name -ne '.git' } | Copy-Item -Destination $TargetAbs -Recurse -Force
        } else {
            Write-Warning "Caminho '$SubFolder' nao encontrado no repositorio $RepoUrl"
        }
    } catch {
        Write-Warning "Erro ao processar $RepoUrl : $_"
    } finally {
        Pop-Location
        Remove-Item -Path $TempDir -Recurse -Force -ErrorAction SilentlyContinue
    }
}

$skills = @(
    @{ Repo="https://github.com/vercel-labs/next-skills.git"; Sub="skills/next-best-practices"; Target=".agent/skills/next-best-practices" },
    @{ Repo="https://github.com/vercel-labs/next-skills.git"; Sub="skills/next-cache-components"; Target=".agent/skills/next-cache-components" },
    @{ Repo="https://github.com/vercel-labs/agent-skills.git"; Sub="skills/deploy-to-vercel"; Target=".agent/skills/deploy-to-vercel" },
    @{ Repo="https://github.com/vercel-labs/agent-skills.git"; Sub="skills/react-best-practices"; Target=".agent/skills/react-best-practices" },
    @{ Repo="https://github.com/vercel-labs/agent-skills.git"; Sub="skills/web-design-guidelines"; Target=".agent/skills/web-design-guidelines" },
    @{ Repo="https://github.com/vercel-labs/agent-skills.git"; Sub="skills/composition-patterns"; Target=".agent/skills/composition-patterns" },
    @{ Repo="https://github.com/prisma/skills.git"; Sub="prisma-database-setup"; Target=".agent/skills/prisma-database-setup" },
    @{ Repo="https://github.com/google-labs-code/stitch-skills.git"; Sub=""; Target=".agent/skills/stitch-skills" },
    @{ Repo="https://github.com/supabase/agent-skills.git"; Sub=""; Target=".agent/skills/supabase" },
    @{ Repo="https://github.com/clerk/skills.git"; Sub=""; Target=".agent/skills/clerk" },
    @{ Repo="https://github.com/sickn33/antigravity-awesome-skills.git"; Sub="skills/frontend-design"; Target=".agent/skills/frontend-design" },
    @{ Repo="https://github.com/sickn33/antigravity-awesome-skills.git"; Sub="skills/backend-architect"; Target=".agent/skills/backend-architect" },
    @{ Repo="https://github.com/sickn33/antigravity-awesome-skills.git"; Sub="skills/nestjs-expert"; Target=".agent/skills/nestjs-expert" },
    @{ Repo="https://github.com/sickn33/antigravity-awesome-skills.git"; Sub="skills/docker-expert"; Target=".agent/skills/docker-expert" },
    @{ Repo="https://github.com/sickn33/antigravity-awesome-skills.git"; Sub="skills/github-actions-templates"; Target=".agent/skills/github-actions-templates" }
)

foreach ($s in $skills) {
    Download-GitHubFolder -RepoUrl $s.Repo -SubFolder $s.Sub -TargetFolder $s.Target
}

Write-Host "Instalacao de skills concluida."
Write-Host "Removendo diretorios de agentes que nao sao nativos (local e global)..."

$localAgents = Join-Path "c:\Users\User\Documents\devai" ".agents"
$localCursor = Join-Path "c:\Users\User\Documents\devai" ".cursor"
$globalAgents = Join-Path $env:USERPROFILE ".agents"
$globalCursor = Join-Path $env:USERPROFILE ".cursor"

$dirsToRemove = @($localAgents, $localCursor, $globalAgents, $globalCursor)
foreach ($dir in $dirsToRemove) {
    if (Test-Path $dir) {
        Remove-Item -Path $dir -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "Removido: $dir"
    }
}

Write-Host "Ambiente limpo com sucesso."

