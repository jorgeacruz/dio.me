import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../data/quizz_questions.json';
import { NgForOf, NgIf } from '@angular/common';
@Component({
  selector: 'app-quizz',
  imports: [NgForOf, NgIf],
  templateUrl: './quizz.html',
  styleUrl: './quizz.css',
})
export class Quizz implements OnInit{

  title: string = "";
  subtitle: string = "";

  //seleciona as perguntas
  questions: any;
  questionsSelected: any;

  // armazena as respostas
  answers: string[] = [];
  answersSelected: string = "";
  
  // armazena o resultado
  questionsIndex: number = 0;
  questionsMaxIndex: number = 0;

  // finaaliza o quizz
  finished: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false;
      // armazena o título e subtítulo
      this.title = quizz_questions.title;
      this.subtitle = quizz_questions.subtitle;

      // armazena as perguntas
      this.questions = quizz_questions.questions;
      this.questionsSelected = this.questions[this.questionsIndex];

      // armazena o número de perguntas
      this.questionsIndex = 0;
      this.questionsMaxIndex = this.questions.length;

    }
  }

  playerChoose(value: string){
    // armazena a resposta do player
    this.answers.push(value);

    // avança para a próxima pergunta
    this.nextStep();
    console.log(this.answers);
  }
  
  // avança para a próxima pergunta
  async nextStep(){
    this.questionsIndex+=1;

    if(this.questionsMaxIndex > this.questionsIndex){
      this.questionsSelected = this.questions[this.questionsIndex];
    } else {
      // finaliza o quizz
      const finalAnswer: string = await this.checkResult(this.answers);
      this.finished = true;
      this.answersSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results];
    }
  }

  // verifica o resultado do quizz
  async checkResult(answer: string[]){
    
    const result = answer.reduce((previous: string, current: string, i: number, arr: string[]) => {
      if(
        arr.filter((item: string) => item === previous).length > 
        arr.filter((item: string) => item === current).length
      ){
        return previous;
      } else {
        return current;
      }
    });

    return result;
  } 

  // reinicia o quizz
  restart(){

    // reload entire page
    window.location.reload();

    // reset all variables
    this.finished = false;
    this.questionsIndex = 0;
    this.answers = [];
    this.questionsSelected = this.questions[this.questionsIndex];

  }

}
