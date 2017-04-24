import {Component, OnInit} from '@angular/core';
import {GithubService} from "./github.service";

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
    providers: [GithubService]
})
export class ProfileComponent implements OnInit {

    public currentUser: any[];


    constructor(private _githubService: GithubService) {
    }

    ngOnInit() {
        this._githubService.getUser()
            .subscribe(user => this.currentUser = user);
        console.log("GH user initialized");
    }


}
