import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facility } from 'src/app/models/Facility';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  premises: Array<Facility> = new Array();

  filteredItems: any[] = [];

  constructor(private router: Router, private portafolioService: PortafolioService) {
  }

  ngOnInit(): void {
    this.getPortafolio();
    this.filteredItems = this.premises;
  }

  navegarADetalle(id: string) {
    this.router.navigate(['/detalle/' + id]);
  }

  getPortafolio() {
    this.portafolioService.getPremises().subscribe({
      next: (res) => {
        this.premises = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  filterByCategory(businessType: string) {
    this.filteredItems = this.premises.filter(item => item.businessType === businessType);
  }

}
