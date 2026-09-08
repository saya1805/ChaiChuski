import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent {
  authform!:FormGroup
  fb:any = inject(FormBuilder)
  service = inject(ApiService)
  route = inject(Router)

  formData = signal<any>(null)


  apires = toSignal(toObservable(this.formData).pipe(switchMap((data:any) =>{if (!data) return of(null);return this.service.senduserinfo(data);})))

  constructor(){
    this.authform = this.fb.group({
      mailid:["",[Validators.email,Validators.required]],
      password:["",Validators.required],
    })

    effect(() => {
      const res = this.apires() as any;
      if(res){
        console.log("Api Response",res)
        if(res.flag == "Success"){
          this.route.navigateByUrl('/dashboard')
        }else{
          alert("This Mail id Already Registerd")
        }
      }
    })
  }

  signin(){
    if(this.authform.valid){
      this.formData.set(this.authform.value);
      console.log(this.formData())
    }
    // this.service.senduserinfo(this.authform.value).subscribe((res:any) => {
    //   console.log(res)
    // })
  }






}
