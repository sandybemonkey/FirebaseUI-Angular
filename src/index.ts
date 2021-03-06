import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseUIAuthConfig, FirebaseUIComponent } from './firebaseui.component';
import { FirebaseUIService } from './firebaseui.service';
import 'rxjs/Rx';

export * from './firebaseui.component';
export * from './firebaseui.service';

/*
 * Created by Raphael Jenni
 * Copyright (c) 2017 Raphael Jenni
 */

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FirebaseUIComponent,
    ],
    exports: [
        FirebaseUIComponent,
    ],
    providers: [
        FirebaseUIService
    ]
})
export class FirebaseUIModule {
    static forRoot(firebaseUiAuthConfig: FirebaseUIAuthConfig): ModuleWithProviders {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                {provide: FirebaseUIAuthConfig, useValue: firebaseUiAuthConfig}
            ]
        };
    }
}
