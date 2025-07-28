import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './login.page.html',
})
export class LoginPage {
  phone = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) { }

  async login() {
    const res = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: this.phone, password: this.password }),
    });

    const data = await res.json();
    if (res.ok) {
      this.auth.setToken(data.token);
      this.router.navigateByUrl('/chat');
    } else {
      alert(data.message || 'Login failed');
    }
  }
}

