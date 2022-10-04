import { Component, OnInit } from '@angular/core';
import { autos } from 'src/app/models/autos';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public MARCA: Array <autos>=[

    {nombre:"PEUGEOT 208 GT", info:"Nuevo estilo tecnológico definido, look deportivo , el Nuevo Peugeot 208 GT es irresistible. Con un diseño de proporciones exactas y con detalles exclusivos que lo convierten en un verdadero GT.",
     fecha:new Date,
     img:"../../../assets/208gtWeb.jpg"},

    {nombre:"SUV PEUGEOT 3008", info:"El nuevo SUV PEUGEOT 3008 tiene un diseño que inspira, elegante y moderno a la vez. El alto nivel de tecnología y equipamiento permiten increibles sensaciones de conducción.",
     fecha:new Date,
    img:"../../../assets/3008Web.jpg"},

    {nombre:"SUV PEUGEOT 5008",
     info:"El vehículo más verstail de Peugeot combinado con un diseño unico. Todos disfrutan de la última tecnología gracias a su tercer fila de asientos, que permite llevar hasta 7 personas a la vez.",
    fecha:new Date,
    img:"../../../assets/5008Web.jpg"}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
