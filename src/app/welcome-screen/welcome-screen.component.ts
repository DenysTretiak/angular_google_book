import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'welcome-screen',
    templateUrl: './welcome-screen.component.html',
    styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {
    public username: string = '';

    constructor (private router: Router) {}

    onSubmit() {
        if (this.username) {
            this.router.navigate(['search']);
        }
    }
}
