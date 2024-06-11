import { Component } from '@angular/core';
import { TerminalService } from 'src/app/services/terminal.service';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-receipt-history',
  templateUrl: './receipt-history.component.html',
  styleUrls: ['./receipt-history.component.scss'],
  // providers: [MessageService]
})
export class ReceiptHistoryComponent {

  showReceiptModal = false;
  showInvoiceModal = false;
  apiResponse: any;
  page: number = 0;
  size: number = 10;
  analyticsOverview: any;
  filterParams : any = {
    
  }
  data: any[] = [

    {
      id:1,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'approve'
    },
    {
      id:2,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'decline'
    },
    {
      id:3,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'approve'
    },
    {
      id:4,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'decline'
    },

  ];


  constructor(private terminalService: TerminalService,
    private messageService: MessageService,
    
    ) {}

  ngOnInit(): void {
    this.showMenu();
    this.getTerminals();
    // this.getAnalyticsOverview();
  }

  toggleReceiptModal(): void {
    // this.showModal = !this.showModal;
    this.showReceiptModal = !this.showReceiptModal;
  }

  toggleInvoiceModal(): void {
    this.showInvoiceModal = !this.showInvoiceModal;
  }

  downloadReceipt(){
    console.log("download btn clicked");
    this.toggleReceiptModal();
  }
  
  downloadInvoice(): void {
    console.log("download btn clicked");
    this.toggleInvoiceModal();
  }

  getTerminals(): void{
    console.log(this.page, this.size);
    this.terminalService.getTransactions(this.page, this.size).subscribe({
      next:(response: any)=>{
          this.apiResponse = response;
          this.data = this.apiResponse?.content;
          console.log(this.data);
      },
      error:(items:any)=>{

      }
    })
  }


  pageIncrement(){
    console.log("hello 1");
    if(this.page < this.apiResponse?.totalPages){
      this.page + 1;
    this.getTerminals();
    }
  }
  pageDecrement(){
    console.log("hello 2");
    if(this.page > 1){
      this.page - 1;
    this.getTerminals();
    }
}




items: MenuItem[] | undefined;


  
showMenu() {
     this.items = [
         {
             label: 'Options',
             items: [
                 {
                     label: 'Update',
                     icon: 'pi pi-refresh',
                     command: () => {
                         this.update();
                     }
                 },
                 {
                     label: 'Delete',
                     icon: 'pi pi-times',
                     command: () => {
                         this.delete();
                     }
                 }
             ]
         },
         {
             label: 'Navigate',
             items: [
                 {
                     label: 'Angular',
                     icon: 'pi pi-external-link',
                     url: 'http://angular.io'
                 },
                 {
                     label: 'Router',
                     icon: 'pi pi-upload',
                     routerLink: '/fileupload'
                 }
             ]
         }
     ];
 }

 update() {
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
 }

 delete() {
     this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
 }

}
