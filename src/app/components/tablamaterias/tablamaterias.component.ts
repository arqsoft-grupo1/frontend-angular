import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { UserService } from "../../servicios/userservice.service";
import { User } from "../../modelo/user";

/**
 * @title Basic menu
 */
@Component({
  selector: 'TablaMaterias',
  templateUrl: 'tablamaterias.component.html',
})
export class TablamateriasComponent {
     displayedColumns = ['id', 'name', 'rol', 'pp'];
     dataSource: ExampleDataSource | null;
     opciones = [
                      {value: 'yacurse', viewValue: 'Ya curse'},
                      {value: 'todaviano', viewValue: 'Todavia no'},
                      {value: 'Elanoproximo', viewValue: 'Proximamente'}
                    ];
     @ViewChild(MdPaginator) paginator: MdPaginator;

     constructor(private userService: UserService) { }

     ngOnInit() {
       //this.dataSource = new ExampleDataSource(data, this.paginator);
       this.userService.getUsers().subscribe(
         usuarios => this.dataSource = new ExampleDataSource(usuarios, this.paginator)
       );
     }
   }

export class ExampleDataSource extends DataSource<any> {
  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

     constructor(public data, private _paginator: MdPaginator) {
       super();
     }

     connect(): Observable<User[]> {
       const displayDataChanges = [
         this.dataChange,
         this._paginator.page,
       ];

       return Observable.merge(...displayDataChanges).map(() => {
         const data = this.data.slice();

         // Grab the page's slice of data.
         const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
         return data.splice(startIndex, this._paginator.pageSize);
       });
     }

     disconnect() {}
   }
