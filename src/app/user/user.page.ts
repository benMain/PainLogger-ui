import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ModalController } from '@ionic/angular';
import { SocialUser } from 'angularx-social-login';

export class UserViewModel {
  rows: DemographicsRowViewModel[];
  constructor(incomingRows: DemographicsRowViewModel[]) {
    this.rows = incomingRows;
  }
}

class DemographicsColumnViewModel {
  constructor(
    public label: string,
    public value: string,
    public icon: string = null,
  ) {}
}

class DemographicsRowViewModel {
  constructor(public cols: DemographicsColumnViewModel[]) {}
}

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  private modal: HTMLIonModalElement;
  private vm: UserViewModel;
  constructor(private readonly authService: AuthenticationService) {}

  async ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.vm = new UserViewModel(
        this.mapUserToViewModel(this.authService.getUser()),
      );
    }
  }

  async loginGoogle() {
    await this.authService.loginGoogle();
    await this.ngOnInit();
  }

  private mapUserToViewModel(user: SocialUser): DemographicsRowViewModel[] {
    const rows = [];
    const rowOne = new DemographicsRowViewModel([
      {
        label: 'Name',
        value: `${user.name}`,
        icon: 'person',
      },
      {
        label: 'Email',
        value: `${user.email}`,
        icon: 'mail',
      },
      {
        label: 'Authentication Provider',
        value: `${user.provider}`,
        icon: user.provider === 'GOOGLE' ? 'logo-google' : null,
      },
    ]);
    const rowTwo = new DemographicsRowViewModel([
      {
        label: 'Id',
        value: `${user.id}`,
        icon: 'unlock',
      },
      {
        label: 'Authentication Token',
        value: `${user.authToken.substring(0, 20)}`,
        icon: 'eye',
      },
      {
        label: 'Facebook',
        value: `${user.facebook}`,
        icon: 'logo-facebook',
      },
    ]);
    rows.push(rowOne);
    rows.push(rowTwo);
    return rows;
  }
}
