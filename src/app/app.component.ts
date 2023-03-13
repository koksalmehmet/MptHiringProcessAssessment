import { Component } from '@angular/core';
import { MenuItem, SidebarUserModel } from 'tarch-shall';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: SidebarUserModel = <SidebarUserModel>{
    displayName: 'Mehmet Köksal',
    email: 'mehmetkoksal@example.com',
    picture: 'assets/avatars/profile.jpg',
    company: {
      id: '2e049600-9a67-4a6c-8435-5fb9b12e7893',
      name: 'MptLayout',
      logo: 'assets/logo.png'
    }
  };

  navigations: MenuItem[

  ] = [
      {
        id: 'dashboard',
        name: 'Dashboard',
        type: 'basic',
        icon: 'home',
        link: 'dashboard'
      },
      {
        id: 'employees',
        name: 'Employees',
        type: 'basic',
        icon: 'link_alt',
        link: 'employees'
      }
    ];
}
