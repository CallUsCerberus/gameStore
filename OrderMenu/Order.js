$(function () {
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
         cloned.appendTo(".bin-2");
      }
      if(Number(localStorage.getItem(namesArray[1]))!=0){
         var img = $(".img-1").html();
         var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
         $(cloned).css('position', 'relative');
         $(cloned).find(".rname").text(namesArray[1]);
         $(cloned).find(".rprice").text(pricesArray[1]);
         $(cloned).find(".inp").val(localStorage.getItem(namesArray[1]));
         $(cloned).find(".side-img").html(img);
         cloned.appendTo(".bin-2");
      }
      if(Number(localStorage.getItem(namesArray[2]))!=0){
         var img = $(".img-2").html();
         var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
         $(cloned).css('position', 'relative');
         $(cloned).find(".rname").text(namesArray[2]);
         $(cloned).find(".rprice").text(pricesArray[2]);
         $(cloned).find(".inp").val(localStorage.getItem(namesArray[2]));
         $(cloned).find(".side-img").html(img);
         cloned.appendTo(".bin-2");
      }
      if(Number(localStorage.getItem(namesArray[3]))!=0){
         var img = $(".img-2").html();
         var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
         $(cloned).css('position', 'relative');
         $(cloned).find(".rname").text(namesArray[3]);
         $(cloned).find(".rprice").text(pricesArray[3]);
         $(cloned).find(".inp").val(localStorage.getItem(namesArray[3]));
         $(cloned).find(".side-img").html(img);
         cloned.appendTo(".bin-2");
      }
      if(Number(localStorage.getItem(namesArray[4]))!=0){
         var img = $(".img-3").html();
         var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
         $(cloned).css('position', 'relative');
         $(cloned).find(".rname").text(namesArray[4]);
         $(cloned).find(".rprice").text(pricesArray[4]);
         $(cloned).find(".inp").val(localStorage.getItem(namesArray[4]));
         $(cloned).find(".side-img").html(img);
         cloned.appendTo(".bin-2");
      }
      if(Number(localStorage.getItem(namesArray[5]))!=0){
         var img = $(".img-3").html();
         var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
         $(cloned).css('position', 'relative');
         $(cloned).find(".rname").text(namesArray[5]);
         $(cloned).find(".rprice").text(pricesArray[5]);
         $(cloned).find(".inp").val(localStorage.getItem(namesArray[5]));
         $(cloned).find(".side-img").html(img);
         cloned.appendTo(".bin-2");
      }
      if(Number(localStorage.getItem(namesArray[6]))!=0){
         var img = $(".img-4").html();
         var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
         $(cloned).css('position', 'relative');
         $(cloned).find(".rname").text(namesArray[6]);
         $(cloned).find(".rprice").text(pricesArray[6]);
         $(cloned).find(".inp").val(localStorage.getItem(namesArray[6]));
         $(cloned).find(".side-img").html(img);
         cloned.appendTo(".bin-2");
      }
      if(Number(localStorage.getItem(namesArray[7]))!=0){
         var img = $(".img-4").html();
         var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
         $(cloned).css('position', 'relative');
         $(cloned).find(".rname").text(namesArray[7]);
         $(cloned).find(".rprice").text(pricesArray[7]);
         $(cloned).find(".inp").val(localStorage.getItem(namesArray[7]));
         $(cloned).find(".side-img").html(img);
         cloned.appendTo(".bin-2");
      }
   }

   $("#finalSum").html(localStorage.getItem("sumPrice"));

   $(".home").click(function(){
      window.location.href='http://localhost:63342/GamesStore/index.html?_ijt=1li6h3kquoi526a843ub59ncam#';
   });

   $(".news").click(function(){
      window.location.href='http://localhost:63342/GamesStore/Гайм%20шоп/News.html?_ijt=8glf1bpju3hm35efnm60e625o6';
   });



   var todaysDate=new Date();
   var currentDate=new Date();
   startTime();
   createCalendar('calendar2', new Date());
   var amount =0;

   if(localStorage.getItem("am")){
      amount = localStorage.getItem("am");
   }


   ///////////
   var numbers=[];
   for(var c=0; c<localStorage.getItem("am"); c++)
      numbers.push(localStorage.getItem(c));
   if(numbers[0]!=null)
   for(var c=0; c<numbers.length; c++)
      alert(numbers[c]);
   ////////////




   $("#name").hide();
   $("#name2").hide();
   $("#name3").hide();
   $("#name4").hide();
   $("#sendNumber").hide();


   $(".buttonLeft").click(function () {
      currentDate.setMonth(currentDate.getMonth()+1);
      createCalendar('calendar2', currentDate);
   });
   $(".buttonRight").click(function () {
      currentDate.setMonth(currentDate.getMonth()-1);
      createCalendar('calendar2', currentDate);
   });

   $("#inputName").keyup(function () {
      var text = $("#inputName").val();
      if (text.charAt(text.length-1)!=" ") {
         if (!(text.charAt(text.length - 1) >= 'А' && text.charAt(text.length - 1) <= 'я')) {
            $("#inputName").css("backgroundColor", "lightcoral");
            $("#inputName").val(text.substring(0, text.length - 1)) ;
            $("#name").show();

         } else {
            $("#inputName").css("backgroundColor", "lightgreen");
            $("#name").hide();
         }
      }

   });
   $("#inputName2").keyup(function () {
      var text = $("#inputName2").val();
      if (text.charAt(text.length-1)!=" ") {
         if (!(text.charAt(text.length - 1) >= 'А' && text.charAt(text.length - 1) <= 'я')) {
            $("#inputName2").css("backgroundColor", "lightcoral");
            $("#inputName2").val(text.substring(0, text.length - 1)) ;
            $("#name2").show();

         } else {
            $("#inputName2").css("backgroundColor", "lightgreen");
            $("#name2").hide();
         }
      }

   });

   $("#inputName3").keyup(function () {
      var text = $("#inputName3").val();
     for(var i=0; i<text.length; i++){
       if(text.charAt(i)=='@'){
          $("#name3").hide();
          $("#inputName3").css("backgroundColor", "lightgreen");

          return;
       }
     }
      $("#name3").show();
      $("#inputName3").css("backgroundColor", "lightcoral");

   });

   $("#inputName4").keyup(function () {
      var text =  $("#inputName4").val();


      if ((text.length == 10 && text.charAt(0) == '0')) {
         var correct = true;
         for (var c = 0; c < text.length; c++)
            if (text.charAt(c) < 0 || text.charAt(c) > 9)
               correct = false;
         if(correct)
            $("#inputName4").css("backgroundColor", "lightgreen");
      } else if ((text.length == 13 && text.charAt(0) == '+')) {
         var correct = true;
         for (var c = 0; c < text.length; c++)
            if (text.charAt(c) < 0 || text.charAt(c) > 9)
               correct = false;
         if(correct)
            $("#inputName4").css("backgroundColor", "lightgreen");
         $("#name4").hide();
      }
      else{
         $("#inputName4").css("backgroundColor", "lightcoral");
         $("#name4").show();
      }

   });




   $("#inputName5").keyup(function () {
      var text =  $("#inputName5").val();


      if ((text.length == 10 && text.charAt(0) == '0')) {
         var correct = true;
         for (var c = 0; c < text.length; c++)
            if (text.charAt(c) < 0 || text.charAt(c) > 9)
               correct = false;
         if(correct) {
            $("#inputName5").css("backgroundColor", "lightgreen");
            $("#sendNumber").show();
         }
      } else if ((text.length == 13 && text.charAt(0) == '+')) {
         var correct = true;
         for (var c = 1; c < text.length; c++)
            if (text.charAt(c) < 0 || text.charAt(c) > 9)
               correct = false;
         if(correct)
            $("#inputName5").css("backgroundColor", "lightgreen");
         $("#sendNumber").show();
      }
      else{
         $("#inputName5").css("backgroundColor", "lightcoral");
      }

   });
   $("#sendNumber").click(function () {
      localStorage.setItem("am", amount+1);
      localStorage.setItem(amount++,  $("#inputName5").val());
      alert("we will call you soon");
   });


   var currentPoint;
   var cond=1;
   var point, point2, point3;
   $("#Choice1").click();
   $("#Choice1").click(function () {
    cond=1;
   });
   $("#Choice2").click(function () {
      cond=2;
   });
   $("#Choice3").click(function () {
      cond=3;
   });



   ///////////////////////////////////////////////////////////////////






   function	initialize()	{
//Тут починаємо працювати з картою
      var mapProp =	{
         center:	new	google.maps.LatLng(50.464379,30.519131),
         zoom:	10
      };
      var map=new google.maps.Map(document.getElementById("#googleCart"), mapProp);
      point	=	new	google.maps.LatLng(50.464379,30.519131);
      point2	=	new	google.maps.LatLng(48.13296993,30.88080883);
      point3=new	google.maps.LatLng(47.50359592,35.40115362);
      var marker	=	new	google.maps.Marker({
         position:	point,
         map:	map
      });
      var marker2	=	new	google.maps.Marker({
         position:	point2,
         map:	map
      });
      var marker3	=	new	google.maps.Marker({
         position:	point3,
         map:	map
      });
      var directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);
      function	geocodeLatLng(latlng,	 callback){
         //Модуль за роботу з адресою
         var geocoder	=	new	google.maps.Geocoder();
         geocoder.geocode({'location':	latlng},	function(results,	status)	{
            if	(status	===	google.maps.GeocoderStatus.OK&&	results[1])	{
               var adress =	results[1].formatted_address;
               callback(null,	adress);
            }	else	{
               callback(new	Error("Can't	find	adress"));
            }
         });
      }



      function	calculateRoute(A_latlng,	 B_latlng,	callback)	{
         var directionService =	new	google.maps.DirectionsService();
         directionService.route({
            origin:	A_latlng,
            destination:	B_latlng,
            travelMode:	google.maps.TravelMode["DRIVING"]
         },	function(response,	status)	{
            if	(	status	==	google.maps.DirectionsStatus.OK )	{
               directionsDisplay.setDirections(response);
               var leg	=	response.routes[	0	].legs[	0	];
               callback(null,	{
                  duration:	leg.duration
               });
            }	else	{
               callback(new	Error("Can'	not	find	direction"));
            }
         });
      }



      var markern;
      var pointn;


      google.maps.event.addListener(map, 'click',function(me){
         var coordinates	=	me.latLng;

         geocodeLatLng(coordinates,	function(err,	adress){
            if(!err)	{
               $('#place').text(adress);
               $("#addr").val(adress);
               if(markern) {
                  markern.setMap(null);
               }
               pointn	=	new	google.maps.LatLng(coordinates.lat(),coordinates.lng());

               markern	=	new	google.maps.Marker({
                  position:	pointn,
                  map:	map
               });
              if(cond==1)
                 currentPoint=point;
               else if(cond==2)
                  currentPoint=point2;
              else if(cond==3)
                 currentPoint=point3;
               calculateRoute(currentPoint, pointn, function (err,duration) {
                  // debugger
                  if(!err){
                    $("#timeToTheGame").text("times remaining:"+duration.duration.text);
                  }
               });


            }	else	{
               alert("Немає адреси")
            }
         })
      });
   };
   google.maps.event.addDomListener(window,'load',initialize);











   function startTime()
   {
      var tm=new Date();
      var h=tm.getHours();
      var m=tm.getMinutes();
      var s=tm.getSeconds();
      m=checkTime(m);
      s=checkTime(s);
      $("#clock").text(h+":"+m+":"+s);
     setTimeout(startTime,1000);
   }
   function checkTime(i)
   {
      if (i<10)
      {
         i="0" + i;
      }
      return i;
   }
   function getWeekDay(date) {
      var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

      return days[date.getDay()];
   }
   function daysInMonth(date) {
      //why it is incorrect?
      if(date.getMonth()==1){

         if(date.getFullYear()%4==0)
            return 29;
         return 28;
      }
      else if(date.getMonth()==0||date.getMonth()==2||date.getMonth()==4||date.getMonth()==6||date.getMonth()==7||date.getMonth()==9||date.getMonth()==11)
         return 31;
      return 30;

   }
   function createCalendar(id, date){
      var elem =document.getElementById(id);
      var days = [ 'пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];

      var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
     var i=0;
     var d2=new Date(date);
     d2.setDate(1);
      while(days[i++]!=getWeekDay(d2)) {
         table+= '<td></td>';
      }

      for(var j=1; j<=daysInMonth(date); j++) {

         if(j==date.getDate()&&date.getMonth()==todaysDate.getMonth()&&date.getFullYear()==todaysDate.getFullYear())
            table += '<td style="background-color: orange; border: 3px solid red" >' + j + '</td>';
         else table += '<td>' + j + '</td>';
         if(i%7==0){
            table += '</tr><tr>';
         }
         i++;
      }
      i--;
      while(i%7!=0) {
         table +='<td></td>';
         i++;
      }
     elem.innerHTML=table;
   }
});