import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private clientId: string = '';
    private clientSecret: string = '';


    constructor(private _http: Http) {
        console.log('GH service created');
        this.username = '';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username +
            '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
            .map(res => res.json());
    }
}
