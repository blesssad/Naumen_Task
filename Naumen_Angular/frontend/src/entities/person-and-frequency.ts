import {HttpClient} from "@angular/common/http";

export class PersonAndFrequency {
  name: string;
  countOfRequests: number;
  constructor(name: string, frequency: number) {
    this.name = name;
    this.countOfRequests = frequency;
  }
}
