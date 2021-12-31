import "dotenv/config";
import { Client, Intents } from "discord.js";

import { commandsController } from "./Commands";
import { interactionController } from "./Interactions";

(async () => {
  await commandsController.registerCommands();
})();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const foundInteraction = await interactionController.findInteraction(
    interaction.commandName
  );

  if (foundInteraction) {
    foundInteraction.run(interaction);
  }
});

client.login(process.env.CLIENT_TOKEN);
