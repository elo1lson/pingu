'use strict'

import Base from './structures/base.js'
import { config } from 'dotenv'
config()

let client = new Base()

client.loadVanilla('src/commands/vanilla/')
client.loadEvents('src/events')
client.login(process.env.TOKEN)
