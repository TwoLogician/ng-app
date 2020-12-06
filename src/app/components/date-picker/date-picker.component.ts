import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import * as moment from "moment"

import { BaseComponent } from "../base.component"

@Component({
    selector: "date-picker",
    templateUrl: "./date-picker.component.html"
})
export class DatePickerComponent extends BaseComponent implements OnInit {

    @Input()
    date: any = moment(new Date()).format("DD/MM/YYYY")

    @Output()
    dateChange = new EventEmitter<any>()

    dateString: any = moment(new Date()).format(`DD/MM/${new Date().getFullYear() + 543}`)

    onDateChange(e) {
        this.dateChange.emit(e)
        this.dateString = e ? moment(e).format(`DD/MM/${e.getFullYear() + 543}`) : ""
    }

    dateStringChange(e) {
        let value = e.target.value
        if (value && value.split("/").length == 3) {
            let date = moment(value, "DD/MM/YYYY").toDate()
            this.date = new Date(moment(date).format(`${date.getFullYear() - 543}-MM-DD`))
        } else {
            this.date = ""
        }
        this.dateChange.emit(this.date)
    }

    ngOnInit() {
        let date = moment(this.date, "DD/MM/YYYY").toDate()
        this.dateString = moment(date).format(`DD/MM/${date.getFullYear() + 543}`)
    }
}