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
    this.fetchCompanies();
  }

  fetchCompanies() {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
      console.log(companies);
    })
  }

  editCompany(id: string) {
    this.router.navigate(["companies", id, "edit"])
  }

  deleteCompany(id: string) {
    console.log("Hello")
    this.companyService.deleteCompany(id).subscribe(res => {
      this.fetchCompanies()
    })
  }
}
