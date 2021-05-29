import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert } from '../alert-banner/alert-model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  constructor() {}

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: 'success', message }));
  }

  error(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: 'error', message }));
  }

  info(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: 'info', message }));
  }

  warn(message: string, options?: any) {
    this.alert(new Alert({ ...options, type: 'warning', message }));
  }

  // main alert method
  alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
    this.subject.next(new Alert({ id }));
  }
}
