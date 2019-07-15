function expandFilter(element) {
    var tag = element.getElementsByClassName("fa-plus")[0];
    if (tag == null) {
        var tag = element.getElementsByClassName("fa-minus")[0];
        tag.classList.remove("fa-minus");
        tag.classList.add("fa-plus");
    }
    else {
        tag.classList.add("fa-minus");
        tag.classList.remove("fa-plus");
    }

}
function addWishList(element) {
    if (element.classList.contains("far")) {
        element.classList.remove("far");
        element.classList.add("fas");
    }
    else {
        element.classList.remove("fas");
        element.classList.add("far");
    }
}
$(".filter-link").click(
    function () {
        var elements = this.getElementsByClassName("fa-square")[0];
        if (elements != null) {
            elements.classList.add("fa-check-square");
            elements.classList.remove("fa-square");
        }
        else {
            var elements = this.getElementsByClassName("fa-check-square")[0];
            elements.classList.add("fa-square");
            elements.classList.remove("fa-check-square");
        }
    }
)
