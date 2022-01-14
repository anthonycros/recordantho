import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { RecordListComponent } from './record-list/record-list.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { RecordDetailsComponent } from './record-details/record-details.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    RecordListComponent,
    ChannelDetailsComponent,
    RecordDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
