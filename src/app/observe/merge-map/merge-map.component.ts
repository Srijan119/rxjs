import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeAll, mergeMap, of, switchMap } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit{
  constructor(private service:AppServicesService){

  }



  list = from(['sr','msk','sij','sui','si']);

  ngOnInit(): void {

    //map+mergeAll

    this.list.pipe(map(res=>getData(res)),mergeAll()).subscribe(res=>{
 this.service.print(res,'elementContainer');
    })


    //mergeMap

    this.list.pipe(mergeMap(res=>getData(res))).subscribe(res=>{
      this.service.print(res,'elementContainer2');
         })


         //concatMap
         this.list.pipe(concatMap(res=>getData(res))).subscribe(res=>{
          this.service.print(res,'elementContainer3');
             })

      //switchMap

      this.list.pipe(switchMap(res=>getData(res))).subscribe(res=>{
        this.service.print(res,'elementContainer4');
      })




  }



}
function getData(res:any) {
  return of(`video+${res}`).pipe(delay(3000));
}







