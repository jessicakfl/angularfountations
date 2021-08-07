import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    items: MenuItem[];
    tabitems: MenuItem[];
    title = 'PDMSS';
    constructor() { }

    ngOnInit(): void {
        this.items = [
            {
                label: 'PDMSS',
                'routerLink': ['table'],
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                'routerLink': ['/'],
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh', 'routerLink': ['/dashboard'], }
                ]
            },
            {
                label: 'ITE',
                icon: 'pi pi-fw pi-pencil'
            },
            {
                label: 'IT Application',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'AF System',
                icon: 'pi pi-fw pi-calendar',
            },
            {
                label: 'Special Projects',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-cog',
                'routerLink': ['help']
            }
        ];
        this.tabitems = [
            { label: 'Home', icon: 'pi pi-fw pi-home', 'routerLink': ['/table'], },
            { label: 'Site Admin ', icon: 'pi pi-fw pi-calendar', 'routerLink': ['siteadmin'] },
            { label: 'My Profile ', icon: 'pi pi-fw pi-pencil' },
            { label: 'Central Manager', icon: 'pi pi-fw pi-file', 'routerLink': ['/tablesgroup'], }
        ];
    }
}

