import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PolicyService } from './services/policy/policy.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, FormsModule,
    MatInputModule, MatSelectModule, MatButtonModule,
    MatTableModule, MatCardModule, MatSortModule, MatPaginatorModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dataSource = new MatTableDataSource([]);
  displayedColumns = [
    'premium', 'name', 'type', 'coverage'
  ]
  filters = {
    name: '',
    minPremium: '',
    maxPremium: '',
    type: '',
    minCoverage: '',
    sort: ''
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private policyService: PolicyService) {
    this.fetchPolicies();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  fetchPolicies() {
    this.policyService.getPolicies(this.filters).subscribe((data: any) => {
      console.log(data);
      this.dataSource.data = data;
    })
  }
}
