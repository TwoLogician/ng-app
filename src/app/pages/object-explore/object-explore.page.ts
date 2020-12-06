import { Component } from "@angular/core"

import { AppService } from "src/app/app.service"
import { BaseComponent } from "src/app/components/base.component"

@Component({
    templateUrl: "./object-explore.page.html"
})
export class ObjectExplorePage extends BaseComponent {

    all: any = []
    columns: string[] = []
    loading = false
    keyword = ""
    rs: any = []
    url = ""

    constructor(private service: AppService) {
        super()
    }

    search() {
        let k = this.keyword.toUpperCase()
        this.rs = this.all.filter(x => this.columns.some(y => {
            let v = x[y] || ""
            return v.toString().toUpperCase().includes(k)
        }))
    }

    async submit() {
        this.loading = true
        this.rs = await this.service.get(this.url).toPromise()
        if (this.rs.length > 0) {
            let first = this.rs[0]
            this.columns = Object.keys(first).map(x => x)
        }
        this.all = this.rs
        this.loading = false
    }
}