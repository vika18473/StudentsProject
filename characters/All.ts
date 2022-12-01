export abstract class Characters{
    private  health : number 
    private  attack : number 
    private  action : string

    constructor(health : number, attack : number, action: string) {
        this.health = health
        this.attack = attack
        this.action = action
    }
    hit = () => `I'm attacking with ${this.attack}!`
    ability = () => `${this.action}`
}
