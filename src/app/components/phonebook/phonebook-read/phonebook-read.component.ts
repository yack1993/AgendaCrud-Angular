import { PhonebookService } from './../phonebook.service';
import { Schedule } from './../phonebook.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-phonebook-read',
  templateUrl: './phonebook-read.component.html',
  styleUrls: ['./phonebook-read.component.scss']
})
export class PhonebookReadComponent implements OnInit {

  schedules!: Schedule[]
  displayedColumns = ['name', 'telephone','email','birthday', 'action']

  constructor(
    private phonebookService: PhonebookService,
    private route: ActivatedRoute) { }


  ngOnInit(){
    this.phonebookService.getAgendas().subscribe(
      (info) => {
        this.schedules = info.data
        console.log(this.schedules)
      }
    )

  }

}
