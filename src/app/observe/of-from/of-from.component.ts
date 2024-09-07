import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  constructor(private service:AppServicesService){}
  obMasg :any={};


  obj5 :Observable<any> = new Observable<any>

  ngOnInit(): void {





    const obs1 = of('srijan', 'srivastav', '243');
    const obs2 = of({ a:'srijan',b: 'srivastav',c: '243'});
    const obs3 = from(['srijan','srivastav','243']);
     this.obj5 = from('Welcome Sunday')


    const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve('promise resolved');
    },2000)
    });

    const obs4 = from(promise);


    obs1.subscribe(res=>{
      console.log(res);
      this.service.print(res,'containerElement');
    })

    obs2.subscribe(res=>{
      this.obMasg = res;
      console.log(res);
      
    })
    
  obs3.subscribe(res=>{
    this.service.print(res,'containerElement2');
  })


  obs4.subscribe(res=>{
    this.service.print(res,'containerElement4');
  })


  this.obj5.subscribe(res=>{
    this.service.print(res,'containerElement5');
  })


  }





}
