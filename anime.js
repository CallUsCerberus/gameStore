
var pricesArray = [1200, 1500, 900, 1050, 650, 850, 1000, 1300];
var amountArray = [0, 0, 0, 0, 0, 0, 0, 0];
var namesArray = ["Devil May Cry 5(ПК)", "Devil May Cry 5(Консоль)", "Sekiro: Shadows Die Twice(ПК)",
    "Sekiro: Shadows Die Twice(Консоль)", "Assassin`s Creed : Odyssey(ПК)", "Assassin`s Creed : Odyssey(Консоль)",
    "Mortal Combat 11(ПК)", "Mortal Combat 11(Консоль)"
];
var srcArray = [$(".img-1").html(), $(".img-2").html(), $(".img-3").html(), $(".img-4").html()];
if(localStorage.length==0) {
    alert("zer0")
    localStorage.setItem("Devil May Cry 5(ПК)", 0);
    localStorage.setItem("Devil May Cry 5(Консоль)", 0);
    localStorage.setItem("Sekiro: Shadows Die Twice(ПК)", 0);
    localStorage.setItem("Sekiro: Shadows Die Twice(Консоль)", 0);
    localStorage.setItem("Assassin`s Creed : Odyssey(ПК)", 0);
    localStorage.setItem("Assassin`s Creed : Odyssey(Консоль)", 0);
    localStorage.setItem("Mortal Combat 11(ПК)", 0);
    localStorage.setItem("Mortal Combat 11(Консоль)", 0);
}
$(document).ready(function(){

    if(localStorage.length!=0){
        if(Number(localStorage.getItem(namesArray[0]))!=0){
            var img = $(".img-1").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[0]);
            $(cloned).find(".rprice").text(pricesArray[0]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[0]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem(namesArray[1]))!=0){
            var img = $(".img-1").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[1]);
            $(cloned).find(".rprice").text(pricesArray[1]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[1]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem(namesArray[2]))!=0){
            var img = $(".img-2").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[2]);
            $(cloned).find(".rprice").text(pricesArray[2]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[2]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem(namesArray[3]))!=0){
            var img = $(".img-2").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[3]);
            $(cloned).find(".rprice").text(pricesArray[3]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[3]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem(namesArray[4]))!=0){
            var img = $(".img-3").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[4]);
            $(cloned).find(".rprice").text(pricesArray[4]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[4]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem(namesArray[5]))!=0){
            var img = $(".img-3").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[5]);
            $(cloned).find(".rprice").text(pricesArray[5]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[5]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem(namesArray[6]))!=0){
            var img = $(".img-4").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[6]);
            $(cloned).find(".rprice").text(pricesArray[6]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[6]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem(namesArray[7]))!=0){
            var img = $(".img-4").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[7]);
            $(cloned).find(".rprice").text(pricesArray[7]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[7]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".col-md-2");
        }
        if(Number(localStorage.getItem("sumPrice"))!=0){
            $("#sumPrice").text(localStorage.getItem(("sumPrice")));
        }
    }

    $(".btn-order").click(function(){
        window.location.href='http://localhost:63342/GamesStore/OrderMenu/Order.html?_ijt=dsd1p1gpmdg63i61s557g10s59';
    });

    $(".news").click(function(){
        window.location.href='http://localhost:63342/GamesStore/Гайм%20шоп/News.html?_ijt=8glf1bpju3hm35efnm60e625o6';
    });


    $(".btn-pc").click(function(){
        var name = $(this).parent().parent().find(".name").text();
        var price = Number($(this).parent().parent().find(".PCPrice").text());
        name += "(ПК)";

            var currentAmount = Number(localStorage.getItem(name));
            currentAmount++;
            localStorage.setItem(name, currentAmount);
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
            localStorage.setItem("sumPrice", prev);

    });

    $(".btn-c").click(function(){
        var name = $(this).parent().parent().find(".name").text();
        var price = Number($(this).parent().parent().find(".CPrice").text());
        name += "(Консоль)";
        var currentAmount = Number(localStorage.getItem(name));
        currentAmount++;
        localStorage.setItem(name, currentAmount);
        var cloneImg = $(this).parent().parent().parent().find(".main-img").html();
        var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
        $(cloned).css('position', 'relative');
        $(cloned).find(".rname").text(name);
        $(cloned).find(".rprice").text(price);
        $(cloned).find(".side-img").html(cloneImg);
        $(cloned).appendTo(".col-md-2");
        $(cloned).appendTo(".bin-2");
        var prev = Number($("#sumPrice").text());
        prev += price;
        $("#sumPrice").text(prev);
        localStorage.setItem("sumPrice", prev);
    });

    $(".plus").click(function () {
        var name = $(this).parent().find(".rname").text();
        var currentAmount = Number(localStorage.getItem(name));
        currentAmount++;
        localStorage.setItem(name, currentAmount);
        var price = Number($(this).parent().find(".rprice").text());
        var i = $(this).parent().find(".inp").val();
        i++;
        $(this).parent().find(".inp").val(i);
        var prev = Number($("#sumPrice").text());
        prev+=price;
        $("#sumPrice").text(prev);
        localStorage.setItem("sumPrice", prev);
    });

    $(".minus").click(function(){
        var name = $(this).parent().find(".rname").text();
        var currentAmount = Number(localStorage.getItem(name));
        currentAmount--;
        localStorage.setItem(name, currentAmount);
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
            localStorage.setItem("sumPrice", prev);
        }
    });

    $(".remove").click(function(){
        var name = $(this).parent().find(".rname").text();
        localStorage.setItem(name, 0);
        var amount = $(this).parent().find(".inp").val();
        var price = Number($(this).parent().find(".rprice").text());
        var res = amount*price;
        var prev = Number($("#sumPrice").text());
        prev-=res;
        $(this).parent().remove();
        $("#sumPrice").text(prev);
        localStorage.setItem("sumPrice", prev);
    })
});