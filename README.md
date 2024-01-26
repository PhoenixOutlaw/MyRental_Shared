# Make sure to pull this subrepository in the src folder
# Only add shared resources to the subrepository
# Add paths to the tsconfig.json to shorten the path

{ 
    "compilerOptions": {
+-->    "paths": {
        "@sharedlib/_": ["src/MyRental_Shared/_"]
        },
    }
}

migration scripts : {
"migration:generate": "node ./src/MyRental_Shared/scripts/mig.script.js generate",
"migration:run": "node ./src/MyRental_Shared/scripts/mig.script.js run",
"migration:revert": "node ./src/MyRental_Shared/scripts/mig.script.js revert",
} ["copy and paste in the package.json file"]
