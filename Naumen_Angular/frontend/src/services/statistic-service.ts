import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Age} from "../entities/age";
import {Name} from "../entities/name";
import {PersonAndFrequency} from "../entities/person-and-frequency";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private personUrl: string;

  constructor(private http: HttpClient) {
    this.personUrl = 'http://localhost:8080/statistic';
  }

  public getStatistic() {
    return this.http.get<PersonAndFrequency[]>(this.personUrl + '/get-requests');
  }
}
