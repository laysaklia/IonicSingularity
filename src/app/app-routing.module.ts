import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment as env } from './../environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    title: `${env.appName} - Início`,
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sobre',
    title: `${env.appName} - Sobre`,
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'contato',
    title: `${env.appName} - Contato`,
    loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: '404',
    title: `${env.appName} - Error 404`,
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'login',
    title: `${env.appName} - Entrar`,
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    title: `${env.appName} - Sair`,
    loadChildren: () => import('./user/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'profile',
    title: `${env.appName} - Perfil`,
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'fbpopulate',
    loadChildren: () => import('./temp/fbpopulate/fbpopulate.module').then( m => m.FbpopulatePageModule)
  },
  {
    path: 'fbview',
    loadChildren: () => import('./temp/fbview/fbview.module').then( m => m.FbviewPageModule)
  },
  {
    path: 'fblist',
    loadChildren: () => import('./temp/fblist/fblist.module').then( m => m.FblistPageModule)
  },
  {
    path: 'view/:id',
    title: `${env.appName} - Exibe umas coisas`,
    loadChildren: () => import('./temp/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./pages/policies/policies.module').then( m => m.PoliciesPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./temp/store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./temp/gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'camera',
    title: `${env.appName} - Tirar Foto`,
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: 'new',
    loadChildren: () => import('./things/new/new.module').then( m => m.NewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
