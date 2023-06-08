import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WincardComponent} from "../wincard/wincard.component";
import {CdkDrag} from "@angular/cdk/drag-drop";

export interface WorkHistory  {
  logo: string,
  isSvg: boolean,
  duration: string,
  details: string[],
  contentIcon?: string,
  position: string
  skills: {skillName: string, skillLevel: number, color: string}[]
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [  CommonModule, WincardComponent, CdkDrag],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  workhistory: WorkHistory[] = [
    {
      logo: "conweaver.svg",
      duration: "nov.19 - present",
      isSvg: true,
      contentIcon: 'code-icon',
      position: "Lead developer",
      details: [
        "Planning and designing web apps" ,
        "Implementing tests and improving performance",
        "Delivering seamless user experiences, driving customer satisfaction"
      ],
      skills: [{
        color: "blue",
        skillLevel: 90,
        skillName: "Angular"
      },{
        color: "blue",
        skillLevel: 80,
        skillName: "UI/UX"
      },{
        color: "blue",
        skillLevel: 75,
        skillName: "Azure"
      },{
        color: "blue",
        skillLevel: 99,
        skillName: "xxx"
      }]
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
      position: "Web developer",
      skills: [{
        color: "blue",
        skillLevel: 90,
        skillName: "Angular"
      },{
        color: "blue",
        skillLevel: 80,
        skillName: "UI/UX"
      },{
        color: "blue",
        skillLevel: 75,
        skillName: "Azure"
      },{
        color: "blue",
        skillLevel: 99,
        skillName: "xxx"
      }]
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }



}
