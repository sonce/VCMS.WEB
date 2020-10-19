import {
	Component,
	OnInit,
	Input,
	ContentChildren,
	QueryList,
	AfterViewInit,
	OnDestroy,
	ChangeDetectorRef,
	EventEmitter,
	Output
} from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { RadiogroupItemComponent } from './radiogroupitem.component';
import { map, takeUntil } from 'rxjs/operators';

type RadiogroupSkin = 'bg' | 'bg-radius' | 'bottomline';
@Component({
	selector: 'v-radiogroup',
	template: `
		<div
			class="btn-group btn-group-toggle radio-toggle-group d-flex"
			[ngClass]="classes"
			data-toggle="buttons"
			*ngIf="isInit"
		>
			<ng-template
				*ngFor="let r of radios; let i = index"
				[ngTemplateOutlet]="r.childComponentTemplate"
				[ngTemplateOutletContext]="{ $implicit: { name: name, value: value } }"
			>
			</ng-template>
		</div>
	`,
	styleUrls: ['./radiogroup.component.scss']
})
export class RadiogroupComponent implements OnInit, AfterViewInit, OnDestroy {
	@Output() public toggleCheck: EventEmitter<unknown> = new EventEmitter();

	@ContentChildren(RadiogroupItemComponent) radios: QueryList<RadiogroupItemComponent> = null;

	@Input() name: string;
	@Input() value: unknown;

	@Input() set skin(val: RadiogroupSkin) {
		this.skinObservable.next(val);
	}
	get skin(): RadiogroupSkin {
		return this.skinObservable.value;
	}
	private skinObservable = new BehaviorSubject<RadiogroupSkin>('bg');
	classes: string[];
	/**
	 * Unsubscribe from spinner's observable
	 *
	 * @memberof NgxSpinnerComponent
	 **/
	ngUnsubscribe: Subject<void> = new Subject();

	isInit = false;
	constructor(private changeDetector: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.getClasses()
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe((x: string[]) => {
				this.classes = x;
				this.changeDetector.markForCheck();
			});
	}

	ngAfterViewInit(): void {
		Promise.resolve(null).then(() => (this.isInit = true));
		this.radios.forEach((x) => x.toggleCheck.subscribe(this.onToggleCheck.bind(this)));
	}

	private getClasses(): Observable<string[]> {
		return this.skinObservable.asObservable().pipe(map((x) => x.split('-')));
	}

	onToggleCheck(data: { groupItem: RadiogroupItemComponent; value: unknown }): void {
		this.value = data.value;
		this.toggleCheck.emit(this.value);
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
