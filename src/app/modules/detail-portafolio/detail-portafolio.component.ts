import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facility } from 'src/app/models/Facility';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-detail-portafolio',
  templateUrl: './detail-portafolio.component.html',
  styleUrls: ['./detail-portafolio.component.css']
})
export class DetailPortafolioComponent implements OnInit {

  facility: Facility = new Facility();

  constructor(private portafolioService: PortafolioService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.getFacility(id);
  }
  
  getFacility(id:string){
    this.portafolioService.getFacility(id).subscribe({
      next: (res) => {
        this.facility = res
      },
      error: (err) => {
        // redirigir a 404
      }
    })
  }

}
