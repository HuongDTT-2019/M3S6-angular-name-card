import {Component, Input, OnInit} from '@angular/core';
import {Import} from '@angular/core/schematics/utils/typescript/imports';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() {
  }

  ngOnInit() {
  }

}
