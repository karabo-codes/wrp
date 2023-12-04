import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/common/Constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.scss']
})
export class WipComponent implements OnInit {
  userEmail: String | undefined;
  userObject!: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userObject = this.userService.getUser();
    // if (!this.userObject) this.userObject = new this.userObject
  }


  ngOnInit(): void {

    if (this.userObject?.user?.email !== undefined) {
      this.userEmail = this.userObject.user.email;
    } else {
      this.router.navigate([Constants.SLASH.concat(Constants.LOGIN_PAGE_ROUTE)]);
    }

  }
}
