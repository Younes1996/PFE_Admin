import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  constructor(private contactservice:ContactsService,

  ) { }
  contacts=[];

  ngOnInit(): void {
    this.contactservice.getEmployeesList()
        .subscribe(data=>this.contacts=data);
  }
  contact={nom:"",prenom:"",email:"",dateNaissance:"",tel:""};
  saveContact(){
    this.contactservice.createEmployee(this.contact)
        .subscribe(data => console.log(data), error => console.log(error));
  }

}
