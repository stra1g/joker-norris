import { CommandInteraction, CacheType } from "discord.js";

const interactions = [
  {
    command: "ping",
    run: async (interaction: CommandInteraction<CacheType>) => {
      await interaction.reply("Pong");
    },
  },
];

export { interactions };
