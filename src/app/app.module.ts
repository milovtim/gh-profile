import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    providers: [],
    declarations: [AppComponent, ProfileComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
