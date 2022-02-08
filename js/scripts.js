$(document).ready(()=>
    $("#form").submit((event)=>{
        event.preventDefault();
        const firstInput = $("#input1").val();
        const secondInput = $("#input2").val();
        const thirdInput = $("#input3").val();
        const arr =[];

        arr.push(firstInput);
        arr.push(secondInput);
        arr.push( thirdInput);
        arr.reverse();

       arr.forEach(function(elements){
        $("#display").prepend("<li> My favourite Ice cream flavour is <b>"+ elements+"</b> Flavour</li>")
       })


    }
    
    
    )
)