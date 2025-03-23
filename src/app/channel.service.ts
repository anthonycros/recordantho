import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Channel } from './channel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  // Passage en docker avec API locale
  //private channelUrl = 'https://recordantho.anthoetmapie.fr:3443/channel';  // URL to web api
  private channelUrl = 'http://record-api:3000/channel';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  };

  // Récupération de la liste des chaînes
  getChannels():Promise <Array<Channel>> {
    return new Promise((resolve, reject)=>
    {
      this.http.get<Array<Channel>>(`${this.channelUrl}/list`).subscribe(resultat=>{ resolve(resultat) });
    });    
  }

  // Création d'une chaîne
  createChannel(channel: Channel): Observable<any> {
    return this.http.post(`${this.channelUrl}/addchannel`, channel, this.httpOptions)
  }
  
  // Update d'une chaîne
  updateChannel(channel: Channel): Observable<any> {
    //console.log(`On est dans la méthode updateChannel de channelService => ok`);
    return this.http.put(`${this.channelUrl}/update`, channel, {'responseType': 'text'});  
  }

  // Suppression d'une chaîne
  deleteChannel(idChannel: Number): Observable<any> {
    //console.log(`On est dans la méthode deleteChannel de channelService => ok`);
    return this.http.delete(`${this.channelUrl}/delete/${idChannel}`, {'responseType': 'text'});
  }
  
  // méthode genId pour générer un id unique et incrémental lors de la création d'une chaîne
  // Si le tableau est vide,
  // la méthode génère (1).
  // Si le tableau n'est pas vide, la méthode génère l'idmax trouvé + 1

  genChannelId(channels: Channel[]): number {
    return channels.length > 0 ? Math.max(...channels.map(channel => channel.id)) + 1 : 1;
  }

  reloadComponent(){
    // console.log(`On est dans chanelservice reloadcomponent() => ok`);
    // window.alert("attention ça va reloader");
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    
    
    // setTimeout(() => {
    //   window.location.reload();
    // }, 100);
    // window.alert("reload terminé");
    // console.log(`router.url : ${this.router.url}`);
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
