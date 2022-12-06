import { Characters } from "./All"

export class Warrior extends Characters{

        constructor(){
            super()
            this.health = 200
            this.attack = 50
            this.pers = "Warrior"
            this.action = "I didn't feel your beat!"
        }
        ability(): void {
        }

        hit(enemy:any){     
        }
    
}
