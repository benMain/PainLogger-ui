import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogEntry } from '../models';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ApiPersistenceService {
  private readonly baseUrl: string;
  constructor(
    private readonly httpClient: HttpClient,
    private readonly authenticationService: AuthenticationService,
  ) {
    this.baseUrl = '';
  }

  async saveLogEntry(logEntry: LogEntry): Promise<void> {
    const response = await this.httpClient
      .post(this.baseUrl, logEntry, { headers: this.getHeaders() })
      .toPromise();
    console.log(response);
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('AuthToken', this.authenticationService.getUser().authToken);
    headers.append('User', this.authenticationService.getUser().email);
    return headers;
  }
}
