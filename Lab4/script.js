function quiz_json(form) {
    var json = {
        "bird": form.bird.value,
        "capital": form.capital.value,
        "established": form.established.value
    };

    var text = JSON.stringify(json, 0, 4);
    document.getElementById("output").innerHTML = text;
    return false;
}