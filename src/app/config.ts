import {InjectionToken} from "@angular/core";

export const APP_CONFIG = {
    clientId:       '',
    clientSecret:   '',
    defaultUsername: 'milovtim'
};

export const CONFIG: InjectionToken<any> = new InjectionToken('ApplicationConfig');
