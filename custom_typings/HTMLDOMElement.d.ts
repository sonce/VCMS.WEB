interface Element {
	matchesSelector: (selector: string) => boolean;
	mozMatchesSelector: (selector: string) => boolean;
	msMatchesSelector: (selector: string) => boolean;
	oMatchesSelector: (selector: string) => boolean;
}
interface HTMLElement {
	getParents: (selector: string) => HTMLElement[];
}
