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

  constructor(
    private channelService: ChannelService

  ) { }

  ngOnInit(): void { 
  }

  delete(channel: Channel) {
    if (channel) {
      this.channelService.deleteChannel(channel.id).subscribe(() => this.channelService.reloadComponent());
    }
  }

  test_anthoApi () {
    console.log('On entre dans test_anthoapi');
    this.channelService.reloadComponent();
  };
  
}
