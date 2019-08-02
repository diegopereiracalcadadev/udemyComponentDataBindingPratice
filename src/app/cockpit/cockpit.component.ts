import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  onAddServerClick(serverData: {serverName: string, serverContent: string}) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: serverData.serverName,
    //   content: serverData.serverContent
    // });
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  onAddBluePrintClick(serverData: {serverName: string, serverContent: string}) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: serverData.serverName,
    //   content: serverData.serverContent
    // });
    this.bluePrintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    })

  }
 
}
