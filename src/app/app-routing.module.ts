import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WipComponent } from './pages/wip/wip.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'wip', component: WipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
