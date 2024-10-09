import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any;
  constructor(
    public authService: AuthenticationService,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.authService
      .getProfile()
      .then((user) => {
        this.email = user?.email;
        console.log(user?.email);
      })
      .catch((error) => {
        console.error('Erro ao encontrar o Perfil:', error);
      });
  }
  async logout() {
    this.authService
      .signOut()
      .then(() => {
        this.route.navigate(['/landing']);
      })
  }
}
