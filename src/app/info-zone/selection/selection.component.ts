import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  links: Array<String> = ['languages', 'tools', 'projects'];

  ngOnInit(): void {
  }

}
