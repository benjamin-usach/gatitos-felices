import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { NewComponent } from './home/new/new.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
},
{
  path: 'counter',
  component: NewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
