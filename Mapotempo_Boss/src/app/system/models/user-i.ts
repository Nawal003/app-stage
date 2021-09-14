import { SiteI } from "./site-i";

export interface UserI {
    id?:number;
    nom:string;
    email:string;
    password:string;
    site:SiteI;
}
export class User implements UserI{
    nom:'';
   email:'';
   password:'';
   site:SiteI;
}