import { Component, Input, ViewEncapsulation, TemplateRef, OnInit, ViewChild, ContentChild, HostListener, ElementRef, AfterViewInit, Renderer2, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { SitePageService } from '@app/@core/services';
import { SitePage, SitePageType } from '@app/@core/models';
import { TreeNode, TreeModel, TreeComponent, TreeViewportComponent, TREE_ACTIONS, ITreeOptions } from '@circlon/angular-tree-component';
import _ from 'lodash-es';
import { VDropdownComponent } from '@app/@shared';
import { NgbPopover, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sitepages-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sitePagesDropdown.component.scss'],
  template: `
  <v-dropdown [selectedText]="!currentPage?undefined:currentPage.name" [autoClose]="false">
  <ngx-bootstrap-spinner [fullScreen]="false" [name]="dropdownpagesLoader"></ngx-bootstrap-spinner>
          <tree-root [nodes]="nodes" [options]="options" (activate)="onPageActive($event)">
            <ng-template #treeNodeWrapperTemplate let-node="node" let-index="index">
              <ng-container *ngIf="convetToTreeNode(node) as toTreeNode">
                <div class="node-wrapper align-items-center" [style.padding-left]="toTreeNode.getNodePadding()">
                  <tree-node-expander class="text-primary" [node]="node"></tree-node-expander>
                  <div class="node-content-wrapper d-flex align-items-center"
                    [class.node-content-wrapper-active]="toTreeNode.isActive"
                    [class.node-content-wrapper-focused]="toTreeNode.isFocused"
                    (click)="toTreeNode.mouseAction('click', $event)"
                    (dblclick)="toTreeNode.mouseAction('dblClick', $event)"
                    (contextmenu)="toTreeNode.mouseAction('contextMenu', $event)"
                    (treeDrop)="toTreeNode.onDrop($event)"
                    [treeAllowDrop]="toTreeNode.allowDrop" [treeDrag]="node" [treeDragEnabled]="toTreeNode.allowDrag()">
                    <ng-container *ngIf="convertToSitePage(toTreeNode.data) as toSitePage">
                        <form *ngIf="Editable&&currentChangeNamePageId==toSitePage.id" class="w-100 needs-validation" (ngSubmit)="saveName(toSitePage)" [formGroup]="changeNameForm" novalidate>
                          <div class="input-group">
                            <input [ngModel]="toSitePage.name"
                            (keydown.esc)="cancelChangeName()"
                            #txtChangeName click-stop-propagation autofocus type="text"
                            formControlName="pageName"
                            class="form-control  form-control-sm"
                            [placeholder]="'PageName' | translate" autocomplete="off"
                            required />
                            <div class="invalid-tooltip">
                              {{'Please choose a pagename'|translate}}
                            </div>
                            <span class="input-group-btn">
                                <button type="button" type="submit" [disabled]="changeNameForm.invalid" click-stop-propagation class="btn btn-primary btn-sm">
                                    <i class="fa fa-save"></i>
                                  <ngx-bootstrap-spinner size="small" [name]="changePagenameLoader"></ngx-bootstrap-spinner>
                                </button>
                            </span>
                          </div>
                        </form>
                      <ng-container *ngIf="currentChangeNamePageId!=toSitePage.id">
                        <div>
                          <i [hidden]="!Editable" class="iconfont icon-drag_and_drop symbol-dragPage"></i>
                          <i class="iconfont symbol"
                          [class.icon-home]="toSitePage.IsHomePage"
                          [class.icon-link]="toSitePage.PageType == SitePageType.URL"
                          [class.icon-anchor]="toSitePage.PageType == SitePageType.Anchor"
                          [class.icon-positiontop]="toSitePage.PageType == SitePageType.Position"
                          [class.icon-email]="toSitePage.PageType == SitePageType.MailTo"
                          [class.icon-tel]="toSitePage.PageType == SitePageType.Tel"
                          [class.icon-folder]="toSitePage.PageType == SitePageType.Folder"
                          [class.icon-page]="toSitePage.PageType == SitePageType.Page"></i>
                        </div>
                        <div>
                          <tree-node-content [node]="node" [index]="index" class="text-info"></tree-node-content>
                        </div>
                        <div class="ml-auto" *ngIf="Editable">
                          <i
                          [class.iconfont]="toSitePage.Hidden===true"
                          [class.icon-ico-hidden]="toSitePage.Hidden===true"></i>
                          <button class="btn btn-default context-menu-button btn-circle text-primary"
                          placement="right" container="body" [ngbPopover]="popContent"
                          triggers="manual" #p="ngbPopover" click-stop-propagation (click)="openContextMenu(p,toSitePage)"
                          (shown)="toggleContextMenu(p)" (hidden)="toggleContextMenu(p)">
                            <i class="iconfont icon-menu"></i>
                          </button>
                        </div>
                      </ng-container>
                    </ng-container>
                  </div>
                </div>
              </ng-container>
            </ng-template>
          </tree-root>
          <div class="dropdownfooter d-flex justify-content-center">
            <button type="button" class="btn btn-primary btn-rounded mr-2">
              <i class="iconfont icon-add1"></i>{{'New Page'|translate}}
            </button>
            <button type="button" class="btn btn-default btn-circle mr-2">
              <i class="iconfont icon-link"></i>
            </button>
            <button type="button" class="btn btn-default btn-circle">
              <i class="iconfont icon-folder"></i>
            </button>
          </div>
        </v-dropdown>
        <ng-template #popContent let-sitePage="sitePage">
        <app-multilevelnav *ngIf="convertToSitePage(sitePage) as toSitePage" [isVertical]="true" [noBorder]="false" [item]="toSitePage">
                          <ng-template multiLevelNavItem [visible]="true" [subMenu]="sss">
                            <i class="iconfont icon-seo"></i>
                            <span>{{'SEO Optimization'}}</span>
                          </ng-template>
                          <app-multilevelnavchild #sss>
                            <ng-template multiLevelNavItem>
                              <i class="iconfont icon-setting"></i>
                              <span>{{'Setting'|translate}}</span>
                            </ng-template>
                          </app-multilevelnavchild>
                          <ng-template multiLevelNavItem>
                            <i class="iconfont icon-setting"></i>
                            <span>{{'Setting'|translate}}</span>
                          </ng-template>
                          <ng-template multiLevelNavItem (execute)="setToHomePage(toSitePage)" [visible]="!toSitePage.IsHomePage&&toSitePage.PageType == SitePageType.Page">
                            <i class="iconfont icon-home"></i>
                            <span>{{'Set to Homepage'|translate}}</span>
                          </ng-template>
                          <ng-template multiLevelNavItem [divider]="true"></ng-template>
                          <ng-template multiLevelNavItem (execute)="delPage(toSitePage)">
                            <i class="iconfont icon-del"></i>
                            <span>{{'Del'|translate}}</span>
                          </ng-template>
                          <ng-template multiLevelNavItem (execute)="toggleVisible(toSitePage);">
                            <i class="iconfont" [ngClass]="toSitePage.Hidden?'icon-showviewvisible':'icon-ico-hidden'"></i>
                            <span>{{(toSitePage.Hidden?'Show':'Hide')|translate}}</span>
                          </ng-template>
                          <ng-template multiLevelNavItem (execute)="setInChangeNameMode($event)">
                            <i class="iconfont icon-rename"></i>
                            <span>{{'Rename'|translate}}</span>
                          </ng-template>
                          <ng-template multiLevelNavItem [divider]="true" [visible]="levelUPVisible(sitePage)||levelDownVisible(sitePage)"></ng-template>
                          <ng-template multiLevelNavItem [visible]="levelUPVisible(sitePage)">
                            <i class="iconfont icon-level-up"></i>
                            <span>{{'Up Level'|translate}}</span>
                          </ng-template>
                          <ng-template multiLevelNavItem [visible]="levelDownVisible(sitePage)">
                            <i class="iconfont icon-leveldown"></i>
                            <span>{{'Down Level'|translate}}</span>
                          </ng-template>
                        </app-multilevelnav>
        </ng-template>
  `,
})
export class SitePagesDropdownComponent implements OnInit {
  @ViewChild(VDropdownComponent) private vdropdown: VDropdownComponent;
  @ViewChild(TreeComponent) private tree: TreeComponent;
  @ContentChild(TreeViewportComponent, { static: false })
  private treeviewPort: TreeViewportComponent;

