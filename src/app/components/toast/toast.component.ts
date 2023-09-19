import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers: [MessageService]
})
export class ToastComponent {

  constructor(private messageService: MessageService) { }

  showToast(severity: string, detail: string) {
    this.messageService.add({ severity, detail });
  }
}
