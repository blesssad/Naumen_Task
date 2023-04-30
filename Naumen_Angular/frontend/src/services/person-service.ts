import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from "@angular/forms";
import {Age} from "../entities/age";
import {Name} from "../entities/name";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personUrl: string;

  constructor(private http: HttpClient) {
    this.personUrl = 'http://localhost:8080/persons';
  }

  public getAgeByName(name: string){
    return this.http.get<Age>(this.personUrl+ '/get-age/' + name);
  }

  public getNameOfOldestPerson(){
    return this.http.get<Name>(this.personUrl + '/get-name-of-oldest-person');
  }

}
