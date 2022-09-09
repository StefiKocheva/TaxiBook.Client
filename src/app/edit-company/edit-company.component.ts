import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/Company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  companyForm!: FormGroup;
  companyId!: string;
  company!: Company;
  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private companyService: CompanyService, 
    private router: Router
    ) 
    { 
      this.companyForm = this.fb.group({
        'id': [''],
        'name': [''],
        'description': [''],
      })
    }

  ngOnInit(): any {
    this.route.params.subscribe(params => {
      this.companyId = params['id'];
      this.companyService.getCompany(this.companyId).subscribe(res => {
        this.company = res;
        this.companyForm = this.fb.group({
          'id': [this.company.id],
          'name': [this.company.name],
          'description': [this.company.description],
        })
      })
    })
  }

  editCompany() {
    this.companyService.editCompany(this.companyForm.value).subscribe(res => {
      this.router.navigate(["companies"])
    })
  }
}
