import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebook-crud',
  templateUrl: './phonebook-crud.component.html',
  styleUrls: ['./phonebook-crud.component.scss']
})
export class PhonebookCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService  ) {
      headerService.headerData = {
        title: 'Cadatro Contato',
        icon: 'storefront',
        routerUrl: '/agenda'
      }
    }

  ngOnInit(): void {
  }

  navigateToPhonebookCreate(): void {
    this.router.navigate(['/agenda/create'])
  }

}
