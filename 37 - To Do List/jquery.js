$(document).ready(function(){
    let toDoActivities = [];
    let doneActivities = [];

    class Activities{
        constructor(activity){
            this.activity = activity;
        }
    };

     verifyLocalStorage();

    $("#activity").on({
        "keypress":function(e){
            if(e.key === "Enter"){
                let activity = $("#activity").val();
                introduceToDoActivity(activity);
                createDoneBtnsEvent();
            }
        }
    });
    $("#addBtn").click(function(){
        introduceToDoActivity($("#activity").val());
        createDoneBtnsEvent();
    });

    function displayActivity(type,activity){
        let toDoActivitiesContainer = $("#toDoActivitiesContainer");
        let doneActivitiesContainer = $("#doneActivitiesContainer");
        let divContainer = document.createElement("div");
        let pElement = document.createElement("p");
        let divElement = document.createElement("div");
        let btnDelete = document.createElement("button");
        let btnDone = document.createElement("button");
        let trashIcon = document.createElement("i");
        let doneIcon = document.createElement("i");
        $(divElement).addClass("options");
        $(btnDelete).addClass("delete");
        $(btnDone).addClass("done");
        $(trashIcon).addClass("far fa-trash-alt");
        $(doneIcon).addClass("far fa-check-circle");
        $(btnDelete).append($(trashIcon));
        $(btnDone).append($(doneIcon));
        $(divElement).append($(btnDelete));
        $(divElement).append($(btnDone));
        $(pElement).text(activity);
        $(divContainer).append($(pElement));
        $(divContainer).append($(divElement));
        if(type === 1){
            $(divContainer).addClass("toDoActivity");
            toDoActivitiesContainer.append($(divContainer));
        }else if(type === 2){
            $(divContainer).addClass("doneActivity");
            doneActivitiesContainer.append($(divContainer));
        }
    };

    function verifyLocalStorage(){
        if(localStorage.getItem("toDoActivities") != null){
            let jsonArrToDoActivities = localStorage.getItem("toDoActivities");
            toDoActivities = JSON.parse(jsonArrToDoActivities);
            for(let i = 0; i < toDoActivities.length; i++){
                displayActivity(1,toDoActivities[i].activity);
            }
        }
        if(localStorage.getItem("doneActivities") != null){
            let jsonArrDoneActivities = localStorage.getItem("doneActivities");
            doneActivities = JSON.parse(jsonArrDoneActivities);
            for(let i = 0; i < doneActivities.length; i++){
                displayActivity(2,doneActivities[i].activity);
            }
        }
        createDoneBtnsEvent()
    };

    function introduceToDoActivity(activity){
        toDoActivities.push(new Activities(activity));
        localStorage.setItem("toDoActivities", JSON.stringify(toDoActivities));
        displayActivity(1,activity);
    };

    function introduceDoneActivity(doneActivity){
        doneActivities.push(new Activities(doneActivity));
        localStorage.setItem("doneActivities", JSON.stringify(doneActivities));
        displayActivity(2,doneActivity);
    };

    function createDoneBtnsEvent(){
        $("#toDoActivitiesContainer .done").click(function(){
            let doneActivity = $(this).parent().siblings().text();
            introduceDoneActivity(doneActivity);
        });
    }

    // function deleteToDoActivity(){

    // }
    
});