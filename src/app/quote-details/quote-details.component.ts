import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from '../quote';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  like: number;
  disLike: number;

  constructor() { 
    this.like = 0;
    this.disLike = 0;
  }
  @Input() quote!: Quote;
  @Output() isDeleted = new EventEmitter<boolean>();

  deleteQuote(read: boolean) {
    this.isDeleted.emit(read);
  }
  // like(index: { upvote: number; }) {
  //   index.upvote += 1;  
  // }
  // disLike(index: { downvote: number; }) {
  //   index.downvote += 1;
  // }

  voteUp(): boolean {
    this.like += 1;
    return false;
  }

  voteDown(): boolean {
    this.disLike += 1;
    return false;
  }

  
  faTrash = faTrash;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  
  ngOnInit(): void {
  }

}
