import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatPaginatorModule, MatSelectModule,
  MatSnackBarModule,
  MatTabsModule, MatPaginatorIntl, MatDialogRef,
  MAT_DIALOG_DATA, MAT_SNACK_BAR_DATA, MatSnackBarRef, MatTooltipModule,
  MatProgressSpinnerModule, MatSliderModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';


import { SnackbarErrorComponent } from './components/snackbar/snackbar-error/snackbar-error.component';
import { SnackbarInfoComponent } from './components/snackbar/snackbar-info/snackbar-info.component';
import { SnackbarOkComponent } from './components/snackbar/snackbar-ok/snackbar-ok.component';
import { SnackbarWtfComponent } from './components/snackbar/snackbar-wtf/snackbar-wtf.component';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DialogStandardComponent} from './components/dialog/dialog-standard/dialog-standard.component';
import { IndexComponent } from './components/index/index.component';
import {LoanService} from './services/interfaces/loan-service';
import {environment} from '../environments/environment';
import {LoanProdService} from './services/prod/loan-prod.service';
import {LoanMockService} from './services/mock/loan-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SnackbarErrorComponent,
    SnackbarInfoComponent,
    SnackbarOkComponent,
    SnackbarWtfComponent,
    DialogStandardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  providers: [
    {
      provide: LoanService,
      useClass: LoanProdService
    }
  ],
  entryComponents: [
    SnackbarErrorComponent,
    SnackbarInfoComponent,
    SnackbarOkComponent,
    SnackbarWtfComponent,
    DialogStandardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