  @Input() Editable: boolean = false;
  @Input() SelectedPageId: string;
  /** 当前页面 */
  currentPage: SitePage;

  /**
   * 当选择改变的时候
   */
  @Output() OnSelectChange = new EventEmitter<SitePage>();

  //所有的页面
  nodes: SitePage[];
  SitePageType = SitePageType;
  dropdownpagesLoader: string = "dropdownpagesLoader";
  changePagenameLoader: string = "changePagenameLoader";
  private timer: NodeJS.Timeout;
  private delay = 200;
  private prevent = false;
  // @ts-ignore: Unreachable code error
  options: ITreeOptions = {
    allowDrag: (node: TreeNode) => {
      if (this.Editable) {
        if (_.isNil(this.currentChangeNamePageId))
          return true;
        return (node.data as SitePage).id != this.currentChangeNamePageId;
      }
      else
        return false;
    },
    allowDrop: (element: TreeNode, t: { parent: TreeNode, index: number }) => {
      if (element.id != t.parent.id) {
        // let currentData = element.data as SitePage;
        if (t.parent.data instanceof SitePage) {
          let toData = t.parent.data as SitePage;
          if (toData.ParentId != "0")
            return false;
        }
        return true;
      }
      else
        return false;
    },
    actionMapping: {
      mouse: {
        drop: (tree: TreeModel, node: TreeNode, $event: DragEvent, info: { from: TreeNode, to: { dropOnNode: boolean, index: number, parent: TreeNode } }) => {
          this.spinner.show(this.dropdownpagesLoader);
          setTimeout(() => {
            if (info.from.parent == info.to.parent && info.from.index < info.to.index)
              info.to.index -= 1;

            let currentPage = info.from.data as SitePage;
            let oldParent = info.from.parent.data as SitePage;
            let newParent = info.to.parent.data as SitePage;

            //从原集合中移除
            oldParent.children.splice(oldParent.children.indexOf(currentPage), 1);
            if (_.has(newParent, "virtual")) {
              currentPage.ParentId = "";
              currentPage.ParentPage = undefined;
            }
            else {
              currentPage.ParentId = newParent.id;
              currentPage.ParentPage = newParent;
            }

            //插入新集合中
            newParent.children.splice(info.to.index, 0, currentPage);
            tree.update();
            this.spinner.hide(this.dropdownpagesLoader);
          }, 1000);

        },
        dblClick: (tree: TreeModel, node: TreeNode, $event: MouseEvent) => {
          if (this.Editable) {
            clearTimeout(this.timer);
            this.prevent = true;
            this.currentChangeNamePageId = (node.data as SitePage).id;
          }
        },
        click: (tree: TreeModel, node: TreeNode, $event: MouseEvent) => {
          this.timer = setTimeout(function (this: SitePagesDropdownComponent) {
            if (!this.prevent) {
              $event.shiftKey
                ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
                : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
              this.vdropdown.close();
            }
            this.prevent = false;
          }.bind(this), this.delay);
        }
      }
    }
  }

