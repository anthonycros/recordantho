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
  channels = this.channelService.getChannels();
  channelstemp: Channel[];
  channelstempApi: Channel[];

  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    
  }

  delete(channel: Channel) {
    //console.log(`Appel de la fonction delete sur la chaîne dont l'id est : ${channel.id}`);
    if (channel) {
      this.channelService.deleteChannel(channel.id).subscribe()
    }
  }

  newchannel () {
    console.log('Appel de new channel dans channel list');
    this.channelService.getChannels().then(resultat=> {
      this.channelstemp = resultat
    })
    let nb = this.channelService.genChannelId(this.channelstemp)
    console.log(`antho en direct dit : ${nb}`)
    window.alert(`antho en direct dit : ${nb}`) 
  };

  test_anthoApi () {
    console.log('On entre dans test_anthoapi');
  };
  
  
  
}
