import shuffleArray from "../utils/shufflePlayers";

export class Matches {
  private users: string[];
  private matches: string[];
  public userWithoutMatch: string | null;

  constructor(users: string[]) {
    this.users = users;
    this.matches = [];
    this.userWithoutMatch = null;
  }

  validateUsers() {
    if (this.users.length % 2 !== 0) {
      const randomUser =
        this.users[Math.floor(Math.random() * this.users.length)];
      this.userWithoutMatch = randomUser;
      this.users = this.users.filter((user) => user !== randomUser);
    }
  }

  generateRandomMatches() {
    const shuffledUsers = shuffleArray(this.users);
    const numMatches = Math.floor(shuffledUsers.length / 2);
    for (let i = 0; i < numMatches; i++) {
      const user1 = shuffledUsers[i * 2];
      const user2 = shuffledUsers[i * 2 + 1];
      const match = `${user1} vs ${user2}`;
      this.matches.push(match);
    }
  }

  printUsers() {
    console.log("\nLOS JUGADORES SON:\n");
    this.users.forEach((user) => console.log(user));
  }

  printMatches() {
    console.log("\nLOS PARTIDOS GENERADOS SON:\n");
    this.matches.forEach((match) => console.log(match));
  }

  printUserWithoutMatch() {
    if (!this.userWithoutMatch) return;
    console.log(`\nEL JUGADOR QUE PASARA DE FORMA DIRECTA ES:`);
    console.log(this.userWithoutMatch);
  }
}
