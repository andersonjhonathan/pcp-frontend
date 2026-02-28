import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);

    // Aqui você chamaria sua API de autenticação
    if (this.email === 'admin@email.com' && this.password === '123456') {
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
}
