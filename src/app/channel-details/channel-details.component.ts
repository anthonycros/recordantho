import { Component, Input, OnInit } from '@angular/core';
import { Channel } from '../channel';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {

  @Input() channel?: Channel;
  // channel: Channel | undefined;

  submitted = false;
  
  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de la chaine depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const channelIdFromRoute = routeParams.get('id');

    // Puis on cherche la chaine correspondant à cet id
    this.channelService.getChannels().then(resultat=> 
      {
        this.channel = resultat.find(channel => channel.id === channelIdFromRoute) ;
      })
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   window.alert('Méthode Save à coder');
  // }

  save() {
    if (this.channel) {
      this.channelService.updateChannel(this.channel)
    }
  }

  onSubmit() { this.submitted = true; }
}
