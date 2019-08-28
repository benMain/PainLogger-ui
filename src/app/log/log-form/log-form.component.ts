import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { LogEntry } from '../../models';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss'],
})
export class LogFormComponent implements OnInit {
  @Output()
  notifyLogEntry: EventEmitter<LogEntry> = new EventEmitter();
  logForm: FormGroup;
  constructor() {}

  ngOnInit() {
    const validator: ValidatorFn = (control: AbstractControl) => {
      if (!control.value || control.value === '') {
        return { error: 'Must assign Value' };
      }
      return null;
    };

    this.logForm = new FormGroup({
      startDate: new FormControl('', validator),
      startPain: new FormControl('', validator),
      endDate: new FormControl('', validator),
      endPain: new FormControl('', validator),
      therapy: new FormControl(''),
      notes: new FormControl(''),
    });
  }

  async savePainLog() {
    const logEntry = this.getLogEntry(this.logForm);
    this.notifyLogEntry.emit(logEntry);
  }

  private getLogEntry(formGroup: FormGroup): LogEntry {
    const formValues = formGroup.value;
    const entry = new LogEntry();
    Object.assign(entry, formValues);
    entry.startDate = new Date(entry.startDate);
    entry.endDate = new Date(entry.endDate);
    return entry;
  }
}
