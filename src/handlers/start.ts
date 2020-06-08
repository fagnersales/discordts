import { Client, Collection } from 'discord.js'
import config from '../../config'

const start = (client: Client) => {
    client.login(config.token)
}

export default start