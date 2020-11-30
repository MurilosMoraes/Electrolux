import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'preliminary',
    loadChildren: () => import('./preliminary/preliminary.module').then( m => m.PreliminaryPageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./record/record.module').then( m => m.RecordPageModule)
  },
  {
    path: 'justification',
    loadChildren: () => import('./justification/justification.module').then( m => m.JustificationPageModule)
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then( m => m.QuestionnairePageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('./text/text.module').then( m => m.TextPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
