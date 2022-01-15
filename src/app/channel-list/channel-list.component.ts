import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  channels = this.channelService.getChannels();
  channelstemp: Channel[];

  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    
  }

  delete(channel: Channel) {
    window.alert(`Appeler la fonction delete sur la chaîne dont l'id est : ${channel.id}`);
  }

  test_antho () {
    console.log('bonjour');
    this.channelService.getChannelsApi().then(resultat=> {
      this.channelstemp = resultat
    })
    let nb = this.channelService.genChannelId(this.channelstemp)
    window.alert(nb) 
  };
  
  
  // delete(channel: Channel): void {
  //   this.channel = this.channels.filter(h => h !== channel);
  //   this.channelService.deleteRecord(channel.id).subscribe();
  // }
}
