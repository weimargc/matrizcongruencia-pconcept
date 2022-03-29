import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fav: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fav: "Yes" },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', fav: "" },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', fav: "" },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', fav: "" },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', fav: "Yes" },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', fav: "" },

];

@Component({
  selector: 'app-matriz-congruencia',
  templateUrl: './matriz-congruencia.component.html',
  styleUrls: ['./matriz-congruencia.component.css']
})
export class MatrizCongruenciaComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'fav'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  buttonClick()
{
   console.dir(this.dataSource.data);
}
  constructor() { }

  ngOnInit(): void {
  }



}
