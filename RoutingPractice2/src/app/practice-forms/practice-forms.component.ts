import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-practice-forms',
  templateUrl: './practice-forms.component.html',
  styleUrls: ['./practice-forms.component.css']
})
export class PracticeFormsComponent implements OnInit {
  projectForm:FormGroup;
  status=['Stable','Critical','Finished'];
  submitted=false;
  constructor(private fb:FormBuilder) {

  }
  ngOnInit(): void {
    this.projectForm=this.fb.group({
      projectName:['',[Validators.required,this.validateProjectName,this.asyncInvalidProjectName]],
      Mail:['',[Validators.required,Validators.email]],
      projectStatus:['',[Validators.required]]
    })
  }


  onSubmit(){
    console.log(this.projectForm.value);


  }

  validateProjectName(a:FormControl) :{[s:string]:boolean}{
    let test='Test';
    if(a.value===test){
      return {'invalidProjectName':true};
    }else{
      return null;
    }

  }


  asyncInvalidProjectName(a:FormControl): Promise<any> | Observable<any> {
    const promise=new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if(a.value==='Test'){
          resolve({'ProjectnameIsInvalid':true})
        }else{
          resolve(null);
        }
      },1800);

    })
    return promise;


  }


}
