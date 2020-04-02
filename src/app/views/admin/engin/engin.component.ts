import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../services/contacts.service';
@Component({
  selector: 'app-engin',
  templateUrl: './engin.component.html',
  styleUrls: ['./engin.component.css']
})
export class EnginComponent implements OnInit {

  // @ts-ignore
  constructor(private contactservice:ContactsService,
  //private router:Router

  ) { }
contacts=[];
  ngOnInit(): void {
    this.contactservice.getEmployeesList()
        .subscribe(data=>this.contacts=data);
  }
  contact={nom:"",prenom:"",email:"",dateNaissance:"",tel:""};

  saveEngin(){
    this.contactservice.createEmployee(this.contact)
        .subscribe(data => console.log(data), error => console.log(error));
  }

}
