import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  users:any={};
  string:any='';
  constructor(private fb: FormBuilder,private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.users=JSON.parse(localStorage.getItem('data')|| '{}');

    if(Object.keys(this.users).length === 0)
    {
      this.service.getusers().subscribe(users=> {
        this.users=users;
      })
    }
    
    this.form=this.fb.group({
      name:['',Validators.required],
      password:['']
    })
    
  }

  check()
  {
    console.log(this.users);
    for(let i=0;i<this.users.length;i++)
    {
      if(this.form.value.name==this.users[i].name && this.form.value.password==this.users[i].password)
      {
        this.service.auth(true);
        this.router.navigateByUrl("/home");
      }
    }
    this.string="enter a valid name or password"
    
  }
  signup()
  {
    this.router.navigateByUrl("/signup");
  }
}
