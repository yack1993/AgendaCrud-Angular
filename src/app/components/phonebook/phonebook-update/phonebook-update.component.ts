import { PhonebookService } from './../phonebook.service';
import { Schedule } from './../phonebook.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-phonebook-update',
  templateUrl: './phonebook-update.component.html',
  styleUrls: ['./phonebook-update.component.scss']
})
export class PhonebookUpdateComponent implements OnInit {

  schedule!:Schedule

  constructor(private phonebookService: PhonebookService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.phonebookService.readById(id).subscribe(schedule => {
      this.schedule = schedule.data
      console.log(schedule)
    });
  }

  phonebookUpdate(): void {
    debugger
    this.phonebookService.update(this.schedule).subscribe(() => {
      this.phonebookService.showMessage('Atualizado com sucesso!')
      this.router.navigate(['/agenda'])
    })
  }

  cancel(): void {
    this.router.navigate(['/agenda'])
  }

}
