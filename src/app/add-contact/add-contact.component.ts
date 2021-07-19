import { Component, OnInit ,Input,SimpleChanges} from '@angular/core';
import { CommonService }  from './../common.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private commonService$ :CommonService) { }
  @Input() fname;
  // public fname = "";
  public lname = "";
  public emailid ="";
  public phonen = "";
  public status = "";
  
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes)
  }
  public addDetails(){
    //this.commonService$.setCustomerDetails(); 
  }
  ngOnInit() {
    console.log("add contact works")
  }

}
