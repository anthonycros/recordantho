import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from './channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getChannels():Promise <Array<Channel>> {
    return new Promise((resolve, reject)=>
    { 
      this.http.get<Array<Channel>>('/assets/channels.json').subscribe(resultat=>{ resolve(resultat) });
     });

  }

  updateChannel(channel: Channel) {
    window.alert(`Méthode updateChannel de channel service ${channel.name}`);  
  }
}
