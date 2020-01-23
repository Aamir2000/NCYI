$(document).ready(e => {
    const fetch_c = new fetch_courses();
});
let pop = {};
class fetch_courses {
    constructor() {
        this.path = "./API/fetch_courses.php";
        this.lowerLimit = 0;
        this.upperLimit = 10;
        this.numPages = 0;
        this.pagination = [];
        this.dataHandle();
    }
    dataHandle() {
        let count = 1;
        let data = new FormData();
        data.append("Action", "get");
        fetch(this.path, {
            method: "POST",
            body: data
        })
            .then(e => {
            return e.text();
        })
            .then((e) => {
            console.log(`From dataHandle Function index.ts : ${e}`);
            e = JSON.parse(e);
            this.numPages = Math.ceil(e.Args.num / this.upperLimit);
            if (e.Action == "get") {
                do {
                    this.pagination.push(count);
                    count++;
                } while (this.numPages > count);
                count = 0;
                this.sendPages(this.pagination);
            }
        });
        data = null;
    }
    sendPages(Pages) {
        Pages.forEach(val => {
            $(".pagination")[0].innerHTML += `<span><a onClick="load(this);">${val}</a></span>`;
        });
    }
}
function load(e) { }
