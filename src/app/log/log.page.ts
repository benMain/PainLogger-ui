import { Component, OnInit } from '@angular/core';
import { LogEntry } from '../models';
import { ApiPersistenceService } from '../services';

@Component({
  selector: 'app-log',
  templateUrl: 'log.page.html',
  styleUrls: ['log.page.scss'],
})
export class LogPage implements OnInit {
  constructor(private readonly apiService: ApiPersistenceService) {}

  async ngOnInit(): Promise<void> {}

  async saveLogEntry(logEntry: LogEntry) {
    this.apiService.saveLogEntry(logEntry);
  }
}
