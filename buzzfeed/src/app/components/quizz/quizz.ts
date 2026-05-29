import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../data/quizz_questions.json';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-quizz',
  imports: [NgForOf],
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
      this.title = quizz_questions.title;
      this.subtitle = quizz_questions.subtitle;

      this.questions = quizz_questions.questions;
      this.questionsSelected = this.questions[this.questionsIndex];

      this.questionsIndex = 0;
      this.questionsMaxIndex = this.questions.length;

      console.log(this.questionsIndex)
      console.log(this.questionsMaxIndex)
    }
  }
  playerChoose(value: string){
    this.answers.push(value);
    console.log(this.answers);
  }
  async nextStep(){
    this.questionsIndex+=1;

    if(this.questionsMaxIndex > this.questionsIndex){
      this.questionsSelected = this.questions[this.questionsIndex];
    }else{
      this.finished = true;
    }
  }
}
