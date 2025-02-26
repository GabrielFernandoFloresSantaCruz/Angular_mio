import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { BtnComponent } from './components/btn/btn.component';
import { MessageComponent } from './components/message/message.component';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,
    RouterLink, RouterOutlet, CardComponent, BtnComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isMenuOpen = true;

  constructor(){
    console.log('constructor app component');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
