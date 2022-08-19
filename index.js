import Base from './scr/core/client.js'

import { config } from 'dotenv'

config()

let client = new Base()
client.loadVanilla('src/commands/vanilla')

client.login(process.env.TOKEN)