import { Component } from '@angular/core';
import { AppServicesService } from '../AppServices/app-services.service';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent {

   show_Exclusive:boolean = false;

  constructor(private service: AppServicesService){

    this.service.exclusiveSubject.subscribe(res=>{
      this.show_Exclusive = res;
    })

  }



}
