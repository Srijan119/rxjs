import { Component, OnInit } from '@angular/core';
import { from, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { AppServicesService } from 'src/app/AppServices/app-services.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private service:AppServicesService){

  }


   str = ['seijan','dusk','duhxjis','xdjisk'];


    obs1 = from(this.str);
    obs2 = interval(1000);
    condition = timer(5000);

    

    ngOnInit(): void {

      this.obs1.pipe(takeLast(2)).subscribe(re=>{
        this.service.print(re,'container1')
      })

    this.obs2.pipe(takeUntil(this.condition)).subscribe(data=>{
      this.service.print(data,'container2')

    }
    )

    }   

}
