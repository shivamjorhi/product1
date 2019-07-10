import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{
   // constructor(private service:EmployeeService,private router:Router){}
    myallData:any[]=[];
    proId:any;
    proName:any;
    proCost:any;
    proOption:any;
    proSelect:any;
    proAvilable:any;
    
    addData():any{
        this.myallData.push({proId:this.proId,proName:this.proName,proCost:this.proCost,proOption:this.proOption,proSelect:this.proSelect,proAvilable:this.proAvilable});
        
    }

}