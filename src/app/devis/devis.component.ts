import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from './../Services/email/email.service';
import { Component, OnInit } from '@angular/core';
import { Contacts } from '../Services/Class/Contacts';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  success_message = "Juste un test";
  success = false;
  useFormBuild!: FormGroup;

  constructor(private emailServ: EmailService, private router: Router, private form: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.useFormBuild = this.form.group({
      fullName: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['', [Validators.required, Validators.email]],
      objet:['', Validators.required],
      message:['', Validators.required]

    })
  }

  get fbname(){
    return this.useFormBuild.get('fullName');
  }

  get fbnumber(){
    return this.useFormBuild.get('number');
  }
  get fbemail(){
    return this.useFormBuild.get('email');
  }
  get fbobjet(){
    return this.useFormBuild.get('objet');
  }
  get fbmessage(){
    return this.useFormBuild.get('message');
  }

  closed(){
    this.success = false;
    this.router.navigate(['/home']);
  }

  onSubmit(){
    const formValue = this.useFormBuild.value;
    this.success = !this.success;
    const mail = new Contacts(
      formValue['fullName'],
      formValue['number'],
      formValue['email'],
      formValue['objet'],
      formValue['message']
    );
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
    this.initForm();
    this.top();



    console.log(mail)
    //this.router.navigate(['/home']);

  }
  top(){
    window.scrollTo(0, 0);
  }

}
