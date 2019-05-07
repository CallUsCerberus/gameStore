var pricesArray = [1200, 1500, 900, 1050, 650, 850, 1000, 1300];
var amountArray = [0, 0, 0, 0, 0, 0, 0, 0];
var namesArray = ["Devil May Cry 5(ПК)", "Devil May Cry 5(Консоль)", "Sekiro: Shadows Die Twice(ПК)",
   "Sekiro: Shadows Die Twice(Консоль)", "Assassin`s Creed : Odyssey(ПК)", "Assassin`s Creed : Odyssey(Консоль)",
   "Mortal Combat 11(ПК)", "Mortal Combat 11(Консоль)"
];
var srcArray = [$(".img-1").html(), $(".img-2").html(), $(".img-3").html(), $(".img-4").html()];
$(function () {
   var price = localStorage.getItem("sumPrice");
   alert(price);
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


   var todaysDate=new Date();
   var currentDate=new Date();
   startTime();
   createCalendar('calendar2', new Date());

   $("#name").hide();
   $("#name2").hide();

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
      alert(text);
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
      alert(text);
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



   ///////////////////////////////////////////////////////////////////


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