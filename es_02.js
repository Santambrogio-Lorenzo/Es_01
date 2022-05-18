/*var count = 2;
      $("#btn1").click(calculation("+"));
          function calculation(segno) {
        count++;
        var n1 = +$("#N1").val();
        var n2 = +$("#N2").val();
        var res = n1 + n2;
        switch(segno){
            case "+":
             var res = n1 + n2;
             break;
             case "-":
                 var res = n1 - n2;
                 break;
                 case "/":
                     var res = n1 / n2;
                     break;
                     case "*":
                         var res = n1 * n2;
                         break;
     
                        }
    }
    */
    var count=3;
    $("#btn1").click(function(){
        var n1= +$("#N1").val();
        var n2= +$("#N2").val();
        var res=n1+n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>+</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });
    $("#btn2").click(function(){
        var n1=$("#N1").val();
        var n2=$("#N2").val();
        var res=n1-n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>-</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });
    $("#btn3").click(function(){
        var n1=$("#N1").val();
        var n2=$("#N2").val();
        var res=n1*n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>*</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });
    $("#btn4").click(function(){
        var n1=$("#N1").val();
        var n2=$("#N2").val();
        var res=n1/n2;
        console.log (res);
        $("#table").append("<tr><td>"+count+"</td><td>"+n1+"</td><td>/</td><td>"+n2+"</td><td>"+res+"</td></tr>");
        count ++;
    });