function FirstElement()
{
    var x = document.getElementById("FirstElement");
        x.style.color = "blue";
}

function SecondElement()
{
    var x = document.getElementById("SecondElement")
        x.innerHTML = "This text was set from a script";
}

function ThirdElement()
{
    var x = document.getElementById("ThirdElement")
        x.style.fontFamily = "TimesNewRoman";
        x.style.fontSize = "larger";
}

function Footer(){   
    var newsSources = [
        "http://www.foxnews.com/", 
        "http://thefederalist.com/", 
        "https://twitchy.com/"];

    var x = document.getElementById("Footer")
        x.innerHTML = newsSources;
}

function Name()
{
    var first = document.getElementById("FirstName").value;
    var last = document.getElementById("LastName").value;

    var name = "Hi, "+ first + " " + last + "!";

    document.getElementById("FullName").innerHTML = name;
}