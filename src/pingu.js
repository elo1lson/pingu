
import { BaseClient } from './imports.js'
import { config } from 'dotenv'

config()


let client = new BaseClient()
client.loadVanilla('src/commands/vanilla/')
client.loadSlash('src/commands/slash/')
client.loadEvents('src/events')
client.start(process.env.TOKEN)
client.setSlash()
