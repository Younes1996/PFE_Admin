
export class Commande {

    public type:string;
    public dateCmd:String;
    public ntravail:string;
    public outils:string;
    public nbre_jour:number;
    public tversement:string;
    public etats:string;
    public client_carten:string;


    constructor() {
        this.type = "Type de Commande";
        this.dateCmd = new Date().toLocaleDateString()
        this.ntravail = "Nature de Travail";
        this.outils = "Outils";
        this.tversement = "Type de Versement";
        this.etats = "En Attente";

    }
}
