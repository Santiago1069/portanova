import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  description: string = '';
  search: string = '';

  constructor(private router: Router, private portafolioService: PortafolioService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.description = this.activatedRoute.snapshot.params["description"];
    this.getPortafolio(this.description);
  }

  navegarADetalle(id: string) {
    this.router.navigate(['/detalle/' + id]);
  }

  getPortafolio(description: string) {
    this.portafolioService.getPremises(description).subscribe({
      next: (res) => {
        this.premises = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
