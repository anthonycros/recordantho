import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  //channel: Channel;
  channels = this.channelService.getChannelsApi();
  channelstemp: Channel[];
  channelstempApi: Channel[];


  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    
  }

  delete(channel: Channel) {
    console.log(`Appel de la fonction delete sur la chaîne dont l'id est : ${channel.id}`);
    if (channel) {
      this.channelService.deleteChannel(channel.id).subscribe()
    }

  }

  newchannel () {
    console.log('bonjour');
    this.channelService.getChannelsApi().then(resultat=> {
      this.channelstemp = resultat
    })
    let nb = this.channelService.genChannelId(this.channelstemp)
    console.log(`antho en direct dit : ${nb}`)
    window.alert(`antho en direct dit : ${nb}`) 
  };

  // delete(channel: Channel): void {
  //   channel = this.channels.filter(h => h !== channel);
  //   this.channelService.deleteRecord(channel.id).subscribe();
  // }

  test_anthoApi () {
    let localChannels: Channel[];
    let localNb: Number;
    console.log('On entre dans test_anthoapi');
    this.channelService.getChannelsApi().then(autreresultat=> {
      localChannels = autreresultat;
      console.log(`localChannels[0].name vaut : ${localChannels[0].name}`);
      console.log(`localChannels.lenght vaut : ${localChannels.length}`);
      localNb = this.channelService.genChannelId(localChannels);
      console.log(`antho via API dit : ${localNb}`)
    })
  };
  
  
  
}
