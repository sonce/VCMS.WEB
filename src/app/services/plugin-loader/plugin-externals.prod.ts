import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as shared from 'shared';

export const PLUGIN_EXTERNALS_MAP = {
	'ng.core': core,
	'ng.common': common,
	'ng.forms': forms,
	'ng.router': router,
	rxjs,
	tslib,
	shared: { ...shared }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
declare let require: any;