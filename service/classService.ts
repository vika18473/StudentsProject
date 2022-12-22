import { CharactersClass } from "../characters/enum";

export class ClassService{
    public getListCharacters(){
        return{
            1: CharactersClass.Magician,
            2: CharactersClass.Thief,
            3: CharactersClass.Warrior
        }
    }
}