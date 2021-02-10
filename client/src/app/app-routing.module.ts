import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ComplaintComponent} from './complaint/complaint.component'

const routes: Routes = [
	{
		path:'complaint',
		component: ComplaintComponent
	},{
		path: '',
		component: AppComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
