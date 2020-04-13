$(function () {

    selectbox();

    // selectbox 
    function selectbox() {
        var selectHolder = $(".selectHolder");
        selectHolder.each(function () {
            var currentSelectHolder = $(this);
            var select = currentSelectHolder.find("select");
            var options = select.children();
            var selected_option = select.find("option:checked");
            // SELECT HEADER
            var selectHeader = $("<h5></h5>");
            selectHeader.addClass("select_header");
            selectHeader.html(selected_option.html());
            currentSelectHolder.append(selectHeader);
            // SELECT BODY HOLDER
            var selectBodyHolder = $("<div></div>");
            selectBodyHolder.addClass("select_body_holder");
            currentSelectHolder.append(selectBodyHolder);
            // SELECT BODY
            var selectBody = $("<ul></ul>");
            selectBody.addClass("select_body");
            options.each(function () {
                var option_text = $(this).html();
                var value = $(this).attr("value");
                var disabled = $(this).attr("disabled");
                var li = $("<li></li>")
                li.append(option_text);
                li.attr("data-value", value);
                if (disabled) {
                    li.attr("data-disabled", "true")
                } else {
                    li.attr("data-disabled", "false")
                }
                selectBody.append(li);
            });
            selectBodyHolder.append(selectBody);
        });
    }
    // CLICK SELECT HEADER
    $(document).on("click", ".select_header", function () {
        $(".selectHolder .select_header").not($(this)).removeClass("active");
        $(".selectHolder .select_body_holder").not($(this).next(0)).removeClass("active");
        $(this).toggleClass("active");
        $(this).next(0).toggleClass("active");
    });
    // CLICK SELECT BODY ITEM
    $(document).on("click", ".select_body li", function () {
        var select = $(this).parents(".select_body_holder").prevAll().eq(1);
        if (!($(this).data("disabled"))) {
            select.val($(this).data("value")).trigger("change");
            $(this).parents(".select_body_holder").prev().html($(this).html()).removeClass("active");
            $(this).parents(".select_body_holder").removeClass("active");
        }
    });

    $(document).on("click", function (e) {
        var target = $(e.target);
        if (!(target.hasClass("selectHolder") || target.parents(".selectHolder").length)) {
            $(".selectHolder").children().removeClass("active");
        }
    });

});