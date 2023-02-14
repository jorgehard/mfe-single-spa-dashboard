import { Component, OnInit } from '@angular/core';
import { assetUrl } from '../../../single-spa/asset-url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public logogym_base64 = assetUrl('images/atlas-logo.png');
  constructor() { }

  ngOnInit(): void {
  }

}
