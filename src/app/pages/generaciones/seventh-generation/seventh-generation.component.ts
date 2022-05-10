import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-seventh-generation',
  templateUrl: './seventh-generation.component.html',
  styleUrls: ['./seventh-generation.component.scss']
})
export class SeventhGenerationComponent implements OnInit {

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
    this.getPokemonFifthGen();
  }

  getPokemonFifthGen() {

    let pokemonData;

    for (let i = 722; i <= 802; i++) {
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
