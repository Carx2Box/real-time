import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-search-generator',
  templateUrl: './search-generator.component.html',
  styleUrls: ['./search-generator.component.css']
})
export class SearchGeneratorComponent implements OnInit {
  form: FormGroup;
  panelSearch = true;
  panelDisable = false;
  @Output() submitForm = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destine: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.panelSearch = false;
    this.panelDisable = true;
  }
}
