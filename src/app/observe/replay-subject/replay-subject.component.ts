import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent {
   
  async_data:string ='';
  constructor(private service:AppServicesService){
  this.service.asyncSubject.subscribe(res=>{
    this.async_data = res;
  });
  }

  button2_text:boolean = true;
  button3_text:boolean = true;


  subs2:Subscription|undefined;
  subs3:Subscription|undefined;



  list1 = ['angular 1','angular 2']
  list2:any[] = []
  list3:any[] = [];


  addVideo(event:any){
    console.log(event.value);
    this.list1.push(event.value);
this.service.videoSubject.next(event.value);
this.service.asyncSubject.next(event.value);

  }


  button2(){

    if(!this.button2_text){
      this.subs2?.unsubscribe();
    }
    else{

   this.subs2= this.service.videoSubject.subscribe(res=>{
      this.list2.push(res);
    })
  }


    this.button2_text =!this.button2_text
  }
  button3(){

    if(!this.button3_text){
      this.subs3?.unsubscribe();
    }
    else{

   this.subs3= this.service.videoSubject.subscribe(res=>{
      this.list3.push(res);
    })
  }








    this.button3_text =!this.button3_text;
  }


  complete(){

    this.service.asyncSubject.complete();
  }



}
