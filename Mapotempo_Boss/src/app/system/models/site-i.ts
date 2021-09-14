import { TourneeI } from './tournee-i';
import { UserI } from './user-i';

export interface SiteI {
    id?: number;
    nom: string;
    user: UserI;
    tournee: TourneeI[];

}
export class Site implements SiteI{
    nom:'';
    user:UserI;
    tournee:[];
}