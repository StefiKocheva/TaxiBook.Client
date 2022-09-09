import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/Company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {
  companies: Array<Company> = [];
  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
      console.log(companies);
    })
  }

}
