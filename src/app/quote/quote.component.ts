import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import{ faCopyright}from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('"If your parents count on you, Dont play the same games with those who count on their parents."',
    'Ja Loka',
    'Ian',
    0,0,
    new Date(2024,5,1)),
    new Quote('"If you think education is expensive, try estimating the cost of ignorance"',
    'Ankur Tyagi',
    'Evans',
    0,0,
    new Date(2019,11,10)),
    new Quote('"It always rains hardest on people who deserve the sun"',
    'J cole',
    'Eric',
    0,0,
    new Date(2012,6,7)),
    new Quote('"Anyone who uses a sugarcane as a walking stick, will one day use it to quench his thirst"',
    'African Quote',
    'Moses',
    0,0,
    new Date(2021,9,12)),
  ];

  addNewQuote(quote: Quote){
    this.quotes.push(quote)
  }

  deleteQuote(isDeleted: any, index: number) {
    if (isDeleted) {
      let remove = confirm(`Are you sure you want to delete this quote?`)
      if (remove) {
        this.quotes.splice(index, 1)
      }
    }
  }

  showDetails(index: number) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  like(upvote: Quote) {
    this.quotes.push(upvote)
  }
  disLike(downvote: Quote) {
    this.quotes.push(downvote)
  }

  getMax(){
    return Math.max(...this.quotes.map(quote => quote.up))
   }

   faCaretSquareDown = faCaretSquareDown;
   faCopyright = faCopyright;

  constructor() { }

  ngOnInit(): void {
  }

}
