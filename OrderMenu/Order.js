$(function () {
   var todaysDate=new Date();
   var currentDate=new Date();
   startTime();
   createCalendar('calendar2', new Date());

   $(".buttonLeft").click(function () {
      currentDate.setMonth(currentDate.getMonth()+1);
      createCalendar('calendar2', currentDate);
   });
   $(".buttonRight").click(function () {
      currentDate.setMonth(currentDate.getMonth()-1);
      createCalendar('calendar2', currentDate);
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