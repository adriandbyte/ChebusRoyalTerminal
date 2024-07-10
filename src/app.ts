import { yargsPlugin } from "./config/plugins/yarg.plugin";
import { ServerApp } from "./presentation/server.app";

(async () => {
  main();
})();

async function main() {
  const { users } = yargsPlugin;
  ServerApp.run({ users });
}
