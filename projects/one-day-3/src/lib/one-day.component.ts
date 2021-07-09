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
    iconUrl2: '',
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
  constructor(private oneDayDataService: OneDayDataService) { }

  ngOnInit(): void {

    this.oneDayDataService.getData().then((data: any) => {
      this.content = data;
    });
  }

  // public test() {

  //   let context = new Context();

  //   let startState = new StartState();
  //   startState.doAction(context);
  //   console.log(111, context.getState().toString())

  //   let stopState = new StopState();
  //   stopState.doAction(context);
  //   console.log(222, context.getState().toString())

  // }


  // tt() {
  //   let shapeFactory: ShapeFactory = new ShapeFactory()

  //   let circle: Shape = shapeFactory.getShape("circle")
  //   let rectangle: Shape = shapeFactory.getShape("rectangle")
  //   let square: Shape = shapeFactory.getShape("square")
  //   circle.draw();
  //   rectangle.draw();
  //   square.draw();

  // }
}
