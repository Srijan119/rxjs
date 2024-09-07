import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {



  exclusiveSubject = new Subject<boolean>();
  videoSubject = new ReplaySubject<string>(2);
  asyncSubject = new AsyncSubject<string>();

  constructor(private http: HttpClient) { }

  print(ele:any, containerId:any){

    let el = document.createElement(`li`);
    el.innerText = ele;
    document.getElementById(containerId)?.appendChild(el);
  }


  getData(){
return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  

}
