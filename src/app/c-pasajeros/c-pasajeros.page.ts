import { Component, OnInit, ChangeDetectorRef , NgZone } from '@angular/core';

@Component({
  selector: 'app-c-pasajeros',
  templateUrl: './c-pasajeros.page.html',
  styleUrls: ['./c-pasajeros.page.scss'],
})
export class CPasajerosPage implements OnInit {
  avisoSolicitud: string = ''; 

  constructor(private zone: NgZone, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
  }

  calcularValorViaje(): number {

    return 3500.0;
  }

  solicitarViaje() {
    const fecha = new Date();
    const horaActual = fecha.toLocaleTimeString();

    const valorViaje = this.calcularValorViaje(); 

  
    this.avisoSolicitud = `Solicitud de viaje aceptada, se avisara al pasajero.`;
    this.changeDetector.detectChanges();
  }


}
