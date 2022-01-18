import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Channel } from './channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channelUrl = 'https://recordantho.mysites.fr:3443/channel';  // URL to web api

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Récupération de la liste des chaînes
  getChannelsApi():Promise <Array<Channel>> {
    return new Promise((resolve, reject)=>
    {
      this.http.get<Array<Channel>>(`${this.channelUrl}/list`).subscribe(resultat=>{ resolve(resultat) });
    });    
  }

  // Update d'une chaîne
  updateChannel(channel: Channel): Observable<any> {
    return this.http.put(`${this.channelUrl}/update`, channel, this.httpOptions)  
  }

  // Suppression d'une chaîne
  deleteChannel(idChannel: Number): Observable<any> {
    return this.http.delete(`${this.channelUrl}/delete/${idChannel}`, this.httpOptions)
  }
  
  // genId method to ensure that a channel always has an id.
  // If the channel array is empty,
  // the method below returns the initial number (1).
  // if the channel array is not empty, the method below returns the highest
  // channel id + 1.
  genChannelId(channels: Channel[]): number {
    return channels.length > 0 ? Math.max(...channels.map(channel => channel.id)) + 1 : 1;
  }

  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