  constructor(private sitepageService: SitePageService,
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.spinner.show(this.dropdownpagesLoader);
    this.sitepageService.getPagesTree().subscribe(data => {
      this.nodes = data;
      this.spinner.hide(this.dropdownpagesLoader);
    })
    if (!_.isNil(this.SelectedPageId))
      this.sitepageService.AllPages.subscribe(x => this.currentPage = x.find(p => p.id == this.SelectedPageId));
  }

  onPageActive(event: { eventName: string, node: TreeNode, treeModel: TreeModel }) {
    this.currentPage = event.node.data as SitePage;
    this.SelectedPageId = this.currentPage.id;
    this.OnSelectChange.emit(this.currentPage);
  }

  openContextMenu(popover: NgbPopover, toSitePage: SitePage) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({ sitePage: toSitePage });
    }
  }

  /** 是否已经的打开菜单 */
  private isOpenContextMenu = false;
  toggleContextMenu(p: NgbPopover) {
    this.isOpenContextMenu = p.isOpen();
  }

  setToHomePage(sitePage: SitePage) {
    this.sitepageService.updateHomePage(sitePage);
  }

  /**
   * 删除页面
   */
  delPage(sitePage: SitePage) {
    this.spinner.show(this.changePagenameLoader);
    setTimeout(() => {
      let parentChilds;
      if (_.isNil(sitePage.ParentPage))
        parentChilds = this.nodes;
      else
        parentChilds = sitePage.ParentPage.children;
      let delIndex = parentChilds.indexOf(sitePage);
      parentChilds.splice(delIndex, 1);
      this.tree.treeModel.update();
      this.spinner.hide(this.changePagenameLoader);
    }, 1000);
  }

  /**
   * 修改页面是否可见
   */
  toggleVisible(sitePage: SitePage) {
    this.spinner.show(this.dropdownpagesLoader);
    setTimeout(() => {
      sitePage.Hidden = !sitePage.Hidden;
      this.spinner.hide(this.dropdownpagesLoader);
    }, 1000);
  }

  //#region 修改名字
  changeNameForm!: FormGroup;
  private createForm() {
    this.changeNameForm = this.formBuilder.group({
      pageName: ['', Validators.required]
    });
  }

  /** 当前正在编辑的名字 */
  public currentChangeNamePageId: string;
  setInChangeNameMode(value: { event: MouseEvent | Event, item: SitePage }) {
    this.currentChangeNamePageId = value.item.id;
  }
  cancelChangeName() {
    this.currentChangeNamePageId = undefined;
  }
  /** 修改名字LOADING */
  saveName(toTreeNode: SitePage) {
    if (toTreeNode.name == this.changeNameForm.value.pageName) {
      this.currentChangeNamePageId = undefined;
      return;
    }
    this.spinner.show(this.changePagenameLoader);
    setTimeout(() => {
      toTreeNode.name = this.changeNameForm.value.pageName;
      this.currentChangeNamePageId = undefined;
      this.spinner.hide(this.changePagenameLoader);
    }, 1000);
  }
  //#endregion

  @HostListener('mouseleave')
  private onMouseOut(event: MouseEvent) {
    if (this.vdropdown.IsOpen && !this.isOpenContextMenu)
      this.vdropdown.close();
  }

  //#region 菜单的操作
  levelUPVisible(data: SitePage) {
    return false;
    //顶级，不能往上
    if (_.isNil(data.ParentPage))
      return false;
    return true;
  }
  levelDownVisible(data: SitePage) {
    return false;
    //在第二级，最多2级，所以不能往下
    if (!_.isNil(data.ParentPage))
      return false;
    //有子页面，不能往下
    if (!_.isNil(data.children) && data.children.length > 0)
      return false;
    return true;
  }
  //#endregion

  //#region 数据类型转换
  convetToTreeNode = (fromObj: any): TreeNode => fromObj as TreeNode;
  convertToSitePage = (fromObj: any): SitePage => fromObj as SitePage;
  //#endregion
}
