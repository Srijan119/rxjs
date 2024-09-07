import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {


  constructor(private service: AppServicesService){

  }

@ViewChild('addBtn') addBtn : ElementRef | undefined;

 obsservable : Observable<any> =new Observable<any>;


ngOnInit(): void {


}


count:any = 0;


ngAfterViewInit(): void {
  this.obsservable = fromEvent(  this.addBtn?.nativeElement,'click');

  this.obsservable.subscribe(res=>{console.log('video 1') 
    this.service.print(`video ${++this.count}`,'elementContainer2');
    this.service.print(`video ${++this.count}`,'elementContainer');

  });

}




}



// from event is used to create obsservable stream