import { Contacts } from './../Services/Class/Contacts';
import { Router } from '@angular/router';
import { EmailService } from './../Services/email/email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  success_message = "Juste un test";
  useForm!: FormGroup;
  error! : boolean ;
  success = false;
  constructor(private emailServ: EmailService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.useForm = this.formBuilder.group({
      fullName:['', Validators.required],
      number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['', [Validators.required, Validators.email]],
      objet:['', Validators.required],
      message:['', Validators.required]
    })

  }
  get fbname(){
    return this.useForm.get('fullName');
  }

  get fbnumber(){
    return this.useForm.get('number');
  }
  get fbemail(){
    return this.useForm.get('email');
  }
  get fbobjet(){
    return this.useForm.get('objet');
  }
  get fbmessage(){
    return this.useForm.get('message');
  }

  closed(){
    this.success = false;
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.success = !this.success;
    const formValue = this.useForm.value;
    const mail = new Contacts(
      formValue['fullName'],
      formValue['number'],
      formValue['email'],
      formValue['objet'],
      formValue['message']
    );

    this.initForm();
    this.emailServ.sendMessage(`${this.emailServ.API_URL}/email`, mail).subscribe(
      data =>{
        let res = data;
        console.log('Let\'s show the data : \n'+res);
      },
      err => {
        console.log(err);
      }
    )
    this.success_message = "Votre message bien été envoyé à notre équipe";

    console.log(mail)



  }
}
