import {Component, OnInit} from '@angular/core';
import {Name} from "../../entities/name";
import {HttpClient} from "@angular/common/http";
import {PersonService} from "../../services/person-service";

@Component({
  selector: 'app-oldest-person',
  templateUrl: './oldest-person.component.html',
  styleUrls: ['./oldest-person.component.css']
})
export class OldestPersonComponent implements OnInit{

  name!: Name;
  constructor(private service: PersonService) {}

  ngOnInit() {
    this.name = new Name();
  }

  getData(): void {
    this.service.getNameOfOldestPerson().subscribe(data => {
      this.name = data;
      console.log(data);
    });
  }
}
