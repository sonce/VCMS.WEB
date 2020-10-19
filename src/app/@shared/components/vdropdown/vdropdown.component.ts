import {
	Component,
	Input,
	ViewChild,
	ContentChildren,
	QueryList,
	ContentChild,
	TemplateRef,
	Renderer2,
	AfterViewInit,
	HostListener
} from '@angular/core';
import { NgbDropdown, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'v-dropdown',
	templateUrl: './vdropdown.component.html',
	styleUrls: ['./vdropdown.component.scss']
	// host: { '(click)': 'openModal()' }
})
export class VDropdownComponent implements AfterViewInit {
	@ViewChild('vDrop') private input: NgbDropdown;

	/**
	 * 所有的下拉选项
	 */
	@ContentChildren(NgbDropdownItem) childs: QueryList<NgbDropdownItem>;

	/**
	 * 下拉框完整的内容模板
	 */
	@ContentChild('dropdownFullTemplate', { static: false }) dropdownFullTemplate: TemplateRef<unknown>;
	/**
	 * 下拉选项的模板
	 */
	@ContentChild('dropdownContentTemplate', { static: false }) dropdownContentTemplate: TemplateRef<unknown>;

	/**
	 * Indicates whether the dropdown should be closed when clicking one of dropdown items or pressing ESC.
	 *
	 * * `true` - the dropdown will close on both outside and inside (menu) clicks.
	 * * `false` - the dropdown can only be closed manually via `close()` or `toggle()` methods.
	 * * `"inside"` - the dropdown will close on inside menu clicks, but not outside clicks.
	 * * `"outside"` - the dropdown will close only on the outside clicks and not on menu clicks.
	 */
	@Input() autoClose: boolean | 'outside' | 'inside' = true;

	@Input() public get IsOpen(): boolean {
		return this.input.isOpen();
	}

	/** 当前选中的文本 */
	@Input() selectedText: string;

	NoSelectedText = 'No Selected Item';
	// isOpen: boolean;

	constructor(private renderer: Renderer2) {}

	ngAfterViewInit(): void {
		if (this.childs != null) {
			this.childs.forEach((dropdownItem) => {
				this.renderer.listen(dropdownItem.elementRef.nativeElement, 'click', (evt) => {
					this.selectedText = (evt.srcElement as HTMLElement).innerText;
				});
			});
		}
		// this.input.openChange.subscribe((isOpen: boolean) => { });
	}

	/**
	 * 关闭下拉框
	 */
	close(): void {
		this.input.close();
	}

	open(): void {
		this.input.open();
	}

	@HostListener('click')
	onClick(): void {
		this.input.open();
	}
}
