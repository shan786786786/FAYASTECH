# GitHub Push Script for Fayastech Portfolio
# Replace YOUR-USERNAME with your actual GitHub username

# Configuration
$GITHUB_USERNAME = "YOUR-USERNAME"  # ⬅️ CHANGE THIS!
$REPO_NAME = "Fayastech-portfolio"

# Navigate to project
Set-Location E:\fayastech-portfolio

Write-Host "🚀 Preparing to push to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Check if remote exists
$remoteExists = git remote | Select-String -Pattern "origin"

if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists. Removing..." -ForegroundColor Yellow
    git remote remove origin
}

# Add remote
Write-Host "📡 Adding remote repository..." -ForegroundColor Green
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Show remote
Write-Host "✅ Remote added:" -ForegroundColor Green
git remote -v
Write-Host ""

# Rename branch to main (if needed)
$currentBranch = git branch --show-current
if ($currentBranch -eq "master") {
    Write-Host "🔄 Renaming branch to 'main'..." -ForegroundColor Yellow
    git branch -M main
}

# Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "    This will REPLACE all old code in the repository" -ForegroundColor Yellow
Write-Host ""

# Force push to replace everything
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 View your repository: https://github.com/$GITHUB_USERNAME/$REPO_NAME" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🎉 Next Steps:" -ForegroundColor Magenta
    Write-Host "   1. Go to https://vercel.com" -ForegroundColor White
    Write-Host "   2. Import your GitHub repository" -ForegroundColor White
    Write-Host "   3. Add environment variable: NEXT_PUBLIC_CONTACT_EMAIL=shanan9495@gmail.com" -ForegroundColor White
    Write-Host "   4. Click Deploy 🚀" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Common solutions:" -ForegroundColor Red
    Write-Host "   1. Check your GitHub username is correct in this script" -ForegroundColor Yellow
    Write-Host "   2. Make sure you're logged into GitHub in your browser" -ForegroundColor Yellow
    Write-Host "   3. You may need to authenticate with GitHub Desktop or CLI" -ForegroundColor Yellow
}
