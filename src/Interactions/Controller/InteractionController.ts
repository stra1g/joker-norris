import { interactions } from "../interactions";

class InteractionController {
  findInteraction(commandName: string) {
    const foundInteraction = interactions.find(
      (interaction) => interaction.command === commandName
    );

    return foundInteraction;
  }
}

export { InteractionController };
