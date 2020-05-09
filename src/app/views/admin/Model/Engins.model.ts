export class Engins {
   public id:number;
    public codeMat:string;
    public typeMat:string;
    public marque:string;
    public n_serie:string;
    public matricule:string;
    public valAqui:number;
    public dateAqui:Date;
    public duree:number;
    public finAqui:Date;
    public etats:string;
    public operation:string;
    public chaufeur:string;






    constructor() {
        this.codeMat="";
        this.typeMat="Type Materiel";
        this.marque="Marque";
        this.n_serie="";
        this.matricule="";
        this.valAqui=0.00;
        this. dateAqui;
        this.duree=0.00
        this. finAqui=this. dateAqui;
        this.etats="Etas";
        this.operation="Nature de Travail";
        this.chaufeur="Chaufeur";

    }
}
