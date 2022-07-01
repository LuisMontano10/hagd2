import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoService {
  

  constructor(private firestore: AngularFirestore) { }

  agregarDato(dato:any): Promise<any> {
    return this.firestore.collection('datos').add(dato);

  }
  getDatos():Observable<any>{

    return this.firestore.collection('datos', ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  eliminarDato(id:string): Promise<any>{

    return this.firestore.collection('datos').doc(id).delete();
  }

  getDato(id: string): Observable<any>{

    return this.firestore.collection('datos').doc(id).snapshotChanges();
  }

  actualizarDato(id: string, data:any): Promise<any>{
    return this.firestore.collection('datos').doc(id).update(data);

  }
}
