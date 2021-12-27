import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='';
  date='';
  amount!: number;
  height!:number;
  miles!:number;

  onNameChange(value:any): void{
    this.name=value.target.value;
  }

  onDateChange(value:any){
    this.date=value.target.value;
  }

  onAmountChange(value:any){
    this.amount=parseFloat(value.target.value);
  }
  onHeightChange(value:any){
    this.height=parseFloat(value.target.value);
  }
  onMilesChange(value:any){
    this.miles=parseFloat(value.target.value);
  }
}
