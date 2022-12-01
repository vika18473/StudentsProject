import { Characters } from "./All"

export class Magician extends Characters{

    constructor(health : number = 80, attack : number = 100, action: string = "I bewitched you, now you can't walk!") {
    super(health, attack, action)
    }

}



