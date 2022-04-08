import { Component, OnInit } from '@angular/core';
import { AdviceApiService } from '../advice-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  advice__count:number = 1;
  advice__data: any="Awareness is Everything";

  constructor(private apiService:AdviceApiService) { }

  ngOnInit(): void {
  }

  advice__counter() {
    this.apiService.getData().subscribe(res => {
      console.log(res.slip);
      this.advice__count = res.slip.id;
      this.advice__data = res.slip.advice;
    });
    

  }


}
