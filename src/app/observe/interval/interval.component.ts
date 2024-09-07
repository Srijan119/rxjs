import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private appService : AppServicesService){}

obMasg:any='';


videoSubscription : Subscription | undefined;

  ngOnInit(): void {

    // const broadcastvidfeos = interval(1000); 
    //timer(delay, interval)
    const broadcastvidfeos = timer(5000, 1000);






   this.videoSubscription= broadcastvidfeos.subscribe( (res) =>{
    console.log(res)
  this.obMasg = res;
  this.appService.print(`video ${res}`,'elementContainer2');

  if(res>=5){
    this.videoSubscription?.unsubscribe();
  }



}
);




  }




  

}
