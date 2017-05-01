import {Component, OnInit, Inject} from "@angular/core";
import {GithubService} from "./github.service";
import {APP_CONFIG, CONFIG} from "../config";


@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
    providers: [GithubService, {provide: CONFIG, useValue: APP_CONFIG}]
})
export class ProfileComponent implements OnInit {

    private currentUser: any[];
    private repos: any[];


    constructor(private _githubService: GithubService, @Inject(CONFIG) private config) {}

    ngOnInit() {
        console.log(`default username: ${this.config.defaultUsername}`);
        this.loadInfo(this.config.defaultUsername);
    }

    searchUser(username: string) {
        this.loadInfo(username);
    }

    private loadInfo(username: string) {
        if (username) {
            this._githubService.getUser(username).subscribe(user => this.currentUser = user);
            this._githubService.getRepos(username).subscribe(repos => this.repos = repos);
        }
    }
}
