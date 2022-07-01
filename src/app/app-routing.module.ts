import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';
import { CanAdminGuard } from '@auth/guards/can-admin.guard';
import { CanEditGuard } from '@auth/guards/can-edit.guard';
import { SendEmailComponent } from '@auth/send-email/send-email.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then((m) => m.DatabaseModule),
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then((m) => m.AddModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./add/add.module').then((m) => m.AddModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'verification-email',
    component: SendEmailComponent,
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [CanAdminGuard],
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./editor/editor.module').then((m) => m.EditorModule),
    canActivate: [CanEditGuard],
  },
  {
    path: 'suscriptor',
    loadChildren: () =>
      import('./suscriptor/suscriptor.module').then((m) => m.SuscriptorModule),
    canActivate: [CanSuscriptorGuard],
  },
  {
    path: 'upload-image',
    loadChildren: () =>
      import('./shared/upload-image/upload-image.module').then(
        (m) => m.UploadImageModule
      ),
    canActivate: [CanAdminGuard],
  },
  { path: 'database', loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule) },
  { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) },
  { path: 'dominios', loadChildren: () => import('./dominios/dominios.module').then(m => m.DominiosModule) },
  { path: 'documentos', loadChildren: () => import('./documentos/documentos.module').then(m => m.DocumentosModule) },
  { path: 'accesos', loadChildren: () => import('./accesos/accesos.module').then(m => m.AccesosModule) },
  { path: 'linaje', loadChildren: () => import('./linaje/linaje.module').then(m => m.LinajeModule) },
  { path: 'glosario', loadChildren: () => import('./glosario/glosario.module').then(m => m.GlosarioModule) },
  { path: 'cat-maestros', loadChildren: () => import('./cat-maestros/cat-maestros.module').then(m => m.CatMaestrosModule) },
  { path: 'cat-general', loadChildren: () => import('./cat-general/cat-general.module').then(m => m.CatGeneralModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
