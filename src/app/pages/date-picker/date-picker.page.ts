import { Component } from "@angular/core"
import * as moment from "moment"

import { BaseComponent } from "src/app/components/base.component"

@Component({
    templateUrl: "./date-picker.page.html"
})
export class DatePickerPage extends BaseComponent {

    date: any = new Date()
}