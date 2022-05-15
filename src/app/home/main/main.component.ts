import { Component, OnInit } from '@angular/core';
import * as confetti from 'canvas-confetti';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  button_clicked = false;
  after_clicked = false;
  show_reset_button = false;
  people = ['Marselo','Nyankowo', 'Daarkyx__', 'Zvan', '12Marco', 'Teñe', 'Majenarzy', 'Dieguito', 'Nachou'];
  insults = ['negro culiao', 'cochino ctm', 'indius flaites', 'tqm 💕', 'negro hediondo', 'malo pal catre', 'tula chica']
  random_n = 0;
  random_i = 0;
  gen_insult = '';

  count = 200;
  defaults = {
    origin: { y: 0.7 }
  };


  constructor(
  ) { }

  ngOnInit(): void {
    this.random_n = Math.floor(Math.random() * this.people.length);
    this.random_i = Math.floor(Math.random() * this.insults.length);
  }

  reset(){
    this.random_n = Math.floor(Math.random() * this.people.length);
    this.random_i = Math.floor(Math.random() * this.insults.length);
    this.button_clicked = false;
    this.after_clicked = false;
    this.show_reset_button = false;
  }

  clicked(canvas_element: HTMLCanvasElement){
    let that = this;
    this.button_clicked = true;
    this.gen_insult = `${this.people[this.random_n]} ${this.insults[this.random_i]}`;
    confetti.create(canvas_element, {resize: true})({
      shapes: ['square'],
      particleCount: 200,
      spread: 70,

    })
    this.realFire(canvas_element);
    this.after_clicked = true;
    setTimeout(function () {
      that.show_reset_button = true;
    }, 1500);
  }

  new_insult(){
    this.random_n = Math.floor(Math.random() * this.people.length);
    this.random_i = Math.floor(Math.random() * this.insults.length);
    this.gen_insult = `${this.people[this.random_n]} ${this.insults[this.random_i]}`;
  }

  fire(particleRatio: number, opts: any, canvas_element: HTMLCanvasElement) {
    let options = opts;
    options['particleCount'] = Math.floor(this.count * particleRatio)
    confetti.create(canvas_element, {resize: true})(options);
  }

  realFire(canvas_element: HTMLCanvasElement){
    this.fire(0.25, {
      spread: 26,
      startVelocity: 55,
    }, canvas_element);
    this.fire(0.2, {
      spread: 60,
    }, canvas_element);
    this.fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    }, canvas_element);
    this.fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    }, canvas_element);
    this.fire(0.1, {
      spread: 120,
      startVelocity: 45,
    }, canvas_element);
  }


}
