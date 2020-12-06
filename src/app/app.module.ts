import { registerLocaleData } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import en from "@angular/common/locales/en"
import { APP_INITIALIZER, NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import {
  MAT_DATE_LOCALE,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
} from "@angular/material"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
// import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg"
import { FroalaEditorModule } from "angular-froala-wysiwyg"
// import { KeycloakAngularModule, KeycloakService } from "keycloak-angular"
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd"
import { PdfJsViewerModule } from "ng2-pdfjs-viewer"
import { NgxMaskModule, IConfig } from "ngx-mask"
import { WebcamModule } from "ngx-webcam"

import { AppComponent } from "./app.component"
import { AppService } from "./app.service"
import { AppRoutingModule } from "./app-routing.module"
import { DatePickerComponent } from "./components"
import {
  CameraPage,
  DatePickerPage,
  HomePage,
  InputsPage,
  ObjectExplorePage,
  PdfJsPage,
  RichTextEditorPage,
} from "./pages"

registerLocaleData(en)

// let initializeKeycloak = (keycloak: KeycloakService) => {
//   return () =>
//     keycloak.init({
//       config: {
//         url: "http://demosoft.me:8180/auth",
//         realm: "master",
//         clientId: "demosoft",
//       },
//     });
// }

let options: Partial<IConfig> | (() => Partial<IConfig>)

@NgModule({
  declarations: [
    AppComponent,
    CameraPage,
    DatePickerComponent,
    DatePickerPage,
    HomePage,
    InputsPage,
    ObjectExplorePage,
    PdfJsPage,
    RichTextEditorPage,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    // FroalaViewModule.forRoot(),
    HttpClientModule,
    // KeycloakAngularModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(options),
    NgZorroAntdModule,
    PdfJsViewerModule,
    WebcamModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "th-TH" },
    { provide: NZ_I18N, useValue: en_US },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // },
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
