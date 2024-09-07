import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, shareReplay, tap } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit{

  constructor(private service:AppServicesService,private http: HttpClient){}


  allUsers:Observable<any>= new Observable<any>;
  filteredUserId:Observable<any> = new Observable<any>;
  filteredBool :Observable<any>= new Observable<any>;
  
  ngOnInit(): void {

    this.allUsers = this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(shareReplay());
    this.filteredUserId = this.allUsers.pipe();
    this.filteredBool = this.allUsers.pipe();
9
  }



  getfilteredData(){




  }




}
