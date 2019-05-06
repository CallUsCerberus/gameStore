$(document).ready(function(){
    $(".news").click(function(){
        alert("fuck");
        window.location.href='http://localhost:63342/GamesStore/OrderMenu/Order.html?_ijt=dsd1p1gpmdg63i61s557g10s59';
    });

    $(".btn-pc").click(function(){
        var name = $(this).parent().parent().find(".name").text();
        var price = Number($(this).parent().parent().find(".PCPrice").text());
        name += "(ПК)";
        var cloneImg = $(this).parent().parent().parent().find(".main-img").html();
        var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
        $(cloned).css('position', 'relative');
        $(cloned).find(".rname").text(name);
        $(cloned).find(".rprice").text(price);
        $(cloned).find(".side-img").html(cloneImg);
        $(cloned).appendTo(".col-md-2");
        var prev = Number($("#sumPrice").text());
        prev += price;
        $("#sumPrice").text(prev);
        alert(name);
    });

    $(".btn-c").click(function(){
        var name = $(this).parent().parent().find(".name").text();
        var price = Number($(this).parent().parent().find(".CPrice").text());
        name += "(Консоль)";
        var cloneImg = $(this).parent().parent().parent().find(".main-img").html();
        var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
        $(cloned).css('position', 'relative');
        $(cloned).find(".rname").text(name);
        $(cloned).find(".rprice").text(price);
        $(cloned).find(".side-img").html(cloneImg);
        $(cloned).appendTo(".col-md-2");
        var prev = Number($("#sumPrice").text());
        prev += price;
        $("#sumPrice").text(prev);
        alert(name);
    });

    $(".plus").click(function () {
        var price = Number($(this).parent().find(".rprice").text());
        var i = $(this).parent().find(".inp").val();
        i++;
        $(this).parent().find(".inp").val(i);
        var prev = Number($("#sumPrice").text());
        prev+=price;
        $("#sumPrice").text(prev);
    });

    $(".minus").click(function(){
        var i = $(this).parent().find(".inp").val();
        if(i==1)
            alert("Ви не можете зменшити кількість до нуля");
        else {
            var price = Number($(this).parent().find(".rprice").text());
            i--;
            $(this).parent().find(".inp").val(i);
            var prev = Number($("#sumPrice").text());
            prev-=price;
            $("#sumPrice").text(prev);
        }
    });

    $(".remove").click(function(){
        var amount = $(this).parent().find(".inp").val();
        var price = Number($(this).parent().find(".rprice").text());
        var res = amount*price;
        var prev = Number($("#sumPrice").text());
        prev-=res;
        $(this).parent().remove();
        $("#sumPrice").text(prev);
    })
});