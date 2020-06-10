import DiscordClient from './client'
import { config } from 'dotenv'

config()

const client = new DiscordClient()

client.loadCommands()

client.start(process.env.TOKEN)