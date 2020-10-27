import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'any'
})
export class TestService {
	constructor() {
		console.log('Test service constructor');
		this.Message = 'aaa';
	}
	Message: string;
	HelloWorld(): void {
		console.log(this.Message);
	}
}
