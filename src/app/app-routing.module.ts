import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseSettingComponent } from './components/expense-setting/expense-setting.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainpageComponent,children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'expense-setting',
        component: ExpenseSettingComponent
      }
    ]
  },
  
  // { path: '**', component: PageNotFoundComponent } //creating this page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
