import { Component } from "@angular/core"

@Component({
    templateUrl: "./inputs.page.html"
})
export class InputsPage {

    fileChange(e) {
        let img = document.createElement("img")
        img.src = e.target.files[0]
    }
}