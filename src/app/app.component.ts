import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {MatAnchor} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar,MatToolbarRow, LanguageSwitcherComponent, RouterLink, RouterLinkActive, TranslatePipe, MatAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';
  options = [
    {link:'/home',label:'home'},
    {link:'/about',label:'about'}
  ]

  constructor(private translate:TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
