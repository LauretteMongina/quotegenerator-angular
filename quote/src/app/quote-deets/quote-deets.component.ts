import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-deets',
  templateUrl: './quote-deets.component.html',
  styleUrls: ['./quote-deets.component.css']
})
export class QuoteDeetsComponent implements OnInit {
  @Input() quoty: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoty.likes+=1;
  }
  downvote(){
    this.quoty.dislikes+=1;
  }
  constructor() { 

  }

  ngOnInit() {
  }

}
