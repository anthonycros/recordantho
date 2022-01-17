import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  channels = this.channelService.getChannelsApi();
  channelstemp: Channel[];
  channelstempApi: Channel[];

  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    
  }

  delete(channel: Channel) {
    window.alert(`Appeler la fonction delete sur la chaîne dont l'id est : ${channel.id}`);
  }

  test_antho () {
    console.log('bonjour');
    this.channelService.getChannels().then(resultat=> {
      this.channelstemp = resultat
    })
    let nb = this.channelService.genChannelId(this.channelstemp)
    console.log(`antho en direct dit : ${nb}`)
    window.alert(`antho en direct dit : ${nb}`) 
  };
  test_anthoApi () {
    console.log('On entre dans test_anthoapi');
    this.channelService.getChannelsApi().then(resultatApi=> {
      this.channelstempApi = resultatApi
    console.log(`channelstempApi[0].name vaut : ${this.channelstempApi[0].name}`);
    console.log(`channelstempApi.lenght vaut : ${this.channelstempApi.length}`);
    })
    // let nb = this.channelService.genChannelId(this.channelstempApi)+10
    // console.log(`antho via API dit : ${nb}`)
    // window.alert(`antho via API dit : ${nb}`) 
  };
  
  
  // delete(channel: Channel): void {
  //   this.channel = this.channels.filter(h => h !== channel);
  //   this.channelService.deleteRecord(channel.id).subscribe();
  // }
}
