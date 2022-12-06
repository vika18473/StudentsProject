import { Thief } from './thief';
import { Warrior } from './warrior';
import { Magician } from './magician';
import { CharactersClass } from './enum';

export class Create {
    static createPers(chair: string) {
        if (chair == CharactersClass.Magician) {
            return new Magician()
        } else if (chair == CharactersClass.Thief) {
            return new Thief()
        } else if(chair == CharactersClass.Warrior){
            return new Warrior()
        }else{
            return "Such character does not exist"
        }
    }
}