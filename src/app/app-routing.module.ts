import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserveComponent } from './observe/observe.component';
import { AllComponent } from './observe/all/all.component';
import { FromEventComponent } from './observe/from-event/from-event.component';
import { IntervalComponent } from './observe/interval/interval.component';
import { OfFromComponent } from './observe/of-from/of-from.component';
import { ToArrayComponent } from './observe/to-array/to-array.component';
import { CustomObservableComponent } from './observe/custom-observable/custom-observable.component';
import { TakeComponent } from './observe/take/take.component';
import { RetryComponent } from './observe/retry/retry.component';
import { SubjectComponent } from './observe/subject/subject.component';
import { ReplaySubjectComponent } from './observe/replay-subject/replay-subject.component';
import { MergeMapComponent } from './observe/merge-map/merge-map.component';
import { ShareReplayComponent } from './observe/share-replay/share-replay.component';
import { combineLatest } from 'rxjs';
import { CombineLatestComponent } from './observe/combine-latest/combine-latest.component';

const routes: Routes = [
  {

    path: 'observe',
    component: ObserveComponent,
    children: [
      {
        path: '',
        component: AllComponent
      },
      {
        path: 'from',
        component: FromEventComponent
      },

      {
        path: 'interval',
        component: IntervalComponent
      },

      {
        path: 'of-from',
        component: OfFromComponent
      },

      {
        path: 'to-array',
        component: ToArrayComponent
      },

      {
        path: 'custom-observable',
        component: CustomObservableComponent
      },

      {
        path: 'take',
        component: TakeComponent
      },

      {
        path: 'retry',
        component: RetryComponent
      },

      {
        path: 'subject',
        component: SubjectComponent
      },

      {
        path: 'replay-subject',
        component: ReplaySubjectComponent
      },


      {
        path: 'merge-map',
        component: MergeMapComponent
      },

      {
        path: 'share-replay',
        component: ShareReplayComponent
      },
      {
        path:'combine-latest',
        component:CombineLatestComponent
      }
















    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
