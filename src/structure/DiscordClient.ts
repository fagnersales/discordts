import { Client, Collection } from 'discord.js'
import DiscordHandler from './DiscordHandler'
import CommandConfig from './DiscordCommand'
import { config } from 'dotenv'
config()

import { join } from 'path'

export default class DiscordClient extends Client {
    commands: Collection<string, CommandConfig>
    events: Collection<string, string>

    constructor() {
        super()

        this.commands = new Collection()
        this.events = new Collection()
    }

    async loginBot(client: DiscordClient): Promise<any> {
        return client.login(process.env.TOKEN).then(() => console.log('Logged xD'))
    }

    startHandlers(): void {
        DiscordHandler.startCommands(this, join(__filename, '..', '..', 'app', 'commands'))
    }
}