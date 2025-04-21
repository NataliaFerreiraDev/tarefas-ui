import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Categoria } from '../../_models/categoria';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export const CATEGORY_DATA = [
  {nome: 'Trabalho', id: 'aaa-bbb-ccc' },
  {nome: 'Exames', id: 'aaa-bbb-ccc' },
  {nome: 'Consultas', id: 'aaa-bbb-ccc' },
  {nome: 'Mercado', id: 'aaa-bbb-ccc' },
  {nome: 'Outras', id: 'aaa-bbb-ccc' }
];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIcon,
    MatTableModule,
    RouterModule
  ],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  displayedColumns: string[] = ['id', 'nome', 'actions'];
  public dataSource: Categoria[] = CATEGORY_DATA;

  public createNewCategory(){
    console.log("Criar Categoria");
  }

  public editCategory(categoria : Categoria){
    console.log("Editar Categoria" + categoria.id);
  }

  public deleteCategory(categoria : Categoria){
    console.log("Deletar Categoria" + categoria.id);
  }

} 
