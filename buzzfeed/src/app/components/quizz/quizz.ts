import { Component, OnInit } from '@angular/core';
import QuizzService  from '../../data/quizz_questions.json';
@Component({
  selector: 'app-quizz',
  imports: [],
  templateUrl: './quizz.html',
  styleUrl: './quizz.css',
})
export class Quizz implements OnInit{

  title: string = "Escolha: Você é um Jedi ou um Sith?";
  subtitle: string = "Responda as perguntas e descubra de qual lado da força você esta.";
  //seleciona as perguntas
  questions: any;
  questionsSelected: any;
  // armazena as respostas
  answers: string[] = [];
  answersSelected: string = '';
  // armazena o resultado
  questionsIndex: number = 0;
  questionsMaxIndex: number = 0;
  // finaaliza o quizz
  finished: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(QuizzService){
      this.finished = false;
      this.title = QuizzService.title;
     /* this.questions = QuizzService;
      this.questionsSelected = this.questions[this.questionsIndex];
      this.questionsMaxIndex = this.questions.length; */
    }
  }
}
