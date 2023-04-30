import {Component, Injectable, OnInit} from '@angular/core';
import {PersonAndFrequency} from "../../entities/person-and-frequency";
import {StatisticService} from "../../services/statistic-service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class StatisticComponent implements OnInit{
  dataList: PersonAndFrequency[] = [];

  constructor(private service: StatisticService) { }
  ngOnInit(): void {
    this.service.getStatistic().subscribe(data => {
      this.dataList = [];
      for (let i=0; i< data.length;i++){
        console.log(data.at(i));
        // @ts-ignore
        this.dataList.push(data.at(i))
      }
    });
  }
}
