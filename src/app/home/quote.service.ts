import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from '@app/@core/services';

export interface RandomQuoteContext {
	// The quote's category: 'dev', 'explicit'...
	category: string;
}

@Injectable({
	providedIn: 'root'
})
export class QuoteService {
	constructor(private httpClient: HttpClient, private apiService: ApiService) {}

	getRandomQuote(context: RandomQuoteContext): Observable<string> {
		const params = {};

		Object.keys(context).forEach((key) => {
			params[key] = context[key];
		});

		return this.apiService.get<string>('/random', context);
	}
}
