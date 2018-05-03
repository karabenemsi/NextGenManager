import { Injectable } from '@angular/core';
import { Order } from '../../Models';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

let ORDERS: Order[] = [
  {
    id: '1',
    title: 'Späne sammeln und ordnen',
    details: '',
    number: 726,
    assignees: {
      technical: ['Tobias Seifriz'],
      coach: ['Jasmin Bögle'],
      buisness: ['Laura Lohmüller', 'Tim Quarleiter']
    },
    customer: 'SMS Maschinenbau GmbH',
    log: [{id: 'ab', message: 'Hello'}],
    comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
    dateInbox: new Date(2017, 12, 14),
    dateAccepted: new Date(2017, 12,20),
    dateDone: new Date(2018, 3, 8)
  }
];


@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  // sprintUrl = environment.backendApi.url + environment.backendApi.basePath + environment.backendApi.paths.sprints;

  getOrders(): Observable<Order[]> {
    return Observable.of(ORDERS);
  }




}
