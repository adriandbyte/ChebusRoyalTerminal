import { Matches } from "../use-cases/matches.use-case";

interface ServerOptions {
  users: string[];
}

export class ServerApp {
  static run({ users }: ServerOptions) {
    const matches = new Matches(users);
    matches.printUsers();
    matches.validateUsers();
    matches.printUserWithoutMatch();
    matches.generateRandomMatches();
    matches.printMatches();
  }
}
