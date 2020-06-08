import Client from './structure/DiscordClient'

class App {
    client: Client

    constructor() {
        this.client = new Client()
        
        this.client.startHandlers()
        this.client.loginBot(this.client)
    }
    
}

new App()
