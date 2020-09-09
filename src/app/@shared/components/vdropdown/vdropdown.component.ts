import { Component, OnInit, Input, ViewChild, ContentChildren, QueryList, ContentChild, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { Button } from 'protractor';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'v-dropdown',
  templateUrl: './vdropdown.component.html',
  styleUrls: ['./vdropdown.component.scss'],
  host: { '(click)': 'openModal()' },
})
export class VDropdownComponent implements OnInit {
  @ViewChild('vDrop') private input: NgbDropdown;
  @ViewChild(NgbDropdownMenu, { read: ElementRef }) private dropdownMenu: ElementRef;

  @ContentChildren(NgbDropdownItem) childs: QueryList<NgbDropdownItem>;

  @ContentChild('dropdownContentTemplate', { static: false }) dropdownContentTemplate: TemplateRef<any>;
  @ContentChild('dropdownFullTemplate', { static: false }) dropdownFullTemplate: TemplateRef<any>;

  /**
 * Indicates whether the dropdown should be closed when clicking one of dropdown items or pressing ESC.
 *
 * * `true` - the dropdown will close on both outside and inside (menu) clicks.
 * * `false` - the dropdown can only be closed manually via `close()` or `toggle()` methods.
 * * `"inside"` - the dropdown will close on inside menu clicks, but not outside clicks.
 * * `"outside"` - the dropdown will close only on the outside clicks and not on menu clicks.
 */
  @Input() autoClose: boolean | 'outside' | 'inside' = true;

  public get IsOpen(){
    return this.input.isOpen();
  }

  /** 当前选中的文本 */
  @Input() selectedText: string;
  // isOpen: boolean;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
  }
  openModal() { }
  ngAfterViewInit() {
    if (this.childs != null) {
      this.childs.forEach((dropdownItem) => {
        this.renderer.listen(dropdownItem.elementRef.nativeElement, 'click', (evt) => {
          this.selectedText = (evt.srcElement as HTMLElement).innerText;
        });
      });
    }

    this.input.openChange.subscribe((isOpen: boolean) => { });
  }

  /**
   * 关闭下拉框
   */
  close() {
    this.input.close();
  }
}
