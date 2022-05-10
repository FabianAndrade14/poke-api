import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-third-generation',
  templateUrl: './third-generation.component.html',
  styleUrls: ['./third-generation.component.scss']
})
export class ThirdGenerationComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];

  data: any[] = [];

  dataSource = new MatTableDataSource<any>(this.data);

  pokemons = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;

  constructor(
    private pokeService: PokemonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPokemonThirdGen();
  }

  getPokemonThirdGen() {

    let pokemonData;

    for (let i = 252; i <= 386; i++) {
      this.pokeService.getPokemons(i).subscribe( res => {
        pokemonData = {
          position: i,
          image: res.sprites.front_default,
          name: res.name,
        };
        this.data.push(pokemonData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      })
    }
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if ( this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
    }

  }

  getRow(row: any) {
    this.router.navigateByUrl(`pokeDetail/${row.position}`);
  }

}
