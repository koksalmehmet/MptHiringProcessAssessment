import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';
import { CustomDataSourceService } from '../core/custom-data-source.service';
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeDataSource: CustomStore = new CustomStore();
  countriesDataSource: CustomStore = new CustomStore();
  constructor(private core: CoreService,
    private source: CustomDataSourceService) {

  }
  ngOnInit(): void {
   
    this.countriesDataSource = this.source
      .load('Country', { requireTotalCount: true})
      .setKey('code')
      .build();
      
    this.employeeDataSource = this.source
      .load('Employee', { requireTotalCount: true})
      .insert('Employee')
      .updateFullModel('Employee', 'id')
      .remove('Employee')
      .setKey('id')
      .build();
  }

  onRowUpdating = (e: any) => {
    var assign = (<any>Object).assign({}, e.oldData, e.newData);
    e.newData = assign;
  }
}
