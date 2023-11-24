import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CLoginPage } from './c-login.page';

const routes: Routes = [
  {
    path: '',
    component: CLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CLoginPageRoutingModule {}
