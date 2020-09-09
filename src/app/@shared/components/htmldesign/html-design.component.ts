import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";

@Component({
  selector: 'v-html-design',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './html-design.component.html',
  styleUrls: ['./html-design.component.scss'],
})
export class HTMLDesignComponent implements OnInit {
  /** 编辑的URL */
  @Input() url:string;
  /** 显示移动端 */
  @Input() IsMobile:boolean;
  /** 显示尺子 */
  @Input() ShowRule:boolean;
  constructor(){

  }
  ngOnInit() {

  }
}
