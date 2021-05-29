import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Alert } from './alert-model';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { AlertService } from '../alert-banner/alert.service';

@Component({
  selector: 'app-alert-banner',
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.scss'],
})
export class AlertBannerComponent implements OnInit, OnDestroy {
  @Input() fade = true;
  @Input() id = 'default-alert';
  isOpen: boolean;

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert(this.id).subscribe(alert => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        // filter out alerts without 'keepAfterRouteChange' flag
        this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

        // remove 'keepAfterRouteChange' flag on the rest
        this.alerts.forEach(x => delete x.keepAfterRouteChange);
        return;
      }

      // add alert to array
      this.alerts.push(alert);

      // auto close alert if required
      if (alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 7000);
      }
    });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      // fade out alert
      this.alerts.find(x => x === alert).fade = true;

      // remove alert after faded out
      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  toggle(isOpend: boolean) {
    if (isOpend) {
      this.alerts = [];
      this.isOpen = false;
    } else {
      this.isOpen = !this.isOpen;
    }
  }
}
