Add-Type -AssemblyName System.Drawing
$dir = "c:\Users\root\OneDrive\Documents\GitHub\2026\Vibe Code Presentation\Texas-Ecoregions\Ecoregions"
Get-ChildItem "$dir\*.png" | ForEach-Object {
    $i = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Output "$($_.Name): $($i.Width)x$($i.Height)"
    $i.Dispose()
}
