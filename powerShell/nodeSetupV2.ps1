# Add-Type -AssemblyName System.IO.Compression.FileSystem

function CopyWebAppAutomationFiles($serverPath, $clientPath){
   # mkdir temp -Force > $null;
    #if (![System.IO.File]::Exists('./temp/node.exe')) {
     #   Invoke-WebRequest -Uri https://nodejs.org/download/release/latest/win-x64/node.exe -OutFile "$PSScriptRoot\temp\node.exe";
    #}

#    if (![System.IO.File]::Exists('temp/testApp.zip')) {
#        Invoke-WebRequest -Uri $nodeScriptLoc -OutFile "temp\testApp.zip";
 #        [System.IO.Compression.ZipFile]::ExtractToDirectory("temp\testApp.zip", 'temp')
 #   }
 #   if (![System.IO.File]::Exists('temp/package.json')) {
    
  #       [System.IO.Compression.ZipFile]::ExtractToDirectory("temp\testApp.zip", 'temp')
   # }
   CopyItem -Path $serverPath -Destination $clientPath -Recurse -Force
}
## args1 should be the file name of test suite to isolate and/or -t="{string to match describing test case"
function ExecuteTests($clientPath, $args1) { 
    Push-Location -Path $clientPath;
 
    node.exe  $PSScriptRoot\temp\node_modules\jest\bin\jest.js  --json --outputFile='testResult.json' $args1
    Pop-Location
}
function TearDown($clientPath) {
   rm -rf $clientPath
} 


# setup steps:
#  chomedriver ->temp
#  unzip testapp.zip -> temp
#  install chrome
#  node.exe -> temp