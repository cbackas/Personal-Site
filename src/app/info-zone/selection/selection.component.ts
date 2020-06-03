import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  links: Array<String> = ['languages', 'tools', 'projects'];

  style: Object = {

  };

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      const url = event instanceof NavigationEnd ? event.url : null;
      console.log(url);
    });
  }

  ngOnInit(): void {}
}
