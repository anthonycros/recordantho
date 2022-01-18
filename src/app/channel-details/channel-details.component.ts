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

  submitted: boolean = false;
  // contexte : new ou update
  context_mode: string = "";
  
  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de la chaine depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const channelIdFromRoute = routeParams.get('id');

    console.log(`Le channelIdFromRoute vaut : ${channelIdFromRoute}`)
    
    // Puis on cherche la chaine correspondant à cet id
    if (channelIdFromRoute == "new") {
      console.log(`On est dans une création de channel`) 
      this.context_mode = "new"; 
      let localNb;
      let localChannels: Channel[];
      console.log(`On entre dans le calcul de l'id`);
      this.channelService.getChannelsApi().then(resultat=> {
        localChannels = resultat });
      localNb = this.channelService.genChannelId(localChannels);
    
      this.channel = {id: localNb, name: "", url: ""};
    }
    else
    {
      this.channelService.getChannelsApi().then(resultat=> 
        {
          this.context_mode = "update";
          this.channel = resultat.find(channel => channel.id === Number(channelIdFromRoute)) ;
        })
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.channel) {
      this.channelService.updateChannel(this.channel).subscribe(()=> this.goBack())
    }
  }

  //Todo : corriger le goback apres update
  onSubmit() {
     this.submitted = true;
     if (this.channel) {
       if (this.context_mode == "update") {
         this.channelService.updateChannel(this.channel).subscribe(() => this.goBack());
       }
       else if (this.context_mode == "new") {
          
        





         this.channelService.createChannel(this.channel).subscribe(() => this.goBack());
       }
     }
    }
}
