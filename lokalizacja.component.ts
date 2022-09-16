import { Component, OnInit, Input } from '@angular/core';
import { Miejsca } from '../miejsca';
import { Miejsce } from '../miejsce';

@Component({
  selector: 'app-lokalizacja',
  templateUrl: './lokalizacja.component.html',
  styleUrls: ['./lokalizacja.component.css']
})
export class LokalizacjaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() wybrany!:number;

  wybraneLokalizacje:Miejsce[] = Miejsca.miejsca;
}
