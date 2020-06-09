import client from './client'
import { config } from 'dotenv'

config()

client.start(process.env.TOKEN)