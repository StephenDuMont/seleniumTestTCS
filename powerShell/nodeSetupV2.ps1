 function CopyWebAppAutomationFiles($serverPath, $clientPath) { 
   # -------Copy Automation Folder -----------------
    Write-Output("Coping binary files..")
    $childItems = Get-ChildItem $serverPath
    $childItems | ForEach-Object {
         Copy-Item -Path $_.FullName -Destination $clientPath -Recurse -Force
    }
 
}
## args1 should be the file name of test suite to isolate and/or -t="{string to match describing test case"
function ExecuteTests($clientPath, $args1) { 
    Push-Location -Path $clientPath; 
    .\node.exe  node_modules\jest\bin\jest.js  --json --outputFile='testResult.json' $args1
    Pop-Location
}
function TearDown($clientPath) {
   rm -rf $clientPath
} 


function executeAll() {
    CopyWebAppAutomationFiles
    ExecuteTests
}
# setup steps:
#  chomedriver ->temp
#  unzip testapp.zip -> temp
#  install chrome
#  node.exe -> temp