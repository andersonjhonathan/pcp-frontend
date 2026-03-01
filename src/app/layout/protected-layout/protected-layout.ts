import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-protected-layout',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './protected-layout.html',
  styleUrl: './protected-layout.css',
})
export class ProtectedLayout {}
