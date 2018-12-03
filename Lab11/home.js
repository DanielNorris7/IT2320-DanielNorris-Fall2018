
$(function(){

//jQuery code goes here
    $("#btn1").on("click", function(){
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags="
                    +$("#photosearch").val();   
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){
              console.log(data);             
              $.each(data.items, function(i, item){                
                var img = $("<img></img>");
                img.attr("src",item.media.m);
                $("#flikrresults").append(img);
              });              
           }
         });
    });

    $("#btn2").on("click", function(){
        //Go to https://www.petfinder.com/developers/api-key to get an api key
        //Add the API key to the URL
        //PetFinder API Key 551b527add03634ac3a95a7a967367e6
        //PetFinder API Secret 6a5a2731d31fb44b2d2303c7686c5278
        
        const key = "551b527add03634ac3a95a7a967367e6";           
        var animal = $("#breedsearch").val();
        var url = "http://api.petfinder.com/breed.list?format=json&key="+key+"&callback=?&animal="+animal+"&format=json";
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){              
              console.log(data);
              $("ul").remove();
              var ul = $("<ul>Breeds</ul>");
              $("#breedresults").after(ul);
              
              $.each(data.petfinder.breeds.breed,function(i,breed){                  
                    var li = $("<li></li>").text(breed.$t);
                    $("ul").append(li);
              });                      
            }                     

         });//ajax  
    });  //btn click

    $("#findPetBtn").on("click", function(){        
        const apiKey = "551b527add03634ac3a95a7a967367e6";

        var queryParam = [];

        var animalValue = $("#animal").val() !== "" ? queryParam.push("&animal="+animalValue) : null;

        var breedValue = $("#breed").val() !== "" ? queryParam.push("&breed="+breedValue) : null; 

        var sizeValue = $("#size").val() !== "" ? queryParam.push("&size="+sizeValue) : null;

        var sexValue = $("#sex").val() !== "" ? queryParam.push("&sex="+sexValue) : null;

        var locationValue = $("#location").val() !== "" ? queryParam.push("&location="+locationValue) : null; 

        var ageValue = $("#age").val() !== "" ? queryParam.push("&age="+ageValue) : null;

        var offsetValue = $("#offset").val() !== "" ? offsetValue : "baisc";
        // Defines the default value if one isn't present and adds it to the array
        // PetFinders API defaults the offset value to basic for the pet.find method
        queryParam.push("&offset="+offsetValue);

        var countValue = $("#count").val() !== "" ? countValue : 25;
        // Defines the default value if one isn't present and adds it to the array 
        // PetFinders API defaults the count value to 25 and adds it to the array
        queryParam.push("&count="+countValue);

        console.log(queryParam.values);

        //var queryString = "&animal="+animalValue+"?&breed="+breedValue+"?&size="+sizeValue+"?&sex="+sexValue+"?&location="+locationValue+"?&age="+ageValue+"?&count="+countValue+"?&offset="+offsetValue;

        var url = "http://api.petfinder.com/pet.find?format=json&key="+apiKey+"&callback=?"+queryParam.join("")+"&format=json";
        //var url = "http://api.petfinder.com/pet.find?format=json&key="+apiKey+"&callback=?"+queryString+"&format=json";
       
        $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){              
              console.log(data);            
            //   $("ul").remove();
            //   var ul = $("<ul>Breeds</ul>");
            //   $("#petResults").after(ul);
              
            //   $.each(data.petfinder.breeds.breed,function(i,breed){                  
            //         var li = $("<li></li>").text(breed.$t);
            //         $("ul").append(li);
            //   });                      
            }                     

         });//ajax  
    });  //btn click
   
})