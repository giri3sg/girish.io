import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WincardComponent} from "../wincard/wincard.component";

export interface WorkHistory  {
  logo: string,
  isSvg: boolean,
  duration: string,
  details: string[],
  contentIcon?: string,
  position: string
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [  CommonModule, WincardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  workhistory: WorkHistory[] = [
    {
      logo: "conweaver.svg",
      duration: "nov.19 - present",
      isSvg: true,
      details: [
        "Planning and designing web apps" ,
        "Implementing tests and improving performance",
        "Delivering seamless user experiences, driving customer satisfaction"
      ],
      contentIcon: 'code-icon',
      position: "Lead developer"
    },
    {
      logo: "patagona.svg",
      duration: "Jul.15 - Sept.19",
      isSvg: false,
      contentIcon: 'terminal',
      details: [
        "Translating ideas into visually appealing websites",
        "Planning and designing tailored solutions" ,
        "Converting server-side frontend to Angular"],
      position: "Web developer"
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }



}
