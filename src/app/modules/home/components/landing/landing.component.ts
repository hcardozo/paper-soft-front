import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Menu } from '../../interfaces/menu-interface';
import { MENU } from '../../constants/menu-const';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  public showFiller: boolean = false;
  public dataMenu;
  constructor() {
    this.dataMenu = MENU
  }

  getChildren = (node: Menu) => of(node.children);

  nestedTreeControl = new NestedTreeControl(this.getChildren as any);

  hasChild(_: number, node: Menu) {
    return node.children != null && node.children.length > 0;
  }

}



