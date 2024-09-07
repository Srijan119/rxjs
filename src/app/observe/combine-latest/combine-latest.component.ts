import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, combineLatest, forkJoin, fromEvent, map, take, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements AfterViewInit {

  obs1:Observable<any> = new Observable<any>;
  obs2:Observable<any> = new Observable<any>;
  obs3:Observable<any> = new Observable<any>;


@ViewChild('selColor') selColor:ElementRef | undefined;

@ViewChild('selName') selName:ElementRef | undefined;


   colors:any[] =['blue','green','orange','grey'];
   names:any[] = ['srijan','nsd','jifd','jfids'];

   ngAfterViewInit(): void {
   this.obs1 = fromEvent<any>(this.selColor?.nativeElement,'change').pipe(map(res=>res.target.value),take(3));;
   this.obs2 = fromEvent<any>(this.selName?.nativeElement,'change').pipe(map(res=>res.target.value),take(3));
   this.obs1.subscribe();
   this.obs2.subscribe();

   this.obs3= combineLatest(this.obs1,this.obs2);
   this.obs3.subscribe(([col,name])=>console.log(col,name));
 
   this.obs1.pipe(withLatestFrom(this.obs2)).subscribe(res=>console.log(res));

   zip(this.obs1,this.obs2).subscribe(res=>{console.log(`zip==>>` +res);})

   forkJoin(this.obs1,this.obs2).subscribe(res=>{console.log(`forkJoin==>>` +res);})

    
   }
   



}
