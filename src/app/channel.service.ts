import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getChannels() {
    return this.http.get<{IdCh: string, Name: string, URL: string}[]>('/assets/channels.json');
  }
}
