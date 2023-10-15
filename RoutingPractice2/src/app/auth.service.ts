

export class AuthService {

  loggedIn=false;

  isAuthenticated(){
    const promise=new Promise((resolve,reject)=>{
      this.loggedIn=true;
      setTimeout(()=>{
        resolve(this.loggedIn);
        console.log(this.loggedIn);

      },1000)
    })
    return promise;
  }


  login(){
    this.loggedIn=true;
  }
logout(){
  this.loggedIn=false;
}

}


