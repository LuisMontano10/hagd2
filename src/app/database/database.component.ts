import { Component, OnInit } from '@angular/core';
import { DatoService } from '@app/add/services/dato.service';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})

export class DatabaseComponent implements OnInit {
  datos : any [] = [];

  constructor(private _datoService:DatoService) { }

  ngOnInit(): void {
    this.getDatos()
  }

  getDatos(){
  this._datoService.getDatos().subscribe(data => {
    this.datos=[];
    data.forEach((element:any) => {
      this.datos.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()

      })
    });
    console.log(this.datos);
  

  });


  }

  eliminarDatos(id:string){

    this._datoService.eliminarDato(id).then(() =>{
      console.log('borrado')
    }).catch(error => {
      console.log('error')
    })
  }

}