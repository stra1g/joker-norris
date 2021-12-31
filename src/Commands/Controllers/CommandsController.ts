import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

import { commands } from "../commands";

class CommandsController {
  private rest: REST;

  constructor() {
    const rest = new REST({ version: "9" }).setToken(process.env.CLIENT_TOKEN);
    this.rest = rest;
  }

  async registerCommands() {
    try {
      console.log("Started refreshing application (/) commands.");

      await this.rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID,
          process.env.GUILD_ID
        ),
        {
          body: commands,
        }
      );

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  }
}

export { CommandsController };
