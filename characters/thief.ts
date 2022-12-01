import { Characters } from "./All"

export class Thief extends Characters{

    constructor(health : number = 100, attack : number = 25, action : string = "Run!") {
        super(health, attack, action)
        }
}
