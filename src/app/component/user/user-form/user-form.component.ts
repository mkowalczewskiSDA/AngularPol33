import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.user = new User()
   }

  onSubmit() {
    this.userService.create(this.user).subscribe( result => this.router.navigate(['/users']))
  }

}
