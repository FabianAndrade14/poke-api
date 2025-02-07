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

    const requests = [];

    for (let i = 252; i <= 386; i++) {
      requests.push( this.pokeService.getPokemons(i).toPromise().then((res) => ({
        position: i,
        image: res.sprites.front_default,
        name: res.name,
      })));
    }

      Promise.all(requests).then((pokemonList) => {
        this.data = pokemonList.sort((a, b) => a.position - b.position);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      })
      .catch((err) => console.log(err));
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
