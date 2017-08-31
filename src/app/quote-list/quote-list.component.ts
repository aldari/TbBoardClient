import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from './category.model';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  public quotes: Quote[];
  public categories: Category[];
  public selectedCategory: Category = new Category('', '');
  private filterAuthor: string;
  @ViewChild('filterForm') filterForm: NgForm;

  constructor(private quoteService: QuoteService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getQuotes();
    this.getCategories();
  }

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe(
      quotes => this.quotes = quotes,
      err => {
           console.log(err);
       }
    );
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories,
      err => {
           console.log(err);
       }
    );
  }

  onDelete(id: string, i: number) {
    this.quoteService.delete(id).subscribe(
      () => {this.quotes.splice(i, 1);},
      err => {
           console.log(err);
       }
    );
  }

  onFilter(authorFilter: string) {
    this.quoteService.getQuotes2(authorFilter, this.selectedCategory.id).subscribe(
      quotes => this.quotes = quotes,
      err => {
           console.log(err);
      }
    );
  }

  onClear() {
    this.filterForm.resetForm();
    this.selectedCategory = new Category('', '');
  }
}
