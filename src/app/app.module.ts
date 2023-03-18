import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TarchShallModule } from 'tarch-shall';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DxDataGridModule } from 'devextreme-angular';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarchShallModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDividerModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

