import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { RecordListComponent } from './record-list/record-list.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { RecordDetailsComponent } from './record-details/record-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ChannelListComponent,
    RecordListComponent,
    ChannelDetailsComponent,
    RecordDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ChannelListComponent },
      { path: 'channels/:channelId', component: ChannelDetailsComponent},
      { path: 'records/:recordId', component: RecordDetailsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
