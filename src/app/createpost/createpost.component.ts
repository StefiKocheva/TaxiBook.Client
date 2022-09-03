import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
  companyForm: FormGroup;
  constructor(private fb: FormBuilder, private companyService: CompanyService) {
    this.companyForm = this.fb.group({
      'Name': ['', Validators.required],
      'Description': ['']
    })
  }

  get name() {
    return this.companyForm.get('Name');
  }

  get description() {
    return this.companyForm.get('Description');
  }

  create() {
    this.companyService.create(this.companyForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
