import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngm-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.scss']
})
export class NavigationMainComponent implements OnInit {

  @Input() drawer: any;

  constructor() { }

  ngOnInit() {
  }

}
