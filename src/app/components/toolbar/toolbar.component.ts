import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
     MatToolbarModule,
     MatIconModule,
     MatButtonModule
    ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  @Input() sidenav!: MatSidenav;

  public openSideNav(){
    this.sidenav.toggle();
  }

}
