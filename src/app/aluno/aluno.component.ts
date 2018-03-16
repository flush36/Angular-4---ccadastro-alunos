import { Component, OnInit } from '@angular/core';
import { Aluno } from './../model/aluno';
import { AlunoService } from './../services/aluno-service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  private alunos: Aluno[];
  private aluno: Aluno;
  private idEditar: number;

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.aluno = new Aluno();
    this.idEditar = -1;
    this.alunos = this.alunoService.listarTodos();
  }

  cadastrar() {
    this.alunoService.cadastrar(this.aluno);
    this.aluno = new Aluno('', '');
  }

  editar(id: number) {
		this.idEditar = id;
		this.aluno = new Aluno(this.alunos[id].nome , this.alunos[id].email);
	}

  atualizar() {
    this.alunoService.atualizar(this.idEditar, this.aluno);
    this.aluno = new Aluno('','');
    this.idEditar = -1;
  }

  excluir(id: number) {
    this.alunoService.excluir(id);
    this.idEditar = -1;
  }

}
