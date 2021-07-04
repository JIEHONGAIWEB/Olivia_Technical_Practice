import { Component, OnInit, Input } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() iconUrl: string | undefined;
  @Input() iconDescription: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
