import {Component} from '@angular/core';
import {QurlService} from "./service/qurl.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'q-url';
  url: any;
  stamp: any;
  usages: any;
  rlink: any;
  submitted = false;
  qUrlService: QurlService;

  constructor(qUrlService: QurlService) {
    this.qUrlService = qUrlService;
  }

  onSubmit() {
    const _this = this;
    this.qUrlService.addUrl('/urls', {url: this.url, stamp: this.stamp, usages: this.usages})
      .subscribe({
        next(resp) {
          _this.submitted = resp.status == 200;
          _this.rlink = environment.QURL_URL + '/' + resp.body.stamp;
        },
        error(error) {
          _this.submitted = error.status == 200;
        }
      });
  }
}
