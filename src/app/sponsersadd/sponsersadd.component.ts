import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Isponser
{
  data:string;
}
@Component({
  selector: 'app-sponsersadd',
  templateUrl: './sponsersadd.component.html',
  styleUrls: ['./sponsersadd.component.css']
})

export class SponsersaddComponent implements OnInit,AfterViewInit {

  flagforsponser:number=0;
  list_of_silver:Isponser[]=[]
  list_of_gold:Isponser[]=[]
  list_of_platinium:Isponser[]=[]
  input_val!:string
  obj_sponser:Isponser={data:''};
  pop_up_toggle:boolean=false;
  class_for_pop_up:boolean=false;
  Image_Link:string='';
  Setting_toggle:boolean=true;
  @ViewChild('pop',{static:true}) elementView?: ElementRef<HTMLDivElement>;

  contentHeight?: number;
  constructor() { }

  ngAfterViewInit(): void {
    this.contentHeight = this.elementView?.nativeElement.offsetHeight;
    console.log(this.contentHeight)
   
    
  }
  ngOnInit(): void {
    
  }
  Add_input(e:any)
  {
    this.input_val=e.target.value
  
    console.log(window.innerHeight)
    console.log(window.pageYOffset)
    // console.log(window.pageY)
    // console.log(this.obj_sponser)
  }
  ShowCord(e:any)
  {
    console.log('test')
    console.log(e.pageY,e.pageX)
  }
  AddSponser()
  {
    if(this.flagforsponser===0)
    {
      console.log('Gold add')
  
      this.list_of_gold.push({data:this.input_val})
      console.log(this.list_of_gold)

    }
   else if(this.flagforsponser===1)
    {
      console.log('Silver add')
   
      
      this.obj_sponser.data=this.input_val
      this.list_of_silver.push({data:this.input_val})
      console.log(this.list_of_silver)
    }
    else
    {
      console.log('premium add')
    
      this.list_of_platinium.push({data:this.input_val})
      console.log(this.list_of_platinium)
    }
  }
  Pop_Up(e:any)
  {
    this.pop_up_toggle=!this.pop_up_toggle;
    console.log(e.pageY)
    console.log(this.contentHeight)
    if(e.pageY+this.contentHeight>window.innerHeight)
    {
      
      this.class_for_pop_up=true
      console.log('upper')

    }
    else
    {
      this.class_for_pop_up=false;
    }

  }
  Preview_Set(e:any)
  {
    const file_data=e.target.files[0];
    const reader= new FileReader()
    reader.readAsDataURL(file_data);
    reader.onloadend=()=>{
        this.Image_Link=reader.result as string
    }


  }
  Setting_Toggle()
  {
    this.Setting_toggle=!this.Setting_toggle
  }

}
