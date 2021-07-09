import { Component, OnInit, Input } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'lib-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubTitleComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
