import {Component, OnInit} from '@angular/core';
import {Form, NgForm} from "@angular/forms";
import {Age} from "../../entities/age";
import {Name} from "../../entities/name";
import {HttpClient} from "@angular/common/http";
import {PersonService} from "../../services/person-service";

@Component({
  selector: 'app-age-by-name-card',
  templateUrl: './age-by-name-card.component.html',
  styleUrls: ['./age-by-name-card.component.css']
})
export class AgeByNameCardComponent implements OnInit{

  name!: String;
  age!: Age;

  constructor(private service: PersonService) {}

  ngOnInit() {
    this.age = new Age();
  }

  getData(): void {
    // @ts-ignore
    this.service.getAgeByName(this.name).subscribe(result => {
      this.age = result;
      console.log(result);
    });
  }
}
