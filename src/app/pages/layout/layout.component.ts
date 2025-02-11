import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Menu } from 'src/app/model/menu';
import { LoginService } from 'src/app/service/login.service';
import { MenuService } from 'src/app/service/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menus:Menu[];
  username: string;
  constructor(
    private menuService: MenuService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenuChange().subscribe(data => this.menus = data);

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem(environment.TOKEN_NAME));
    let token = sessionStorage.getItem(environment.TOKEN_NAME);
  }

  logout(){
    this.loginService.logout();
  }


}
