$folders = "components", "core", "docs", "hooks", "play", "themes", "utils"
Foreach($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder
    cd $folder
    pnpm init
    cd ..
}