import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ChaiKIcon } from '../Enums/icons.enum';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private commnservice = inject(ApiService)
  opeentoggleCatg:any = signal(0)
  apiName = signal('')
  IconValue:any

  Menuall = toSignal(this.commnservice.getMenuall() as Observable<any[]>, {initialValue:[]})

  constructor(){
    // this.commnservice.getusersall()
    effect(() => {
      console.log("get all menus", this.Menuall())
      let menuList = this.Menuall();

      menuList.forEach(item => {
      this.apiName = item.categName;
      this.geticonWithName(this.apiName)
      });
    })
  }


  geticonWithName(Iname:any){
    const allowedIcons = Object.values(ChaiKIcon) as string[];
    console.log(allowedIcons)
    for (const [key, value] of Object.entries(ChaiKIcon)){
      if(Iname == key){
        console.log(`Key: ${key}, Icon: ${value}`)
        this.IconValue = value 
        return value;
      }
    }
    return '❓' ;
  }

  tooglecategory(i:any){
    if(this.opeentoggleCatg() == i){
      this.opeentoggleCatg.set(null);
    }else{
      this.opeentoggleCatg.set(i)
    }
  }


}
