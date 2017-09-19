import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
/**
 * @title Basic menu
 */
@Component({
  selector: 'TablaMaterias',
  templateUrl: 'tablamaterias.component.html',
})
export class TablamateriasComponent {
    displayedColumns = ['id', 'name', 'rol', 'pp'];
     exampleDatabase = new ExampleDatabase();
     dataSource: ExampleDataSource | null;
      foods = [
                      {value: 'steak-0', viewValue: 'Steak'},
                      {value: 'pizza-1', viewValue: 'Pizza'},
                      {value: 'tacos-2', viewValue: 'Tacos'}
                    ];
     @ViewChild(MdPaginator) paginator: MdPaginator;

     ngOnInit() {
       this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
     }
   }


   export interface UserData {
     id: string;
     name: string;
     rol: string;
   }

   /** An example database that the data source uses to retrieve data for the table. */
   export class ExampleDatabase {
     /** Stream that emits whenever the data has been modified. */
     dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
     get data(): UserData[] { return this.dataChange.value; }
     datos;
     constructor() {

      // Esta variable this.datos tiene que contener los datos de cosas que quieren
      // mostrarse-
      this.datos = [
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 1, name: 'Martin', rol: 'Empleado'},
          {id: 2, name: 'Leandro', rol: 'Empleado'},
          {id: 3, name: 'Hernan ', rol: 'Empleado'}
        ];
        this.dataChange.next(this.datos);
     }
   }

   /**
    * Data source to provide what data should be rendered in the table. Note that the data source
    * can retrieve its data in any way. In this case, the data source is provided a reference
    * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
    * the underlying data. Instead, it only needs to take the data and send the table exactly what
    * should be rendered.
    */
   export class ExampleDataSource extends DataSource<any> {
     constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
       super();
     }

     /** Connect function called by the table to retrieve one stream containing the data to render. */
     connect(): Observable<UserData[]> {
       const displayDataChanges = [
         this._exampleDatabase.dataChange,
         this._paginator.page,
       ];

       return Observable.merge(...displayDataChanges).map(() => {
         const data = this._exampleDatabase.data.slice();

         // Grab the page's slice of data.
         const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
         return data.splice(startIndex, this._paginator.pageSize);
       });
     }

     disconnect() {}
   }
