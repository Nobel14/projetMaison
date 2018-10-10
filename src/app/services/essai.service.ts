import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Essai } from '../models/Essai';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EssaiService {
essaiCollection: AngularFirestoreCollection<Essai>;
essai: Observable<Essai[]>;
  constructor(public afs: AngularFirestore) { 
    this.essai = this.afs.collection('essai').valueChanges();
  }
  getEssai(){
    return this.essai;
  }
}

export interface Essai{
  address?:string;
  bedroom?:number;
  entrydate?:string;
  housetype?:string;
  kitchentype?:string;
  room?:number;
  surface?:number;
}


