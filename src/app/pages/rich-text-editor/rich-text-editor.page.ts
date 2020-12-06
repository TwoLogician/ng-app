import { Component } from "@angular/core"

@Component({
    templateUrl: "./rich-text-editor.page.html"
})
export class RichTextEditorPage {

    htmlContent = ""
    htmlValue = ""

    copy() {
        let copyText: any = document.getElementById("html-value-text")
        copyText.select()
        document.execCommand("copy")
    }

    htmlContentChange(e) {
        this.htmlValue = e.replaceAll(`<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>`, "")
    }
}