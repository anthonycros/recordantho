import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../record';
import { Channel } from '../channel';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecordService } from '../record.service';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {

  @Input() record?: Record ;
  channels: Array<Channel> ;
  
  submitted: boolean = false;
  targetChannelid: number;
  // contexte : new ou update
  context_mode: string = "";

  constructor(
    private route: ActivatedRoute, 
    private recordService: RecordService,
    private channelService: ChannelService,
    private location: Location
    ) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de l'enregistrement depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const recordIdFromRoute = routeParams.get('id');

    // On charge les chaînes pour alimenter la combo des chaines
    this.channelService.getChannels().then(resultat=> 
      { 
        this.channels = resultat 
      })
    
    // Puis on cherche la chaine correspondant à cet id
    if (recordIdFromRoute == "new") {
      // On est dans le contexte de création d'un enregistrement
      this.context_mode = "new";
      //test pour générer nouvel ID
      let localRecords: Record[];
      let localNb;
      //console.log('On entre dans le calcul du genid pour new record');
      this.recordService.getRecords().then(resultat => {
        localRecords = resultat;
        localNb = this.recordService.genRecordId(localRecords);
        //console.log(`L'id récupéré vaut : ${localNb}`);
        this.record = {id: localNb, name: "", idch: null, namech: "", urlch: "", recbegin: "", recend: "", done: false, archived: false};
      })
    }
    else
    {
      // On est dans le contexte d'affichage / modification d'un enregistrement existant
      this.recordService.getRecords().then(resultat=> 
        { 
          this.context_mode = "update";
          this.record = resultat.find(record => record.id === Number(recordIdFromRoute)) 
          this.targetChannelid = this.record.idch
          this.onChangeChannel();
        })
    }  
  }

  goBack(): void {
    //console.log(`On est dans record-details-compo goback() => ok`);
    this.location.back();
    this.recordService.reloadComponent();
  }

  //Todo : corriger le goback apres update
  onSubmit() {
     this.submitted = true; 
     if (this.record) {
       if (this.context_mode == "update") {
         // On est dans le contexte d'affichage / modification d'un enregistrement existant
         //console.log(`mode update enreg`);
         this.recordService.updateRecord(this.record).subscribe(() => this.goBack());
       }
       else if (this.context_mode == "new") {
         // On est dans le contexte de création d'un enregistrement
         //console.log(`On est en mode new record => ok`);
         this.recordService.createRecord(this.record).subscribe(() => this.goBack());
       }
       else {
        console.log(`mode autre enreg`);
       }
     }
  }

  onChangeChannel() {
    const chosenChannel = this.channels.find((element: Channel)=>{return element.id==this.targetChannelid}); 
    this.record.idch = chosenChannel.id
    this.record.namech = chosenChannel.name
    this.record.urlch = chosenChannel.url
  }
}
