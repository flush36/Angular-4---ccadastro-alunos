import { Aluno } from './../model/aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {
    
    private alunos: Aluno[] = [
        new Aluno('Fulano', 'fulano@123.com'),
        new Aluno('Beltrano', 'beltrano@123.com')
    ];

    listarTodos() {
        return this.alunos;
    }

    cadastrar(aluno: Aluno) {
        this.alunos.push(aluno);
    }

    atualizar(id: number, aluno: Aluno) {
        this.alunos[id] = aluno;
    }

    excluir(id: number) {
        this.alunos.splice(id, 1);
    }
}