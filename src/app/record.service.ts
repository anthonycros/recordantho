import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private recordUrl = 'https://recordantho.mysites.fr:3443/record';  // URL to web api

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Récupération de la liste des enregistrements
  getRecords():Promise <Array<Record>> {
    return new Promise((resolve, reject)=>
    { 
      this.http.get<Array<Record>>(`${this.recordUrl}/list`).subscribe(resultat=>{ resolve(resultat) });
     });
  }

  // Création d'un enregistrement
  createRecord(record: Record): Observable<any> {
    return this.http.post(`${this.recordUrl}/addrecord`, record, this.httpOptions)
  }

  // Update d'un enregistrement
  updateRecord(record: Record): Observable<any> {
    return this.http.put(`${this.recordUrl}/update`, record, this.httpOptions)  
  }
  
  // Suppression d'une chaîne
  deleteRecord(idRecord: Number): Observable<any> {
    return this.http.delete(`${this.recordUrl}/delete/${idRecord}`, this.httpOptions)
  }

  // méthode genId pour générer un id unique et incrémental lors de la création d'un enregistrement
  // Si le tableau est vide,
  // la méthode génère (1).
  // Si le tableau n'est pas vide, la méthode génère l'idmax trouvé + 1

  genRecordId(records: Record[]): number {
    return records.length > 0 ? Math.max(...records.map(record => record.id)) + 1 : 1;
  }
}
