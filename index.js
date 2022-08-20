import Base from './src/core/client.js'

import { config } from 'dotenv'

config()

let client = new Base()
client.loadVanilla('src/commands/vanilla')
client.loadVanilla()

client.login(process.env.TOKEN)
