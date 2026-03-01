import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {

    if (email === 'admin@email.com' && password === '123456') {
      localStorage.setItem('nexus_token', 'logado');
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('nexus_token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('nexus_token') !== null;
  }
}