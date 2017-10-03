import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatTableModule,
  MatSelectModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule

  ]
})
export class MaterialModule {}
