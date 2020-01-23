let menu_icon = $(".menu_icon")[1];
let list_wrap = $("#list_wrap")[0];
let dropdown = $(".dropdown")[0];
let drop_name = $(".drop_name")[0];
let dropdown_list = $(".dropdown > ul")[0];
$(document).ready(() => {
    let courses_obj = new courses();
});
class courses {
    constructor() {
        this.init();
        this.menu_items();
        this.read_more();
    }
    init() {
        menu_icon.addEventListener("click", (e) => {
            $(list_wrap).toggle();
        });
        $(drop_name).on("click", (e) => {
            $(dropdown_list).slideToggle("slow");
        });
    }
    menu_items() {
        $("#list_wrap li").on("click", (e) => {
            $("#list_wrap li, #list_wrap span *, #list_wrap li a").removeClass("active");
            $(e.target).toggleClass("active");
            if (e.target.tagName == "A") {
                $(e.target.parentElement).toggleClass("active");
            }
            if ($(e.target).hasClass("drop_name") || $(e.target).hasClass("fa-sort-down")) {
                $(drop_name.parentElement).toggleClass("active");
                $(drop_name).removeClass("active");
                $(".dropdown > ul > li").on("click", (e) => {
                    e.stopPropagation();
                    $(".dropdown > ul > li").removeClass("active_drop");
                    $(e.target).toggleClass("active_drop");
                    dropdown.classList.add("active");
                });
            }
        });
    }
    read_more() {
        $("#Read_M").on("click", e => {
            $(".read_more").css({ display: "flex" });
        });
        $(".fa-times").on("click", e => {
            $(".read_more").css({ display: "none" });
        });
    }
}
