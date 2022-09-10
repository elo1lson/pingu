'use strict'
import yaml from "yaml"
import fs from "fs"
export default class Resolve {
    constructor(path) {
        this.langs = []
        this.#search(path)

    }
    #search(path) {
        fs.readdirSync(path).forEach(folder => {
            this.langs.push(folder)
        })
        return this.langs
    }
}