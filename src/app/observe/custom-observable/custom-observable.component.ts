import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, from, interval, map, tap } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  iserr:boolean=false
  constructor(private service:AppServicesService){

  }
   subs : Subscription|undefined;
   subs2:Subscription|undefined;

  ngOnInit(): void {

//custom observable

    const obs = new Observable(observer=>{
      setTimeout(()=>{
        observer.next('angularjs');

      },1000)
      setTimeout(()=>{
        observer.next('html');
        observer.complete();


      },2000)
      setTimeout(()=>{
        observer.next('css');


      },3000)
    })


    const obs2 = new Observable(observer=>{ 
      setInterval(()=>{
       observer.next('emited')
      },1000)
      
     
    })
















    obs.subscribe(res=>{
      this.service.print(res,'container1')
    },
    (err=>{
      console.log(err);
      this.iserr=true
    }),
  
    ()=>{
      console.log("completed")
    }
  
  );


  this.subs = obs2.subscribe(res=>
    {console.log(res);}
  )



  //map observable

  const obs3 = from([{name:'srijan',branch:'ee',scope:'yes'},{name:'surydddddddda',branch:'eeef',scope:'yes'},{name:'sridvdfffffffffjan',branch:'eeefe',scope:'yes'},{name:'svfdcn',branch:'ee',scope:'yes'}])


  obs3.pipe(map(data=>data.name)).subscribe(res=>{
console.log(res);
this.service.print(res,'container2');
  })


  //in case of pluck we can directly pick/pluck any property of res withouthb usinf map() e.g here ----->  obs3.pipe(pluck('name')).subcribe();


  from([{name:'srijan',branch:'ee',scope:'yes'},{name:'surydddddddda',branch:'eeef',scope:'yes'},{name:'sridvdfffffffffjan',branch:'eeefe',scope:'yes'},{name:'svfdcn',branch:'ee',scope:'yes'}

  ]).pipe(tap(res=>{
    console.log('before filter tap ==> ',res);
  }),filter(data=> data.name.length>=7),tap(res=>{
    console.log('after filter tap ==> ',res);
  }),map(data=>data.name)).subscribe(data=>{
    console.log(data);
    this.service.print(data,'container3')
  })










  



  }















  ngOnDestroy(){

    this.subs?.unsubscribe();

  }




  
}
