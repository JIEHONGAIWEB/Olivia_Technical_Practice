import { Component, OnInit } from '@angular/core';
import { OneDayDataService } from './action/api/one-day.api.service';
@Component({
  selector: 'lib-OneDay',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.scss']
})
export class OneDayComponent implements OnInit {
  content = {
    title: '',
    iconUrl: '',
    description: '',
    iconDescription: '',
    subContent: [
      {
        subtitle: '',
        'card-content': [
          {
            imgSrc: '',
            title: '',
            contentDescription: '',
            bottomDescription: ''
          }
        ]
      }
    ]
  };
  constructor(private oneDayDataService: OneDayDataService) {}

  ngOnInit(): void {
    this.oneDayDataService.getData().then((data: any) => {
      this.content = data;
    });
  }
}
