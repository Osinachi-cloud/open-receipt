import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overviewterminal-list',
  templateUrl: './overviewterminal-list.component.html',
  styleUrls: ['./overviewterminal-list.component.scss']
})
export class OverviewterminalListComponent implements OnInit {

  topTerminalData = [
    {
      id:1,
      source:"Lekki Phase 1",
      visitors:2.2,
      revenue:25.67,
      sales:500,
      conversion:50,
    },
    {
      id:2,
      source:"Ajah 1",
      visitors:2.2,
      revenue:25.67,
      sales:500,
      conversion:50,
    },
    {
      id:3,
      source:"Lekki Phase 1",
      visitors:2.2,
      revenue:25.67,
      sales:500,
      conversion:50,
    },
    {
      id:4,
      source:"Ajah 1",
      visitors:2.2,
      revenue:25.67,
      sales:500,
      conversion:50,
    },
  ]

  dataTerminal = [
    {
      id:1,
      terminal:"Lekki Phase 1",
      amount:5.00,
      invoiceDate:"Jan 13,2023",
      status:"paid",
      action:""
    },
    {
      id:2,
      terminal:"Lekki Phase 1",
      amount:5.00,
      invoiceDate:"Jan 13,2023",
      status:"paid",
      action:""
    },
    {
      id:3,
      terminal:"Lekki Phase 1",
      amount:5.00,
      invoiceDate:"Jan 13,2023",
      status:"paid",
      action:""
    },
    {
      id:4,
      terminal:"Lekki Phase 1",
      amount:5.00,
      invoiceDate:"Jan 13,2023",
      status:"unpaid",
      action:""
    },
  ]

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log("hello world")
  }
}
