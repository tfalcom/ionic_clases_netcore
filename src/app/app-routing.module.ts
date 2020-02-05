import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   /*
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  */

  { path: '', redirectTo: 'mlogin', pathMatch: 'full'},
  { path: 'mlogin', loadChildren: './login/login.module#LoginModule' },
  { path: 'mestructura', loadChildren: './estructura/estructura.module#EstructuraModule' },
  { path: '**', redirectTo: '' } // otherwise redirect to home
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
