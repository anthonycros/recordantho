import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service';

//import { channels } from '../channels';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  //channels = channels;
  channels = this.channelService.getChannels();

  test_alert() {
    window.alert('Alerte sur la chaîne !');
  }

  
  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
  }

}
