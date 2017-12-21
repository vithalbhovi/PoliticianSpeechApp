import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {SpeechModel} from '../model/speechModel';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/catch';

@Injectable()
export class SpeechServices{
    private baseURL :string = "app/data/data.json";

    private serverUrl:string= "http://localhost:8081/";
    constructor(private http:Http){}

    getSpeechData():Observable<SpeechModel[]>{
        return this.http.get(this.serverUrl+"getSpeechData")
        .map((res:Response) =>res.json());
    }
    private extractData(res: Response) {
        let body = res.json();
            return body.data || {};
    }
    addSpeechData(data:any) {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.post(this.serverUrl+"addSpeechData", body, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable)
                   .subscribe();
    }
    deleteSpeech(speechid:any){
        return this.http.delete(this.serverUrl+"speechDelete/"+speechid)
        .map(response => <boolean>response.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        })
        .subscribe();
    }
    sendEmail(speechData:any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(speechData);
        return this.http.post(this.serverUrl+"sendemail", body, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable)
                   .subscribe();
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}