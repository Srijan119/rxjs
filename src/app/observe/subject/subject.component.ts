import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy{


  constructor(private service: AppServicesService){

    this.service.exclusiveSubject.subscribe();

    
}

  ngOnInit(): void {
    this.service.exclusiveSubject.next(true);
  }



  ngOnDestroy(): void {
    this.service.exclusiveSubject.next(false);
  }


}

