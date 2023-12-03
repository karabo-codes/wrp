import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  activeTab: string = 'login';
  carouselImages: any[] = [
    {src: "https://www.whizants.co.za/wp-content/uploads/2023/05/homepagenetworkbanner-scaled.jpg", alt: 'lol'},
    {src: "https://www.whizants.co.za/wp-content/uploads/2023/05/Screenshot-2023-05-15-124745.png", alt: 'lol'},
    {src: "https://www.whizants.co.za/wp-content/uploads/2023/05/homepage_consultingbanner-scaled.jpg", alt: 'lol'}
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
