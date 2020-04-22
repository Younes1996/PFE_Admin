export class Clients {

    public id:string;
    public nom:string;
    public prenom:string;
    public adresse:string;
    public tel:string;
    public carte_n:string;
    public date_d:string;
    public daira_d:string;
    public carteF:string;
    public carteF_d:string;
    public wilaya:string;
    public daira:string;
    public commune:string;


    constructor() {
        this.id = "";
        this.nom = "";
        this.prenom = "";
        this.adresse = "";
        this.tel = "";
        this.carte_n = "";
        this.date_d = "";
        this.daira_d = "";
        this.carteF = "";
        this.carteF_d = "";
        this.wilaya = "Wilaya";
        this.daira = "Daira";
        this.commune = "Commune";
    }
}
