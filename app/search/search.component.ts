import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {SpeechModel} from '../model/speechModel';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {SpeechServices} from '../services/speech.services';
@Component({
  selector: 'search',
  templateUrl: 'app/search/search.component.html',
})
export class SearchComponent  implements OnInit{

  constructor(private speechServices:SpeechServices){}
  speechBulkData:any;
  searchedData:{};
  searchResultTable:false;
  notFound:false;
  enableOnShare:false;

  ngOnInit(){
    this.getSpeechData();
  }
  getSpeechData(){
    this.speechServices.getSpeechData()
        .subscribe(
            speechData => this.speechBulkData = speechData,
            err =>{
                console.log(err);
            }
    );
  }
  searchSpeech = function(searchKey:any){
    for(var i=0; i<this.speechBulkData.length; i++){
      this.searchedData = this.speechBulkData[i];
      if(this.searchedData.speechName == searchKey){
        this.notFound = false;
        this.searchResultTable = true;
        this.enableOnShare=true
        return this.searchedData;
      }else{
        this.notFound=true;
        this.searchResultTable =false;
      }
    }
  }
  shareSpeech = function(toemail:string,sAuthor:string, sName:string, sDate:string, sContent:string){
    let speechList = {
            toEmail:toemail,
            speechAuthor:sAuthor,
            speechName:sName,
            speechDate:sDate,
            speechContent:sContent
    }
    this.speechServices.sendEmail(speechList);
    this.successMsg = "Mail sent!!";
  }
 }
