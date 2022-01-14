import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../record';
import { Channel } from '../channel';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecordService } from '../record.service';
import { ChannelService } from '../channel.service';


@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {

  record: Record ;
  channel: Channel ;
  channels: Array<Channel> ;
  

  submitted = false;
  targetChannelid: string;

  constructor(
    private route: ActivatedRoute, 
    private recordService: RecordService,
    private channelService: ChannelService,
    private location: Location
    ) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de l'enregistrement depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const recordIdFromRoute = routeParams.get('id');

    // Puis on cherche la chaine correspondant à cet id
    this.recordService.getRecords().then(resultat=> 
      { 
        this.record = resultat.find(record => record.id === recordIdFromRoute) 
        this.targetChannelid = this.record.idch
      })

    this.channelService.getChannels().then(resultat=> 
        { 
          this.channels = resultat 
        })
  
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() { this.submitted = true; }

  onChangeChannel() {
    const chosenChannel = this.channels.find((element: Channel)=>{return element.id==this.targetChannelid}); 
    this.record.idch = chosenChannel.id
    this.record.urlch = chosenChannel.url
    //console.log(this.targetChannelid)
   

  }

}
