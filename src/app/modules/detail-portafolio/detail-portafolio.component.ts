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
  facilityNotFound: Facility = {
    locationNumber: 'Numero de local no encontrado',
    name: 'Nombre de local no encontrado',
    description: 'Descripcion de local no encontrado',
    businessType: 'Tipo de negocio de local no encontrado',
    locatedFloor: 'Piso de local no encontrado',
    openingHours: 'Horario de local no encontrado',
    phoneNumber: '00000000',
    webPage: 'https://www.google.com/',
    image1: 'Imagen de local no encontrado',
    image2: 'Imagen de local no encontrado',
    image3: 'Imagen de local no encontrado',
    logo: 'Logo de local no encontrado',
    whasApp: 'https://web.whatsapp.com/',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/'
  }

  constructor(private portafolioService: PortafolioService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    this.getFacility(id);
  }
  
  getFacility(id:string){
    this.portafolioService.getFacility(id).subscribe({
      next: (res) => {
        this.facility = res;
      },
      error: (err) => {
        this.facility = this.facilityNotFound;
      }
    })
  }

}
