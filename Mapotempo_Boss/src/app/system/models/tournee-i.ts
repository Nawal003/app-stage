import { MissionI } from './mission-i';
import { SiteI } from './site-i';

export interface TourneeI {
    id?:number;
    debut:Date;
    fin:Date;
    mission:MissionI[];
    site:SiteI;

}

// valeurs par défaut
export class Tournee implements TourneeI{

    debut:Date;
    fin:Date;
    mission:[];
    site:SiteI;

}
