import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() contentDescription: string | undefined;
  @Input() bottomDescription: string | undefined;
  @Input() icon: string | undefined;
  @Input() imgSrc: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
