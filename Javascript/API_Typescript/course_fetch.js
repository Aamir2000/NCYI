var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let upperLimit = 10;
let currPage = 1;
let currLimit = 0;
$(document).ready(e => {
    pagination();
    starting_load();
});
function load(e) {
    $(".course_inner")[0].innerHTML = "";
    let url = "./API/fetch_courses.php";
    currPage = parseInt(e.innerHTML);
    currLimit = upperLimit * currPage - 10;
    let postData = {
        action: "get_courses",
        upperLimit: upperLimit,
        lowerLimit: currLimit
    };
    let data = {
        param: {
            method: "POST",
            body: {
                key: "get_courses",
                value: JSON.stringify(postData)
            },
            returnType: "json"
        }
    };
    sendRequest(url, data).then(e => {
        console.log(e);
        e.args.courses.forEach(element => {
            $(".course_inner")[0].innerHTML +=
                `<div class="Course">
        <h3>${element.course_name}</h3> <span>${element.course_price}</span>
        <p>${element.course_desc}</p>
      </div>`;
        });
    });
    e = null;
}
function starting_load() {
    $(".course_inner")[0].innerHTML = "";
    let url = "./API/fetch_courses.php";
    let postData = {
        action: "get_courses",
        upperLimit: upperLimit,
        lowerLimit: 0
    };
    let data = {
        param: {
            method: "POST",
            body: {
                key: "get_courses",
                value: JSON.stringify(postData)
            },
            returnType: "json"
        }
    };
    sendRequest(url, data).then(e => {
        console.log(e);
        e.args.courses.forEach(element => {
            $(".course_inner")[0].innerHTML += `<div class="Course">
        <h3>${element.course_name}</h3> <span>${element.course_price}</span>
        <p>${element.course_desc}</p>
      </div>`;
        });
    });
}
function pagination() {
    let param = {
        param: {
            method: "POST",
            body: {
                key: "pagination",
                value: "get_pages"
            },
            returnType: "json"
        }
    };
    sendRequest("./API/pagination.php", param).then(e => {
        let nums = Math.ceil(e.args.num / upperLimit);
        $(".pagination")[0].innerHTML += `<span onClick="load(this);">1</span>`;
        for (let count = 2; count < nums; count++) {
            $(".pagination")[0].innerHTML += `<span onClick="load(this)">${count}</span>`;
        }
    });
}
function sendRequest(url, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (data.param.method) {
            let method = data.param.method;
            let formData = new FormData();
            formData.append(data.param.body.key, data.param.body.value);
            return yield fetch(url, { method: method, body: formData })
                .then(e => {
                if (data.param.returnType === "json") {
                    return e.json();
                }
                else {
                    return e.text();
                }
            })
                .then(e => {
                return e;
            });
        }
    });
}
