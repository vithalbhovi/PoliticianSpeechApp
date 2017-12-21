import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {SpeechModel} from '../model/speechModel';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {SpeechServices} from '../services/speech.services';

@Component({
    selector:'viewSpeeches',
    templateUrl:'app/viewSpeeches/viewSpeeches.component.html',
    styleUrls:['./app/style/customStyle.css']
    
})
export class ViewSpeechComponent implements OnInit{
        public speechData:SpeechModel[];
        speechList:{};
        speechContent:string;
        constructor(public speechServices:SpeechServices, private router:Router){}

        ngOnInit(){
            this.getSpeechData();
        }
        getSpeechData(){
            this.speechServices.getSpeechData()
                .subscribe(
                    speechData => this.speechList = speechData,
                    err =>{
                        console.log(err);
                    }
            );
        }

        getSpeechContent = function(speechData:any){
            var element = document.getElementsByClassName('list-group-item');
            for(var i=0; i<element.length;i++){
                element[i].classList.remove('active')
            }
            document.getElementById(speechData.speechId).classList.add('active');
            this.speechContent = speechData.speechContent;
        }
        deleteSpeech = function(dataid:any){
            this.speechServices.deleteSpeech(dataid.speechId);
            this.getSpeechData();
            this.ngOnInit();
        }
}