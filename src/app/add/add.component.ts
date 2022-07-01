import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatoService } from './services/dato.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  createDato: FormGroup;
  submitted = false;
  id : string | null;
  titulo = 'Campo nuevo'

  constructor(private fb: FormBuilder, 
    private _datoService: DatoService,
    private router: Router,
    private aRoute : ActivatedRoute) { 
    this.createDato=this.fb.group({
      clogico: ['', [Validators.required, Validators.maxLength(255)]],
      aplicativo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarDato(){
    this.submitted = true;

    if(this.createDato.invalid){
      return;
    }

    if(this.id === null){
      this.agregarDato();
    }else[
      this.editarDato(this.id)
    ]

  }

  agregarDato(){
    const dato: any={
      clogico: this.createDato.value.clogico,
      aplicativo: this.createDato.value.aplicativo,
      descripcion: this.createDato.value.descripcion,
      fechaCreacion: new Date(),
      fechaUpdate : new Date()
    }
    this._datoService.agregarDato(dato).then(()=>{

      
      this.router.navigate(['/database']);

    }).catch(error =>{
      console.log(error);
    })


  }

  editarDato(id: string){
    const dato: any={
      clogico: this.createDato.value.clogico,
      aplicativo: this.createDato.value.aplicativo,
      descripcion: this.createDato.value.descripcion,
      fechaUpdate : new Date()
    }
    this._datoService.actualizarDato(id, dato).then(()=>{
      this.router.navigate(['/database']);
      
    })

  }

  esEditar(){
    

    if(this.id !==null){
      this.titulo = 'Editar campo'

      this._datoService.getDato(this.id).subscribe(data => {
        this.createDato.setValue({
          clogico: data.payload.data()['clogico'],
          aplicativo: data.payload.data()['aplicativo'],
          descripcion: data.payload.data()['descripcion'],
        })

      })
    }
  }

}
