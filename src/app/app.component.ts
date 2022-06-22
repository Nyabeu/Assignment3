import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = "fally";
  password: string = "prk";
  para = false;
  timeButton : number[] = [];
  tmp: number = 0;

  onTogglePara(){
    this.para = !this.para;
    this.tmp++;
    this.timeButton.push(this.tmp);
    //this.timeButton.push(this.timeButton.Length + 1)
  }

  getBackground(){
    let result: string;
    for (let i=1; i<= this.timeButton.length; i++) {
      result = (i>=5)? 'blue': 'transparent';
    }
    return result;
  }
}
