import {Component, OnInit,NgZone} from '@angular/core';
import {NgModel} from '@angular/forms';
import {SpeechModel} from '../model/speechModel';
import {FormGroup} from '@angular/forms';
import {SpeechServices} from '../services/speech.services';
import {Router} from '@angular/router';

@Component({
    selector:'newSpeech',
    templateUrl:'app/newSpeech/newSpeech.component.html',
    providers:[SpeechServices]
})

export class NewSpeechComponent implements OnInit{
    constructor(public speechServices:SpeechServices, private router:Router,private zone:NgZone){}
    speechData:SpeechModel[];
    speechList:{};
    speechBulkData:any;  
    speechAuthor:string;  
    speechName:string;
    speechDate:string;
    speechContent:string;
    ngOnInit(){
        this.getSpeechId();
    }

    getSpeechId(){
        this.speechServices.getSpeechData()
            .subscribe(
                speechData => this.speechBulkData = speechData,
                err =>{
                    console.log(err);
                }
            );
    }
    addSpeechData(speechauthor:string,speechname:string,speechdate:string,speechcontent:string){
        let speechId = this.speechBulkData.length+1;
        let speechList = {
            speechId:speechId,
            speechAuthor:speechauthor,
            speechName:speechname,
            speechDate:speechdate,
            speechContent:speechcontent
        }
        this.speechServices.addSpeechData(speechList);
        this.zone.run(() => this.router.navigate(['/']));
    }
}