import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Sisco','Sisco','I am no bird and no net ensnares me, I am a free human being with an independent will.','Jane Eyre', new Date(2021,2,21),0,0),
    new Quote (2,'Wendy','Wendy','You cant go around being whatevers necessary, you have got to have some conviction and I am convinced I do not want to be anyones underdog.','Tsitsi',new Date(2021,7,9),0,0),
    new Quote (3,'Shee','Shee','Stories are critical, the minute we fall silent, someone will fill the silence for us.','Jennifer Makumbi',new Date(2021,5,10),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Do you really want to delete this quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
