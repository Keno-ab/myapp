import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-disponible',
  templateUrl: './disponible.page.html',
  styleUrls: ['./disponible.page.scss'],
})
export class DisponiblePage implements OnInit {
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

  
    this.avisoSolicitud = `Solicitud de viaje a las ${horaActual} horas con un valor de $${valorViaje.toFixed(2)} CLP`;
    this.changeDetector.detectChanges();
  }
}