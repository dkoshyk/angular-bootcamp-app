import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'boot-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddNewProductComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any){ }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
