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

  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    
  }

  delete(channel: Channel) {
    window.alert(`Appeler la fonction delete sur la chaîne dont l'id est : ${channel.id}`);
  }

  test_api () {
    //console.log(this.datarecup);
    //window.alert(this.datarecup);
    //let datarecup = this.channelService.getChannels(); 
    console.log('bonjour');
    console.log(this.channels[0].id);
      
  };
  
  
  // delete(channel: Channel): void {
  //   this.channel = this.channels.filter(h => h !== channel);
  //   this.channelService.deleteRecord(channel.id).subscribe();
  // }
}
