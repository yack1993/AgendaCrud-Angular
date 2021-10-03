import { Component, OnInit } from '@angular/core';
import { Schedule } from './../phonebook.model';
import { PhonebookService } from './../phonebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebook-create',
  templateUrl: './phonebook-create.component.html',
  styleUrls: ['./phonebook-create.component.scss']
})


export class PhonebookCreateComponent implements OnInit {

  schedule: Schedule = {
    name: '',
    telephone:'',
    email: '',
    birthday: new Date
    //birthday: (new Date()).toISOString().split('T')[0]

  }

  constructor(
    private phonebookService: PhonebookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createPhonebook(): void {

    this.phonebookService.create(this.schedule).subscribe(() => {
      this.phonebookService.showMessage('Criado com Sucesso!')
      this.router.navigate(['/agenda'])
    })
  }

  cancel(): void {
    this.router.navigate(['/agenda'])
  }

}
