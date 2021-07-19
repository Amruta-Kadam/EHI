import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private $router : Router, private formBuilder: FormBuilder,) { }
  public firstLoad:boolean = true;
  public edit:boolean = false;
  phonebookform = this.formBuilder.group({
    fname: '',
    lname: '',
    emailid :'',
    phonen :'',
    status : '',
  });
  public phonebooks = [{
    'firstName': 'Sophy ',
    'lastName' : 'Kibana',
    'email': 'skibana@emobi.com',    
    'number': '0729161616',    
    'status' : 'Active',
    'id' : 1
  }, {
    'firstName': 'Alphonce ',
    'lastName' : 'Otieno',
    'email': 'aotieno@emobi.com',    
    'number': '0712121212',        
    'status' : 'Active',
    'id' : 2
  }, {
    'firstName': 'Tonny ',
    'lastName' : 'Onyango',
    'email': 'tango@emobi.com',
    'number': '0735556476',        
    'status' : 'Active',
    'id' : 3

  }, {
    'firstName': 'Maurice ',
    'lastName' : 'Kalonzo',
    'email': 'mkalonzo@emobi.com',    
    'number': '07239945445',        
    'status' : 'InActive',
    'id' : 4
  }, {
    'firstName': 'Abubakar ',
    'lastName' : 'Maboza',
    'email': 'mmaboza@emobi.com',    
    'number': '0713901643',    
    'status' : 'Active',
    'id' : 5
  }, {
    'firstName': 'Philip ',
    'lastName' : 'Wabwire',
    'email': 'pwabwire@emobi.com',    
    'number': '0714901699',    
    'status' : 'InActive',
    'id' : 6
  }, {
    'firstName': 'Patrick ',
    'lastName' : 'Kimutai',
    'email': 'pkimutai@emobi.com',
    'number': '0722901612',        
    'status' : 'InActive',
    'id' : 7
  }, {
    'firstName': 'Mary ',
    'lastName' : 'Wamboi',
    'email': 'mwamboi@emobi.com',    
    'number': '0712901299',    
    'status' : 'Active',
    'id' : 8
  }];

  public addUser(){    
    this.firstLoad = false;    
  }
  onSubmit(): void {         
    console.log(this.phonebooks.length)
    this.phonebooks.push({      
      'firstName': this.phonebookform.value.fname,
      'lastName' : this.phonebookform.value.lname,
      'email': this.phonebookform.value.emailid,    
      'number': this.phonebookform.value.phonen,          
      'status' : this.phonebookform.value.status,
      'id' : this.phonebooks.length + 1
    })    
    alert("Record Added Successfully")
    this.firstLoad = true;    
  }
  editUser(id){
    this.edit = true;
    this.firstLoad = false;
    this.phonebooks[id-1].firstName = this.phonebookform.value.fname;
    this.phonebooks[id-1].lastName = this.phonebookform.value.lname;
    this.phonebooks[id-1].email = this.phonebookform.value.emailid;
    this.phonebooks[id-1].number = this.phonebookform.value.phonen;
    this.phonebooks[id-1].status = this.phonebookform.value.status;        
  }
  deleteUser(id){
   this.phonebooks =  this.phonebooks.filter((item) => item.id !== id);
   alert("Record Deleted Succesfully")   
  }
  ngOnInit() {
  }

}
