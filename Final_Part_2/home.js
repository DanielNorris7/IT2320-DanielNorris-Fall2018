
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

        // Values will only be added to the array if the value is NOT ""
        // Keeps unneed parameters out of the query URL
        var queryParam = [];

        $("#animal").val() != "" ? queryParam.push("&animal="+$("#animal").val()) : "";

        $("#breed").val() != "" ? queryParam.push("&breed="+$("#breed").val()) : ""; 

        $("#size").val() != "" ? queryParam.push("&size="+$("#size").val()) : "";

        $("#sex").val() != "" ? queryParam.push("&sex="+$("#sex").val()) : "";

        $("#location").val() != "" ? queryParam.push("&location="+$("#location").val()) : ""; 

        $("#age").val() != "" ? queryParam.push("&age="+$("#age").val()) : "";

        console.log(queryParam.values);

        var url = "http://api.petfinder.com/pet.find?format=json&key="+apiKey+"&callback=?"+queryParam.join("")+"&format=json";
       
        $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data)
           {              
              console.log(data);            
              $("ul").remove();
              var ul = $("<ul>Pets</ul>");
              $("#petResults").after(ul);
              
              $.each(data.petfinder.pets.pet,function(i,pet)
              {                  
                    var li = $("<li></li>").text(pet.name.$t).text(pet.description.$t);
                    $("ul").append(li);
              });                      
            }                     

         });//ajax  
    });  //btn click

    $("#findLocalShelter").on("click", function(){        
        const apiKey = "551b527add03634ac3a95a7a967367e6";

        // Values will only be added to the array if the value is NOT ""
        // Keeps unneed parameters out of the query URL
        var queryParam = [];

        $("#localShelterZip").val() != "" ? queryParam.push("&location="+$("#localShelterZip").val()) : ""; 

        console.log(queryParam.values);

        var url = "http://api.petfinder.com/shelter.find?format=json&key="+apiKey+"&callback=?"+queryParam.join("")+"&format=json";
       
        $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data)
           {              
              console.log(data);            
              $("ul").remove();
              var ul = $("<ul>Local Shelters:</ul>");
              $("#localShelters").after(ul);
              
              $.each(data.petfinder.shelters.shelter,function(i,shelter)
              {                  
                    var li = $("<li></li>").text(shelter.city.$t).text(shelter.name.$t);
                    $("ul").append(li);
              });                      
            }                     

         });//ajax  
    });  //btn click
   
})