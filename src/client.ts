import { Client, Collection } from 'discord.js'
import CommandLoader from './structure/loaders/command'
import { join } from 'path'

export interface ClientInterface extends Client {
    start(token: string, tries?: Number): Promise<void>
}

interface ICommand {
    help?: {
        name: string;
        aliases: string[];
    }
}

class DiscordClient extends Client implements ClientInterface {
    public client: Client = new Client()
    public commands: Collection<string, ICommand> = new Collection()

    async start(token: string | undefined, tries = 0): Promise<void> {
        if (tries > 0) console.log(`::${tries} Attempting to reconnect...`)
        this.client.login(token).then(() => console.log(`[DiscordClient] Initialized!`))

        this.client.on('error', async (err) => {
            this.client.destroy()
            this.start(token, tries++)
        })
    }

    async loadCommands() {
        const loadedCommands = new CommandLoader()
        loadedCommands.index(join(__dirname, 'app', 'commands')).then(console.log)
    }


}

export default DiscordClient