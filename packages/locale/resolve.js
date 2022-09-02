'use strict'
import yaml from "yaml"
import fs from "fs"

import { deflateSync } from "zlib"
export default class Resolve {
    constructor(lang) {
        this.load()
        this.langs = []

    }
    load() {
        let temporaryLangs []

        fs.readdirSync(path).forEach(folder => {
            temporaryLangs.push(folder)

        })

    }
    get traduce() {

    }
    get messages() {

    }
    get error() {

    }
}