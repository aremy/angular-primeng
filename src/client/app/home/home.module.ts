import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InterfaceListService } from '../shared/interface-list/interface-list.service';
//import { NameListService } from '../shared/name-list/name-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, DataGridModule, DialogModule, PanelModule  }  from 'primeng/primeng';


@NgModule({
  imports: [HomeRoutingModule, SharedModule, FormsModule, InputTextModule, ButtonModule, ButtonModule, DataGridModule, DialogModule, PanelModule, BrowserAnimationsModule ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [InterfaceListService]
})
export class HomeModule { }
