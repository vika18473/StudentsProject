import { Characters } from "./All"

export class Thief extends Characters{

        constructor(){
            super()
            this.health = 100
            this.attack = 25
            this.pers = "Thief"
            this.action = "Run!"
        }
        hit(enemy:any){     
        }
        ability(): void {
        }
}
