import { Characters } from "./All"

export class Warrior extends Characters{
    constructor(health : number = 200, attack : number = 50, action : string = "I didn't feel your beat!") {
        super(health, attack, action )
        }
}