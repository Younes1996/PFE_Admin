export class Clients {

    public id:number;
    public nom:string;
    public prenom:string;
    public adresse:string;
    public tel:string;
    public type:string;
    public password:string;
    public carten:string;
    public date_d:string;
    public daira_d:string;
    public carteF:string;
    public carteF_d:string;
    public wilaya:string;
    public daira:string;
    public commune:string;


    constructor() {
        this.nom = "";
        this.prenom = "";
        this.adresse = "";
        this.tel = "";
        this.type = "";
        this.password="";
        this.date_d = "";
        this.daira_d = "";
        this.carteF = "";
        this.carteF_d = "";
        this.wilaya = "Wilaya";
        this.daira = "Daira";
        this.commune = "Commune";
    }
}
