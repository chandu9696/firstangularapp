import { Injectable } from '@angular/core';
import "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut, updateProfile} from "firebase/auth";
// import * as M from 'materialize-css';
import { onAuthStateChanged, User } from "firebase/auth";
import { Router } from '@angular/router';
import {auth} from '../firebaseconfig'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   private userID?:string;

    user!:User|null;
  constructor(private router:Router) { }
  
//   getUid(){
//     return this.userID
//   }
//   isAuthenticated(){
//     const uid = localStorage.getItem('userID')
//     if(uid) this.userID = uid
//     return uid ? true : false
//   }
//   auth = getAuth(app);
// onAuthStateChanged(auth:any, ():any=>{

//   });
status()
{
    if(this.user)
    {
        console.log(this.user)
    return this.user.displayName;
    }
    else
    {
        console.log(this.user)
        return false;
      
    }
}
setter()
{
    onAuthStateChanged(auth, (currentUser:User|null)=>{
        this.user=currentUser

    });
    return this.user;
  
}

  register(email:string,password:string,name:string){
          createUserWithEmailAndPassword(auth,email,password)
          .then((userdetails:any)=>{
            // this.userID = userdetails.user.email
            // localStorage.setItem('userID', userdetails.user.email)
            // M.toast({html: 'User saved successfully',classes:"green"})
            console.log('Register')
            console.log(name)
            updateProfile(userdetails.user,{displayName:name})
            this.router.navigate(['/'])
          }).catch((err)=>{
            console.log(err)
            // M.toast({html: 'Error saving user',classes:"red"})
          })
  }
  login(email:any,password:any){
    signInWithEmailAndPassword(auth,email,password)
    .then((userdetails:any)=>{
      // this.userID = userdetails.user.email
      // localStorage.setItem('userID', userdetails.user.email)
      // M.toast({html: 'User saved successfully',classes:"green"})
      console.log('Sign In')
      this.router.navigate(['/'])
    }).catch((err)=>{
      console.log(err)
      // M.toast({html: 'Error saving user',classes:"red"})
    })
}
//   login(email:string,password:string){
//           firebase.auth().signInWithEmailAndPassword(email,password)
//           .then((userdetails:any)=>{
//             this.userID = userdetails.user.email
//             localStorage.setItem('userID', userdetails.user.email)
//             M.toast({html: 'User signed successfully',classes:"green"})
//             this.router.navigate(['/'])
//           }).catch((err)=>{
//             console.log(err)
//             M.toast({html: 'Error logging in',classes:"red"})
//           })
//   }
  logOut(){
     signOut(auth).then(()=>{
        console.log("signout")
        // this.setter()
//       this.userID = undefined;
//       localStorage.removeItem('userID')
  })
   }
}