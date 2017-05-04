import { Component, OnInit } from '@angular/core';
import { InterfaceListService } from '../shared/interface-list/interface-list.service';

import { ManagedInterface } from '../shared/domain/managedinterface';


import { FormsModule }      from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { InputTextModule, ButtonModule, DataGridModule, DialogModule }  from 'primeng/primeng';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string;
  message: string;
  onClick() {
    this.message = 'Hello ' + this.name;
  }

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  managedInterfaces: ManagedInterface[];

  selectedManagedInterface: ManagedInterface;

  displayDialog: boolean;

//  constructor(private interfaceService: InterfaceListService) { }


  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {InterfaceListService} interfaceService - The injected NameListService.
   */
  //constructor(public nameListService: NameListService) {}
  constructor(private interfaceService: InterfaceListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    //this.getNames();
    console.log("test2")
    this.interfaceService.get().subscribe(managedInterfaces => this.managedInterfaces = managedInterfaces, error => this.errorMessage = <any>error);
    //this.interfaceService.getInterfaces().then(managedInterfaces => this.managedInterfaces = managedInterfaces, error => this.errorMessage = <any>error);


    console.log(this.managedInterfaces)
  }

  /**
   * Handle the nameListService observable

  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }   */

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.

  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }*/


  selectInterface(managedInterface: ManagedInterface) {
      this.selectedManagedInterface = managedInterface;
      this.displayDialog = true;
  }

  onDialogHide() {
      this.selectedManagedInterface = null;
  }

}
