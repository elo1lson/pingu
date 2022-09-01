'use strict'

import { BaseClient, AntiCrash } from './imports.js'
import { config } from 'dotenv'
import { yml } from "./ymlWrithe.js"
yml()
config()

AntiCrash.all(true)

let client = new BaseClient()
client.loadVanilla('src/commands/vanilla/')
client.loadSlash('src/commands/slash/')
client.loadEvents('src/events')
client.login(process.env.TOKEN)
//client.setSlash()
