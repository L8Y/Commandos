import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ErrorService, StoreService } from '@core/services';
import { DOCUMENT } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    @ViewChild('form') settingsForm: NgForm;

    gridCounts = [25, 50, 100];
    gridCount: number;
    autoFetch: boolean;
    darkMode: boolean;
    diffFormate: boolean;

    constructor(
        private errorService: ErrorService,
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private storeService: StoreService
    ) { }

    ngOnInit(): void {
        this.autoFetch = this.storeService.getAutoFetch();
        this.darkMode = this.storeService.getDarkMode();
        this.diffFormate = this.storeService.getDiff2HtmlOutputFormat() === 'side-by-side';
    }

    openDevTools(): void {

    }


    save(): void {
        this.storeService.setAutoFetch(this.autoFetch);
        this.storeService.setDarkMode(this.darkMode);
        this.storeService.setDiff2HtmlOutputFormat(this.diffFormate ? 'side-by-side' : 'line-by-line');

        if (this.darkMode) {
            this.renderer.setAttribute(this.document.body, 'cds-theme', 'dark');
        }
        else {
            this.renderer.setAttribute(this.document.body, 'cds-theme', '');
        }
        this.storeService.saveData();
        this.settingsForm.form.markAsPristine();
    }

}
