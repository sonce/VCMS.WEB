import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as rxop from 'rxjs/operators';
import * as tslib from 'tslib';
import * as shared from 'shared';
import * as bootstrap from '@ng-bootstrap/ng-bootstrap';
import * as ngxtranslate from '@ngx-translate/core';

export const PLUGIN_EXTERNALS_MAP = {
	'ng.core': core,
	'ng.common': common,
	'ng.forms': forms,
	'ng.router': router,
	'ng.bootstrap': bootstrap,
	rxjs,
	'rxjs.operators': rxop,
	tslib,
	ngxtranslate: ngxtranslate,
	// shared: '/assets/plugins/shared.js'
	shared: { ...shared }
};
