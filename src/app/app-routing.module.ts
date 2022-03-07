import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path : 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  
    
  },
  {
    path : 'post',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)  


  },
  {
    path : 'postDetail',
    loadChildren: () => import('./post-detail/post-detail.module').then(m => m.PostDetailModule) ,
    canActivate: [AuthGuard]


  },
  {  
    path: 'Album',  
    loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule),
    canActivate: [AuthGuard]

  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
