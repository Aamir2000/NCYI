var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let user_name, user_email, user_phoneNumber, user_Message;
$("#submit").on("click", e => {
    submit();
});
function submit() {
    user_name = $("#full_name")[0].value;
    user_email = $("#email")[0].value;
    user_phoneNumber = $("#phone")[0].value;
    user_Message = $("#mess_con")[0].value;
    if (user_name && user_email && user_phoneNumber && user_Message) {
        console.log([user_name, user_email, user_phoneNumber, user_Message]);
        let path = "./API/contact_form.php";
        let postData = {
            "userName": user_name,
            "userEmail": user_email,
            "userPhone": user_phoneNumber,
            "userMessage": user_Message
        };
        let data = {
            "action": "submit",
            "param": {
                "method": "POST",
                "body": {
                    "key": "data",
                    "value": JSON.stringify(postData)
                },
                "returnType": "json"
            }
        };
        sendRequest(path, data).then(e => {
            console.log(e);
            if (e.action === "data_saved") {
                Err(e.message, 10000);
            }
            else {
                Err(e.message, 10000);
            }
        });
    }
    else {
        Err("Please Fill All The Fields And Then Submit", 2000);
    }
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
function Err(err, time) {
    $(".message")[0].style.padding = "10px 15px";
    $(".message")[0].innerHTML = `${err}`;
    setTimeout(e => {
        $(".message")[0].innerHTML = "";
        $(".message")[0].style.padding = "0px 0px";
    }, time);
}
