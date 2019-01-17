Add-Type -AssemblyName System.IO.Compression.FileSystem
$nodeScriptLoc =  "\\AZFITCOSTPRD01\Automation\testApp.zip";


mkdir temp -Force > $null;
if (![System.IO.File]::Exists('./temp/node.exe')) {
    Invoke-WebRequest -Uri https://nodejs.org/download/release/latest/win-x64/node.exe -OutFile "$PSScriptRoot\temp\node.exe";
}
cd temp
if (![System.IO.File]::Exists('temp/testApp.zip')) {
    Invoke-WebRequest -Uri $nodeScriptLoc -OutFile "testApp.zip";
}
if (![System.IO.File]::Exists('temp/package.json')) {
    
     [System.IO.Compression.ZipFile]::ExtractToDirectory("temp\testApp.zip", 'temp')
}

$testOutput = node.exe $PSScriptRoot\temp\node_modules\jest\bin\jest.js --json --outputFile='testResult.json'

#$testOutput -match "Tests:\s* \d+" > null;
#$testResult = $Matches[0] -replace 'Tests: \s*', '';
#echo $testResult;
cd ..