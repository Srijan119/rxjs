import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
   subs: Subscription| undefined;

  ngOnInit(): void {



   const Observable = interval(1000);
   const obs2 = from([{ a:'srijan'},{b: 'srivastav'},{c: '243'}]);
   const obs3 = of('srijan','dkf','djikfs','jnsfkd');




   //EX-01

   this.subs = Observable.pipe(take(5),
   toArray())
   .subscribe(res=>{
    console.log(res);
    // if(res>=7)
    //   this.subs?.unsubscribe();
   })



   //EX-02


   obs2.pipe(take(2),
  toArray()).subscribe(res=>console.log(res));


  obs3.pipe(toArray()).subscribe(res=>console.log(res));


  }



  

}
