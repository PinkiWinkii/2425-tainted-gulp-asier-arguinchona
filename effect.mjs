import { positive_effect_tokens } from "./constants.mjs";

export default class Effect {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    static from(name){
        return new Effect(
            name,
            positive_effect_tokens.some(token => name.includes(token)) ? 'beneficial' : 'harmful'
        )
    }
}