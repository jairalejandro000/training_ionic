import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarPage } from './toolbar.page';

const routes: Routes = [
  { path: '', component: ToolbarPage, children: [
    { path: 'dashboard', loadChildren: () => import('../../panel/panel/panel.module').then(m => m.PanelPageModule) },
    { path: 'users', loadChildren:() => import('../../panel/users/users.module').then(m => m.UsersPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarPageRoutingModule {}
