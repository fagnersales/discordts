import { Client } from 'discord.js'

interface ClientInterface extends Client {
    start(token: string, tries?: Number): Promise<void>
}

class DiscordClient extends Client implements ClientInterface {
    public client: Client = new Client()

    async start(token: string | undefined, tries = 0): Promise<void> {
        if (tries > 0) console.log(`::${tries} Attempting to reconnect...`)
        this.client.login(token).then(() => console.log(`[DiscordClient] Initialized!`))

        this.client.on('error', async (err) => {
            this.client.destroy()
            this.start(token, tries++)
        })
    }

    

}

export default new DiscordClient() 