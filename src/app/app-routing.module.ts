import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './includes/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  
  {
    path:'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path : 'home',
        loadChildren : () => import('../app/pages/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
