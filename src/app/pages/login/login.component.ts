import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/common/Constants';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  activeTab: string = 'login';
  loading: boolean | undefined;
  authFailureText: string | undefined;
  loginFailureText: string | undefined;
  carouselImages: any[] = [
    {src: "https://www.whizants.co.za/wp-content/uploads/2023/05/homepagenetworkbanner-scaled.jpg", alt: 'lol'},
    {src: "https://www.whizants.co.za/wp-content/uploads/2023/05/Screenshot-2023-05-15-124745.png", alt: 'lol'},
    {src: "https://www.whizants.co.za/wp-content/uploads/2023/05/homepage_consultingbanner-scaled.jpg", alt: 'lol'}
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.authFailureText = undefined;
    this.loginFailureText = undefined;
  }

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.onSignup('haha', 'lol');
  }

  onSignup(email: string, password: string) {
    this.loading = true;
    this.authFailureText = undefined;

    this.authService.signUp(email, password).then(result => {
      this.loading = false;
      console.log('Signup successful', result);
    }).catch(error => {
      this.loading = false;
      this.authFailureText = error.code;
      console.debug('errror = ', error.code);
    });
  }

  onLogin(email: string, password: string) {
    this.loading = true;
    this.loginFailureText = undefined;

    this.authService.login(email, password).then(result => {
      this.loading = false;
      this.userService.setUser(result);

      this.router.navigate([Constants.SLASH.concat(Constants.WIP_PAGE_ROUTE)]);

      console.log('Login successful', result);
    }).catch(error => {
      this.loading = false;
      this.loginFailureText = error.code;
      console.debug('Login failed', error);
    });
  }

}
