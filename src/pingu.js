'use strict'

import {BaseClient} from './imports.js'
import { config } from 'dotenv'
config()

let client = new BaseClient()

client.loadVanilla('src/commands/vanilla/')
client.loadEvents('src/events')
client.login('ODU2NTc4MTg3NTA0MjU0OTc2.GezLCR.edqkBPLcZYzOlKi7eTp--4vVOLOyZU1QoRw0l0')
