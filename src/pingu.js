'use strict'

import BaseClient from './imports.js'
import { config } from 'dotenv'
config()

let client = new BaseClient()

client.loadVanilla('src/commands/vanilla/')
client.loadEvents('src/events')
client.login(process.env.TOKEN)
