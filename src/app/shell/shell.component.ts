import { Component, OnInit } from '@angular/core';
import { DesignerService } from '@app/@core/services';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(public designerService: DesignerService) {}

  ngOnInit() {}
}
