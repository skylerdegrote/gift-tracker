//client side


$(document).ready(function(){
    //this is where the ajax call will go
    //interactive stuff
    //BASICALLY this is the normal javascript file!


    //$("#inputForm").submit(function(event){
    //    event.preventDefault();
    //    var formData = $("#inputForm").serialize();
    //    console.log(formData);
    $.ajax({
        type: "POST",//sends data to the server
        url: "/requests",
        data: formData,
        success: function(data){
            getData();
            console.log(data);
        }
    });
    //});
    //getData();

});