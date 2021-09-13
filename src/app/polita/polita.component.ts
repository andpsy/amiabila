import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Polita, Polite } from '../entities';
import { CommonFunctions } from '../commonfunctions';

@Component({
  selector: 'app-polita',
  templateUrl: './polita.component.html',
  styleUrls: ['./polita.component.css']
})
export class PolitaComponent implements OnInit {
  public p: Polita = new Polita();
  constructor( 
    public dialogRef: MatDialogRef<PolitaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Polita) { }

  ngOnInit(): void {
  }

  findPolita(){
    if(this.data.Numar.length >= 3){
      var ps = new Polite();
      this.p = ps.findPolita(this.data.Numar);
      if(this.p != null)
        this.data = this.p;
    }
  }

  preluarePolita(){
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

}
