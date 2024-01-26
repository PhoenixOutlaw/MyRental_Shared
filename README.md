# Make sure to pull this subrepository in the src folder

# Only add shared resources to the subrepository

# Add paths to the tsconfig.json to shorten the path

{
"compilerOptions": {
+--> "paths": {
"@sharedlib/_": ["src/sharedlib/_"]
},
}
}

migration scripts : {
"migration:generate": "node ./src/sharedlib/scripts/mig.script.js generate",
"migration:run": "node ./src/sharedlib/scripts/mig.script.js run",
"migration:revert": "node ./src/sharedlib/scripts/mig.script.js revert",
} ["copy and paste in the package.json file"]
