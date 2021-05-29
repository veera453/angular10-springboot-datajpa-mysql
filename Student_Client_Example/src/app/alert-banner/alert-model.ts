export declare type alertType = 'info' | 'error' | 'success' | 'warning';
export class Alert {
  message: string;
  title: string;
  type: alertType;
  closeButton?: boolean;
  tla?: string;
  onClose?(): void;
  focus?: boolean;
  id: string;
  keepAfterRouteChange: boolean;
  fade: boolean;
  autoClose: boolean;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
