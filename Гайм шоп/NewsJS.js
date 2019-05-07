

$(document).ready(function() {

    var pricesArray = [1200, 1500, 900, 1050, 650, 850, 1000, 1300];
    var amountArray = [0, 0, 0, 0, 0, 0, 0, 0];
    var namesArray = ["Devil May Cry 5(ПК)", "Devil May Cry 5(Консоль)", "Sekiro: Shadows Die Twice(ПК)",
        "Sekiro: Shadows Die Twice(Консоль)", "Assassin`s Creed : Odyssey(ПК)", "Assassin`s Creed : Odyssey(Консоль)",
        "Mortal Combat 11(ПК)", "Mortal Combat 11(Консоль)"
    ];
    var srcArray = [$(".img-1").html(), $(".img-2").html(), $(".img-3").html(), $(".img-4").html()];

    if(localStorage.length!=0){
        if(Number(localStorage.getItem(namesArray[0]))!=0){
            var img = $(".img-1").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[0]);
            $(cloned).find(".rprice").text(pricesArray[0]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[0]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
        if(Number(localStorage.getItem(namesArray[1]))!=0){
            var img = $(".img-1").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[1]);
            $(cloned).find(".rprice").text(pricesArray[1]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[1]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
        if(Number(localStorage.getItem(namesArray[2]))!=0){
            var img = $(".img-2").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[2]);
            $(cloned).find(".rprice").text(pricesArray[2]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[2]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
        if(Number(localStorage.getItem(namesArray[3]))!=0){
            var img = $(".img-2").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[3]);
            $(cloned).find(".rprice").text(pricesArray[3]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[3]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
        if(Number(localStorage.getItem(namesArray[4]))!=0){
            var img = $(".img-3").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[4]);
            $(cloned).find(".rprice").text(pricesArray[4]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[4]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
        if(Number(localStorage.getItem(namesArray[5]))!=0){
            var img = $(".img-3").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[5]);
            $(cloned).find(".rprice").text(pricesArray[5]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[5]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
        if(Number(localStorage.getItem(namesArray[6]))!=0){
            var img = $(".img-4").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[6]);
            $(cloned).find(".rprice").text(pricesArray[6]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[6]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
        if(Number(localStorage.getItem(namesArray[7]))!=0){
            var img = $(".img-4").html();
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(namesArray[7]);
            $(cloned).find(".rprice").text(pricesArray[7]);
            $(cloned).find(".inp").val(localStorage.getItem(namesArray[7]));
            $(cloned).find(".side-img").html(img);
            cloned.appendTo(".bin-1");
        }
    }


    $(".home").click(function(){
        window.location.href='http://localhost:63342/GamesStore/index.html?_ijt=1li6h3kquoi526a843ub59ncam#';
    });
});