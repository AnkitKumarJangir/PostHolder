import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       let isLogin =  localStorage.getItem('isLogin');
      // console.log(isLogin);
       
      if(!isLogin){
        console.log("your not user");
        
        this.router.navigate(['']);
        return false;
      }
    return true;
  }
  
  
}
