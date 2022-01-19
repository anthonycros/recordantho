import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { RecordListComponent } from './record-list/record-list.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { RecordDetailsComponent } from './record-details/record-details.component';

const routes: Routes = [
  //Route par défaut
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'channels', component: ChannelListComponent },
  { path: 'channel/:id', component: ChannelDetailsComponent },
  { path: 'channel/new', component: ChannelDetailsComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'record/:id', component: RecordDetailsComponent },
  { path: 'record/:new', component: RecordDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
