export abstract class Characters{
    protected  health : number 
    protected  attack : number 
    protected  action : string  //действие
    protected pers: string

    get characterHP(): number {
        return this.health
    }

    abstract hit(enemy:any):any //attack
    abstract ability(): void;  //способность
}
