import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConditiiComponent } from './conditii/conditii.component';

const routes: Routes = [{ path: ':id', component: AppComponent },
  { path: 'conditii', component: ConditiiComponent }]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
