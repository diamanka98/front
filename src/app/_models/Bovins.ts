export class Bovins {
    nom : string;
    situation : string;
    etatDeSante : string;
  idBovin: number;

    constructor(idBovin,nom,situation,etatDeSante){
      this.idBovin = idBovin
        this.nom = nom;
        this.situation = situation;
        this.etatDeSante = etatDeSante;
    }
}

export interface Santebovin {
  nombre : number;
  sante : string;

}