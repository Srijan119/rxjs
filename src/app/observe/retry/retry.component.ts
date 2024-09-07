import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime, delay, distinctUntilChanged, fromEvent, map, retry, retryWhen, scan } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';


@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent  implements OnInit,AfterViewInit{
  

  @ViewChild ('input1') input1:ElementRef|undefined;
  val:string = '';
  constructor(private http:HttpClient,private service:AppServicesService){}

  ngAfterViewInit(): void {


    const obs3 = fromEvent<any>(this.input1?.nativeElement,'keyup').pipe(map(res=>res.target.value),debounceTime(2000),distinctUntilChanged());

      obs3.subscribe(res=>{
        console.log(res);
        this.val = res;
        
      })


  }



  

  ngOnInit(): void {
  this.fetchData()
  }

  



  fetchData(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      
    // retry(2)
    retryWhen(err=>err.pipe(
      delay(3000),
      scan((retryCount)=>{
        if(retryCount>=5){
          throw err;
        }
        else{
          retryCount = retryCount+1;
          console.log("retrycount==>",retryCount);
          return retryCount;
        
        }
    },0)
    ))
  
  
  
  ).subscribe(res=>{
      console.log(res);
    })
  }

}
