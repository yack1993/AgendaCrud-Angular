import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PhonebookCreateComponent } from './components/phonebook/phonebook-create/phonebook-create.component';
import { PhonebookCrudComponent } from './views/phonebook-crud/phonebook-crud.component';
import { PhonebookUpdateComponent } from './components/phonebook/phonebook-update/phonebook-update.component';
import { PhonebookDeleteComponent } from './components/phonebook/phonebook-delete/phonebook-delete.component';




const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path:"agenda",
  component: PhonebookCrudComponent
},{
  path: "agenda/create",
  component: PhonebookCreateComponent
},{
  path: "agenda/update/:id",
  component: PhonebookUpdateComponent
},{
  path: "agenda/delete/:id",
  component: PhonebookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
