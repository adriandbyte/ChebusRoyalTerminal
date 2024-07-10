import yargs from "yargs";
import { hideBin } from "yargs/helpers";

function validateStringArray(values: unknown[]) {
  for (const value of values) {
    if (typeof value !== "string") {
      throw new Error(`Invalid value: ${value}. All values must be strings.`);
    }
  }
  return values as string[];
}

export const yargsPlugin = yargs(hideBin(process.argv))
  .option("users", {
    alias: "users",
    describe: "Users for the tournament",
    type: "array",
    demandOption: true,
    coerce: validateStringArray,
  })
  .parseSync();
