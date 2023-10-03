import { Injectable } from '@angular/core';
import { Facility } from '../models/Facility';
import { Observable, of, throwError } from 'rxjs';
import { Categories } from '../models/Categories';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  private premises: Array<Facility> = [

    { locationNumber: 'local 1001', name: 'Frisby', description: 'Restaurante con mas de 20 años de experiencia', businessType: 'restaurante', locatedFloor: '1', openingHours: '11:00 - 23:00', phoneNumber: '123456789', webPage: 'https://frisby.com.co/', image1: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Tienda_Frisby_Suba%2C_Bogot%C3%A1.jpg', image2: 'https://www.institucionalcolombia.com/wp-content/uploads/2019/09/Caso-Frisby.jpg', image3: 'https://10619-2.s.cdn12.com/rests/original/110_506383782.jpg', logo: 'https://primaveraurbana.co/wp-content/uploads/2022/06/frisby_-1.jpg', whasApp: '345345345', facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/' },

    { locationNumber: 'local 1002', name: 'Papel a todo', description: 'Restaurante con mas de 20 años de experiencia', businessType: 'papeleria', locatedFloor: '1', openingHours: '11:00 - 23:00', phoneNumber: '123456789', webPage: 'www.frisby.com', image1: 'assets/images/frisby1.jpg', image2: 'assets/images/frisby2.jpg', image3: 'assets/images/frisby3.jpg', logo: 'assets/images/frisby-logo.jpg', whasApp: 'https://web.whatsapp.com/', facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/' },

    { locationNumber: 'local 1003', name: 'Papeleria', description: 'Restaurante con mas de 20 años de experiencia', businessType: 'papeleria', locatedFloor: '1', openingHours: '11:00 - 23:00', phoneNumber: '123456789', webPage: 'www.frisby.com', image1: 'assets/images/frisby1.jpg', image2: 'assets/images/frisby2.jpg', image3: 'assets/images/frisby3.jpg', logo: 'assets/images/frisby-logo.jpg', whasApp: 'https://web.whatsapp.com/', facebook: 'https://www.facebook.com/', instagram: 'https://www.instagram.com/' },
  ];

  categories: Array<Categories> = [
    {id: '1', description: 'restaurante'},
    {id: '2', description: 'papeleria'},
  ];

  constructor() { }

  getPremises(description: string): Observable<Array<Facility>> {
    return of(this.premises.filter(instalacion => instalacion.businessType === description));
  }

  getFacility(id: string): Observable<Facility> {
    const result = this.premises.find(facility => facility.locationNumber === id);
    if (result) {
      return of(result);
    } else {
      return throwError(() => new Error('Facility not found'));
    }
  }

  getCategories(): Observable<Array<Categories>> {
    return of(this.categories);
  }

}
