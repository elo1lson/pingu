import { EmbedBuilder } from "discord.js";

class Embed extends EmbedBuilder {
    constructor(data = {}) {
        super(data)
        this.setColor("Black")
        this.setTimestamp()
    }
}
export default Embed