import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  count = 0

  constructor() { }

  ngOnInit(): void {
  }

  addCount(){
    this.count++;
  }

}
