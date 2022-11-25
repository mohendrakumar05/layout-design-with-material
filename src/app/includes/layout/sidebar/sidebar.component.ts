import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// import MENUS from "../../../../assets/menu.json";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 
  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  public mainmenu: any = [];
  selectedPath: any;
  public role_id: any;
  public emp_name: any;
  public posting_place: any;
  MENUS : any = {
    "1": [
      {
        "label": "Home",
        "route": "/home",
        "icon": "home",
        "child": []
      },
      {
        "label": "Components",
        "icon": "playlist_add",
        "child": [
          {
              "label": "Child Component",
              "route": "/home",
              "icon": "receipt"
            },
          // {
          //   "label": "Buttons",
          //   "route": "/home/button",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "Buttons toggle",
          //   "route": "/home/button-toggle",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "Badge",
          //   "route": "/home/badge",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "Card",
          //   "route": "/home/card",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "Dialog",
          //   "route": "/home/dialog",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "Dynamic Colors",
          //   "route": "/home/color",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "Elevation",
          //   "route": "/home/elevation",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "List",
          //   "route": "/home/list",
          //   "icon": "receipt"
          // },
          // {
          //   "label": "Table",
          //   "route": "/home/table",
          //   "icon": "receipt"
          // }

        ]
      },
      {
        "label": "Logout",
        "route": "/login",
        "icon": "logout",
        "child": []
      },
    ]
  };
  constructor( private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    //  this.mainmenu = MENUS[1];
    this.mainmenu = this.MENUS[1];
    // this.emp_name = this.auths.currentUser.emp_name;
    // this.role_id = this.auths.currentUser.role_id;
    // if(this.role_id == 5){
    //   this.posting_place = this.auths.currentUser.posting_place;
    // }
  }

///implement for passwordupdate 
  openChangePasswordForm(){  
  }

  toggleSideBar(){
    if(window.innerWidth < 1024){
      this.sidenav.emit();
    }
  }

}
