import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'login-layout-2',
    templateUrl: 'login.html'
})
export class LoginLayout2 {
    @Input() events: any;

    public username: string;
    public password: string;

    private isUsernameValid: boolean = true;
    private isPasswordValid: boolean = true;

    data = {
        "background": "assets/images/background/placeholder.jpg",
        "forgotPassword": "Forgot password?",
        "labelUsername": "USERNAME",
        "labelPassword": "PASSWORD",
        "title": "Login to your account",
        "username": "Enter your username",
        "password": "Enter your password",
        "login": "LOGIN",
        "facebookLogin": "Login with",
        "register": "Register",
        "logo": "assets/images/logo/1.png",
        "errorUser": "Field can't be empty",
        "errorPassword": "Field can't be empty"
    };

    constructor( ) { }

    onEvent = (event: string): void => {
        if (event == "onLogin" && !this.validate()) {
            return;
        }
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'password': this.password
            });
        }
    }
    validate(): boolean {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        return this.isPasswordValid && this.isUsernameValid;
    }
}
