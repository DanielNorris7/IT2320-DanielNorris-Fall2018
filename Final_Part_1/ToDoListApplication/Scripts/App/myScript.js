$(function () {
    /* There are 4 functions in the TasksController that you have to bind using jQuery ajax
     *
     * Name="ExpiredTasks"
     * URL="/Tasks/ExpiredTasks"
     * Type = "GET"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will return tasks that are in the past => earlier than today's date
     * To do: Call this method when the "ExpiredTasks" button is clicked.
     * Display expired tasks in the div with id="results"*/
    $("#ExpiredTasks").on("click", function () {
        var url = "/Tasks/ExpiredTasks";

        $.get(url, function (data) {
            console.log(data);

            $.each(data, function (t, task) {
                var para = $("<p></p>").text(task.Id + " " + " " + task.Title);
                $("#results").append(para);
            });
        });
    });

    /* Name="DeleteExpiredTasks"
    * URL="/Tasks/DeleteExpiredTasks"
    * Type= "POST"
    * Input parameter = None
    * Returns JSON
    * Goal: This method will delete tasks older than today
    * To do: Call this method when the "DeleteExpiredTasks" button is clicked.
    * Display "count" and "status" in the div with id="results"*/
    $("#DeleteExpiredTasks").on("click", function () {
        var url = "/Tasks/DeleteExpiredTasks";

        $.post(url, function (data) {
            console.log(data);

            var para = $("<p></p>").text("DELETED: " + data.count + " " + data.status);
            $("#results").append(para);
        });

        $(".HideOnDelete").hide();
        $(".table").hide();
    });

    /* Name="UrgentTasks"
    * URL="/Tasks/UrgentTasks"
    * Type = "GET"
    * Input parameter called as "nbr" will be an integer that indicates number of days
    * Returns JSON
    * Goal: This method will return tasks that are due in the next "nbr" days from today
    * To do: Call this method when the "UrgentTasks" button is clicked.
    * Display urgent tasks in the div with id="results2"*/
    $("#UrgentTasks").on("click", function () {
        var searchString = $("#NbrOfDays").val();
        var url = "/Tasks/UrgentTasks";

        $.get(url, { "n": searchString }, function (data) {
            console.log(data);

            $.each(data, function (t, task) {
                var para = $("<p></p>").text("Urgent: " + task.Id + " " + task.Title);
                $("#results2").append(para);
            });
        });
    });

    /* Name="SearchByCategory"
    * URL="/Tasks/SearchByCategory"
    * Type = "GET"
    * Input parameter called as "searchstring" will be a string that indicates number of days
    * Returns JSON
    * Goal: This method will return tasks that are due in the next "nbr" days from today
    * To do: Call this method when the "SearchByCategory" button is clicked.
    * Display tasks that match the category in the div with id="results3"*/
    $("#SearchByCategory").on("click", function () {
        var searchString = $("#Search").val();
        var url = "/Tasks/SearchByCategory";

        $.get(url, { "s": searchString}, function (data) {
            console.log(data);

            $.each(data, function (t,task) {
                var para = $("<p></p>").text(task.Id + " " + task.Title);
                $("#results3").append(para);
            });
        });
    });
});     