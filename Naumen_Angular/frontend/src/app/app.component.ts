import { Component } from '@angular/core';
import { Age } from '../entities/age';
import {HttpClient} from "@angular/common/http";
import { NgForm } from '@angular/forms';
import {Name} from "../entities/name";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  age!: Age;
  name: string = '';
  getName!: Name;

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    this.http.get<Age>(`http://localhost:8080/persons/get-age/${this.name}`, ).subscribe(result => {
      this.age = result;
      console.log(result);
    });
  }

  getData() {
    this.http.get<Name>('http://localhost:8080/persons/get-name-of-oldest-person').subscribe(data => {
      this.getName = data;
      console.log(data);
    });
  }
}
