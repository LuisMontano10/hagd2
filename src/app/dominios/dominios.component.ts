import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InfoApi } from '@app/models/infoApi.model';
import { DataService } from '@app/services/dominios/data.service';


@Component({
  selector: 'app-dominios',
  templateUrl: './dominios.component.html',
  styleUrls: ['./dominios.component.scss']
})

export class DominiosComponent implements OnInit {

  displayedColumns: string[] = ['API', 'Description', 'Link', 'Category', 'Cors'];
  dataSource = new MatTableDataSource<InfoApi>([]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  constructor(private _entriesService:DataService) { }

  ngOnInit(): void {
  }

  listar(){
    this._entriesService.getEntries().subscribe(
      response =>{
        console.log(response);
        if(response.count>0){
          this.dataSource.data=response.entries
        }

      }
    );

    // this.dataSource.data= [
    //   {
    //     API:'string',
    //     Description:'string',
    //     Link:'string',
    //     Category:'string',
    //     Cors:'string'
        
    //     }
    // ];
  }

}
