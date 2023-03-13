import { Component, OnInit } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  dataSource: any;
  countryDataSource: any;
  constructor() {
    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: `${environment.apiUrl}/Employee`,
      insertUrl: `${environment.apiUrl}/Employee`,
      updateUrl: `${environment.apiUrl}/Employee`,
      deleteUrl: `${environment.apiUrl}/Employee`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: false };
      },
    });

    this.countryDataSource = AspNetData.createStore({
      key: 'code',
      loadUrl: `${environment.apiUrl}/Country`,
      onBeforeSend(method, ajaxOptions) { ajaxOptions.xhrFields = { withCredentials: false }; },
    });

  }

  ngOnInit(): void {
  }

  onRowUpdating = (e: any) => {
    var assign = (<any>Object).assign({}, e.oldData, e.newData); e.newData = assign;
  }

  onRowInserting = (e: any) => {
    console.log(e);
  }
}
