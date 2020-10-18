import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../exercise.module';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  constructor() {}

  ngOnInit() {
  }

  onStartTraining() {
    this.trainingStart.emit();
  }
}
