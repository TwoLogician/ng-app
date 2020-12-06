import { Component } from "@angular/core"

@Component({
    templateUrl: "./pdfjs.page.html"
})
export class PdfJsPage {

    print() {
        let w = window.open("http://asp.demosoft.me/api/files/fileName/ImageData.pdf")
        w.print()
    }
}