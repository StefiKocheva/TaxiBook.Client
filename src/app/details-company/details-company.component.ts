import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models/Company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-details-company',
  templateUrl: './details-company.component.html',
  styleUrls: ['./details-company.component.css']
})
export class DetailsCompanyComponent implements OnInit {
  id!: string;
  company!: Company;
  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.companyService.getCompany(this.id).subscribe(res => {
        this.company = res;
      })
    })
   }

  ngOnInit(): void {
  }

}
