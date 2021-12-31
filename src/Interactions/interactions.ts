import axios from "axios";
import { CommandInteraction, CacheType } from "discord.js";

const interactions = [
  {
    command: "ping",
    run: async (interaction: CommandInteraction<CacheType>) => {
      await interaction.reply("Pong");
    },
  },
  {
    command: "joke",
    run: async (interaction: CommandInteraction<CacheType>) => {
      try {
        const response = await axios.get(
          `https://api.chucknorris.io/jokes/random`
        );

        const { value } = response.data;

        await interaction.reply(value);
      } catch (error) {
        console.log(error);
      }
    },
  },
];

export { interactions };
