import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'auth/login', canLoad:[AuthLoginGuard], loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'auth/signup', canLoad:[AuthLoginGuard], loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule) },
  { path: 'sidebar', loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule) },
  { path: 'panel', canLoad:[AuthGuard], redirectTo: 'panel/dashboard', pathMatch: 'full' },
  { path: 'panel', canLoad:[AuthGuard], loadChildren: () => import('./shared/toolbar/toolbar.module').then( m => m.ToolbarPageModule) },
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
