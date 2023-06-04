import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {CdkDrag} from "@angular/cdk/drag-drop";


@Component({
  selector: 'home',
  standalone: true,

  imports: [  CommonModule, MatCardModule, MatIconModule, CdkDrag],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
