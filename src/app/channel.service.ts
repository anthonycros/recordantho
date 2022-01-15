import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Channel } from './channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channelUrlList = 'http://recordantho.mysites.fr:3000/channel/list';  // URL to web api

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getChannels():Promise <Array<Channel>> {
    return new Promise((resolve, reject)=>
    { 
      this.http.get<Array<Channel>>('/assets/channels.json').subscribe(resultat=>{ resolve(resultat) });
     });

  }

  // getChannelsApi(): Observable<Channel[]> {
  //   return this.http.get<Channel[]>(this.channelUrlList)
        
  // }

  getChannelsApi():Promise <Array<Channel>> {
    return new Promise((resolve, reject)=>
    {
      this.http.get<Array<Channel>>(this.channelUrlList).subscribe(resultat=>{ resolve(resultat) });
    });    
  }



  updateChannel(channel: Channel) {
    window.alert(`Méthode updateChannel de channel service ${channel.name}`);  
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
