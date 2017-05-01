import {Injectable, Inject} from "@angular/core";
import {Http, RequestOptionsArgs, ResponseContentType} from "@angular/http";
import "rxjs/add/operator/map";
import {CONFIG} from "../config";

@Injectable()
export class GithubService {

    private options: RequestOptionsArgs;

    constructor(private _http: Http, @Inject(CONFIG) private config) {
        this.options = {
            params: {
                client_id: config.clientId,
                client_secret: config.clientSecret
            },
            responseType: ResponseContentType.Json
        };

    }

    getUser(username: string) {
        return this._http
            .get(`http://api.github.com/users/${username}`, this.options).map(res => res.json());
    }

    getRepos(username: string) {
        return this._http
            .get(`http://api.github.com/users/${username}/repos`, this.options).map(res => res.json());
    }
}
