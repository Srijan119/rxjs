import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObserveComponent } from './observe/observe.component';
import { AllComponent } from './observe/all/all.component';
import { FromEventComponent } from './observe/from-event/from-event.component';
import { IntervalComponent } from './observe/interval/interval.component';
import { OfFromComponent } from './observe/of-from/of-from.component';
import { ToArrayComponent } from './observe/to-array/to-array.component';
import { CustomObservableComponent } from './observe/custom-observable/custom-observable.component';
import { TakeComponent } from './observe/take/take.component';
import { RetryComponent } from './observe/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './observe/subject/subject.component';
import { ReplaySubjectComponent } from './observe/replay-subject/replay-subject.component';
import { MergeMapComponent } from './observe/merge-map/merge-map.component';
import { ShareReplayComponent } from './observe/share-replay/share-replay.component';
import { CombineLatestComponent } from './observe/combine-latest/combine-latest.component';


@NgModule({
  declarations: [
    AppComponent,
    ObserveComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    TakeComponent,
    RetryComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    MergeMapComponent,
    ShareReplayComponent,
    CombineLatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
