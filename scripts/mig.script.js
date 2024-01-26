// eslint-disable-next-line @typescript-eslint/no-var-requires
var { exec } = require("child_process");
const COMMANDS = {
  generate: `npx TypeORM-ts-node-esm migration:generate -d ./src/sharedlib/database/datasource.migration.ts ./src/sharedlib/orm/migrations/${process.argv[3]}`,
  run: `npx TypeORM-ts-node-esm migration:run -d ./src/sharedlib/database/datasource.migration.ts`,
  revert: `npx TypeORM-ts-node-esm migration:revert -d ./src/sharedlib/database/datasource.migration.ts`,
};
(() =>
  exec(COMMANDS[process.argv[2]], (error, stdout, stderr) => {
    if (error !== null) {
      console.error(stderr);
    }
    console.log(stdout);
  }))();
