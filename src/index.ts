import { Client, Collection } from 'discord.js'
import { config } from 'dotenv'

config()

import start from './handlers/start'

new Client().login(process.env.TOKEN)