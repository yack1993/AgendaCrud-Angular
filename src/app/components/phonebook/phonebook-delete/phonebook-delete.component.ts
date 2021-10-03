import { Router, ActivatedRoute } from '@angular/router';
import { PhonebookService } from './../phonebook.service';
import { Schedule } from './../phonebook.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook-delete',
  templateUrl: './phonebook-delete.component.html',
  styleUrls: ['./phonebook-delete.component.scss']
})
export class PhonebookDeleteComponent implements OnInit {
  schedule!: Schedule

  constructor(private phonebookService: PhonebookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.phonebookService.readById(id).subscribe(schedule => {
      this.schedule = schedule.data
      console.log(schedule)
    });
  }

  deletePhonebook(): void {
    this.phonebookService.delete(this.schedule.id!).subscribe(() => {
      this.phonebookService.showMessage('Excluido com sucesso!')
      this.router.navigate(['/agenda'])
    })
  }

  cancel(): void {
    this.router.navigate(['/agenda'])
  }

}
