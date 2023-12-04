import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isWip: boolean | undefined;

  constructor(
    private router: Router
  ) {

  }

  isUnderConstructionPage(): boolean {
    return this.router.url == '/wip';
  }

}
