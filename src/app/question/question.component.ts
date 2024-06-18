import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { MatFormFieldModule } from "@angular/material/form-field";


@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule, 
    FormsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [HttpClient, ApiService] ,// Provide HttpClient here if needed
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  question = { text: '' };
  
  constructor(private api : ApiService) {}
  post(question: any){
     this.api.postQuestion(question);
  }
}
