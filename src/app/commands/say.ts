import DiscordClient from "client";
import { Message } from "discord.js";

interface ICommandHelp {
    name: String
    aliases?: String[]
}

interface ICommand {
    run(Client: DiscordClient, message: Message): Promise<void>
    help(): ICommandHelp
}

class Command implements ICommand {

    async run(Client: DiscordClient, message: Message): Promise<void> {
        message.channel.send(`Oi tudo bom?`)
    }

    help(): ICommandHelp {
        return {
            name: 'say',
            aliases: ['falar']
        }
    }

}

export default new Command()