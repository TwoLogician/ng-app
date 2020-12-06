import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import {
  CameraPage,
  DatePickerPage,
  HomePage,
  InputsPage,
  ObjectExplorePage,
  PdfJsPage,
  RichTextEditorPage,
} from "./pages"

const routes: Routes = [
  { component: CameraPage, path: "camera" },
  { component: DatePickerPage, path: "date-picker" },
  { component: HomePage, path: "" },
  { component: InputsPage, path: "inputs" },
  { component: ObjectExplorePage, path: "object-explore" },
  { component: PdfJsPage, path: "pdfjs" },
  { component: RichTextEditorPage, path: "rich-text-editor" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
