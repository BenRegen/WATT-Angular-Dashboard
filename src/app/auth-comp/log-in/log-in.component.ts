import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(formObj: NgForm) {
    console.log('Submited!', formObj);
    this.router.navigate(['/'])
  }
}
