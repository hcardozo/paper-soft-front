import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Menu } from '../../interfaces/menu-interface';
import { MENU } from '../../constants/menu-const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  public showFiller: boolean = false;
  public dataMenu;
  constructor(
    private router:Router
  ) {
    this.dataMenu = MENU
  }

  getChildren = (node: Menu) => of(node.children);

  nestedTreeControl = new NestedTreeControl(this.getChildren as any);

  hasChild(_: number, node: Menu) {
    return node.children != null && node.children.length > 0;
  }

  public redirect(path: string){
    this.router.navigate([path])
  }
}



