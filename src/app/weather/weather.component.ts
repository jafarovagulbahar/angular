import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data: any;

  constructor(public rest: RestService) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.rest.getWeatherData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
