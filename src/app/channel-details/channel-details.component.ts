import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, channels } from '../channels';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {

  channel: Channel | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de la chaine depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const channelIdFromRoute = Number(routeParams.get('channelId'));

    // Puis on cherche la chaine correspondant à cet id
    this.channel = channels.find(channel => channel.id === channelIdFromRoute);

  }

}
