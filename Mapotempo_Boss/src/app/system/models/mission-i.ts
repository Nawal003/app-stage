
import { TourneeI } from './tournee-i';

export interface MissionI {
    id?:number;
    debut:Date;
    fin:Date;
    retard:boolean;
    anomalie:boolean;
    tournee:TourneeI[];
}
