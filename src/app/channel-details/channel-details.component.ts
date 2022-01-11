import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel } from '../channels';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {

  channel: Channel | undefined;
  
  constructor(private route: ActivatedRoute, private channelService: ChannelService) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de la chaine depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const channelIdFromRoute = routeParams.get('channelid');

    // Puis on cherche la chaine correspondant à cet id
    this.channelService.getChannels().then(resultat=> { this.channel = resultat.find(channel => channel.id === channelIdFromRoute) })


  }

}
