import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss']
})
export class ScrollDownComponent {

  scrollDownVisible: String = 'visible';
  scrollIcon = faChevronDown;

  ngOnInit(): void {
  }

}
