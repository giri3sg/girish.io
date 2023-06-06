import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {WorkHistory} from "../home/home.component";
import {DomSanitizer} from '@angular/platform-browser';
import {MatListModule} from "@angular/material/list";


const CODE_ICON =
  `
<svg width="89" height="63" viewBox="0 0 89 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8 8.875H71.2V44.375H80.1V6.65625C80.1 2.99947 77.0962 0 73.425 0H15.575C11.9079 0 8.9 2.99947 8.9 6.65625V44.375H17.8V8.875ZM86.775 48.8125H2.225C1.0082 48.8125 0 49.8248 0 51.0312V53.25C0 58.1382 3.99805 62.125 8.9 62.125H80.1C85.0019 62.125 89 58.1382 89 53.25V51.0312C89 49.8248 87.9987 48.8125 86.775 48.8125ZM50.883 35.2504C51.4253 35.7912 52.1345 36.0547 52.8437 36.0547C53.553 36.0547 54.2664 35.7859 54.8101 35.2443L61.4851 28.588C62.5714 27.5046 62.5714 25.7453 61.4851 24.6622L54.8101 18.006C53.7237 16.9225 51.9635 16.9225 50.8774 18.006C49.791 19.0894 49.791 20.8488 50.8774 21.9318L55.5861 26.6244L50.8774 31.3171C49.7844 32.4076 49.7844 34.1688 50.883 35.2504ZM38.117 18.0135C37.0307 16.93 35.2704 16.93 34.1843 18.0135L27.5093 24.6697C26.423 25.7532 26.423 27.5125 27.5093 28.5955L34.1843 35.2518C34.7378 35.7912 35.447 36.0547 36.1562 36.0547C36.8655 36.0547 37.5789 35.7859 38.1226 35.2443C39.209 34.1608 39.209 32.4015 38.1226 31.3185L33.4167 26.625L38.1254 21.9323C39.0905 20.8563 39.0905 19.0951 38.117 18.0135V18.0135Z" fill="black"/>
</svg>


`;

@Component({
  selector: 'wincard',
  standalone: true,
  imports: [CommonModule, CdkDrag, MatIconModule, MatListModule],
  templateUrl: './wincard.component.html',
  styleUrls: ['./wincard.component.scss']
})
export class WincardComponent implements OnInit {

  @Input()
  workHistory: WorkHistory | undefined;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('code-icon', sanitizer.bypassSecurityTrustHtml(CODE_ICON));
  }

  ngOnInit() {
    console.log("init", this.workHistory)
  }
}
