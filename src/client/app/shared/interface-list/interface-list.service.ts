import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import { ManagedInterface } from '../domain/managedinterface';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class InterfaceListService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */

  getInterfaces() {

    return this.http.get('assets/interfaces.json')
      .toPromise()
      .then(res => <ManagedInterface[]>res.json().data)
      .then(data => { console.log("lala"); console.log(data); return data; });
    //.catch(this.handleError);

  }

  get(): Observable<ManagedInterface[]> {
    let test = this.http.get('assets/interfaces.json')
      .map(mapManagedInterfaces)
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);

    return test;
  }





  /**
    * Handle HTTP error
    */

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}


function mapManagedInterfaces(response: Response): ManagedInterface[] {
  // The response of the API has a results
  // property with the actual results
  //    console.log(<ManagedInterface[]>response.json())

  return response.json().map(toManagedInterface)
  /*    let managedInterfaces: ManagedInterface[];

      managedInterfaces = [{
        "name": "a",
        "stashlink": "b",
        "downloadlink": "c",
      },{
        "name": "1",
        "stashlink": "2",
        "downloadlink": "3",
      }];
      console.log(managedInterfaces)
      return managedInterfaces*/
}

function toManagedInterface(r: ManagedInterface): ManagedInterface {
  console.log('Parsing managed interface');
  let managedInterface = <ManagedInterface>({
    name: r.name,
    stashlink: r.stashlink,
    downloadlink: r.downloadlink,
  });
  console.log('Parsed managed interface:', managedInterface);
  return managedInterface;
}
