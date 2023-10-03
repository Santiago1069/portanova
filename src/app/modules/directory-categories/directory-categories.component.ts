import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/Categories';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-directory-categories',
  templateUrl: './directory-categories.component.html',
  styleUrls: ['./directory-categories.component.css']
})
export class DirectoryCategoriesComponent implements OnInit {

  categories: Array<Categories> = new Array();

  constructor(private portafolioService: PortafolioService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.portafolioService.getCategories().subscribe({
      next: (res) => {
        this.categories = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  navegarAPortafolio(description: string) {
    this.router.navigate(['/categoria/' + description]);
  }


}
