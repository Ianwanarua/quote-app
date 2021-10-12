export class Quote {
    public showQuote?: boolean;
    constructor(
        public quote: string,
        public author: string,
        public name: string,
        public up: number,
        public down: number,
        public completeDate: Date){
            this.showQuote=false;
        }
}
