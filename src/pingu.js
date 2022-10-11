"use strict"

import { BaseClient } from './imports.js'
import { config } from 'dotenv'
import { env } from 'process'

config()

new BaseClient()
  .config({
    PREFIX: '.',
    TOKEN: env.TOKEN,
    FOLDERS: {
      EVENT: 'src/events',
      VANILLA: 'src/commands/vanilla',
      SLASH: 'src/commands/slash'
    }

  })
  .start()