$(document).ready(function() {
  let toDoActivities = [];
  let doneActivities = [];
  let inProcessActivities = [];

  class Activities {
    constructor(activity) {
      this.activity = activity;
    }
  }

  verifyLocalStorage();

  $("#activity").on({
    keypress: function(e) {
      if (e.key === "Enter") {
        introduceActivity();
      }
    }
  });
  $("#addBtn").click(function() {
    introduceActivity();
  });

  function introduceActivity() {
    introduceToDoActivity($("#activity").val());
    createToDoActivitiesBtnsEvent(1);
    $("#activity").val("");
  }

  function displayActivity(type, activity) {
    let toDoActivitiesContainer = $("#toDoActivitiesContainer");
    let doneActivitiesContainer = $("#doneActivitiesContainer");
    let inProcessActivitiesContainer = $("#inProcessActivitiesContainer");
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
    if (type === 1) {
      $(divContainer).addClass("toDoActivity flex");
      toDoActivitiesContainer.append($(divContainer));
    } else if (type === 2) {
      $(divContainer).addClass("doneActivity flex");
      doneActivitiesContainer.append($(divContainer));
    } else if (type === 3) {
      $(divContainer).addClass("inProcessActivity flex");
      inProcessActivitiesContainer.append($(divContainer));
    }
  }

  function verifyLocalStorage() {
    if (localStorage.getItem("toDoActivities") != null) {
      let jsonArrToDoActivities = localStorage.getItem("toDoActivities");
      toDoActivities = JSON.parse(jsonArrToDoActivities);
      for (let i = 0; i < toDoActivities.length; i++) {
        displayActivity(1, toDoActivities[i].activity);
      }
      createToDoActivitiesBtnsEvent(1);
    }
    if (localStorage.getItem("doneActivities") != null) {
      let jsonArrDoneActivities = localStorage.getItem("doneActivities");
      doneActivities = JSON.parse(jsonArrDoneActivities);
      for (let i = 0; i < doneActivities.length; i++) {
        displayActivity(2, doneActivities[i].activity);
      }
      createToDoActivitiesBtnsEvent(2);
    }
    if (localStorage.getItem("inProcessActivities") != null) {
      let jsonArrInProcessActivities = localStorage.getItem(
        "inProcessActivities"
      );
      inProcessActivities = JSON.parse(jsonArrInProcessActivities);
      for (let i = 0; i < inProcessActivities.length; i++) {
        displayActivity(3, inProcessActivities[i].activity);
      }
      createToDoActivitiesBtnsEvent(3);
    }
  }

  function introduceToDoActivity(activity) {
    toDoActivities.push(new Activities(activity));
    localStorage.setItem("toDoActivities", JSON.stringify(toDoActivities));
    displayActivity(1, activity);
    createToDoActivitiesBtnsEvent(1);
  }

  function introduceInProcessDoneActivity(activity, type) {
    let activities;
    let activitiesName;
    if (type === 2) {
      activities = doneActivities;
      activitiesName = "doneActivities";
    } else if (type === 3) {
      activities = inProcessActivities;
      activitiesName = "inProcessActivities";
    }
    let toStringActivity = JSON.stringify(activities);
    if (toStringActivity.search(activity) === -1) {
      activities.push(new Activities(activity));
      toStringActivity = JSON.stringify(activities);
      localStorage.setItem(`${activitiesName}`, toStringActivity);
      displayActivity(type, activity);
      createToDoActivitiesBtnsEvent(type);
    }
  };

  function createToDoActivitiesBtnsEvent(type) {
    let selector;
    let typeSelector;
    let typeActivity;
    if (type === 1) {
      typeSelector = "toDoActivitiesContainer";
      typeActivity = toDoActivities;
    } else if (type === 2) {
      typeSelector = "doneActivitiesContainer";
      typeActivity = doneActivities;
    } else if (type === 3) {
        typeSelector = "inProcessActivitiesContainer";
        typeActivity = inProcessActivities;
      }
    for (let i = 1; i <= 2; i++) {
      if (i === 1) {
        selector = `#${typeSelector} .done`;
      } else if (i === 2) {
        selector = `#${typeSelector} .delete`;
      }
      $(selector).off("click");
      $(selector).on({
        click: function() {
          let activity = $(this)
            .parent()
            .siblings()
            .text();
          let removeIndexValue = 0;
          //eliminar to do activity del DOM
          $(this)
            .parent()
            .parent()
            .remove();
          removeIndexValue = typeActivity.findIndex(function(element) {
            return element.activity === activity;
          });
          //eliminar to do activity del arreglo de actividades
          typeActivity.splice(removeIndexValue, 1);
          updateLocalStorage(type);
          if ($(this).hasClass("done") && type === 1) {
            //introduce to do activity a done activity
            introduceInProcessDoneActivity(activity, 3);
          } else if ($(this).hasClass("done") && type === 2) {
            introduceToDoActivity(activity);
          } else if ($(this).hasClass("done") && type === 3) {
            introduceInProcessDoneActivity(activity, 2);
          }
        }
      });
    }
  }

  function updateLocalStorage(type) {
    if (type === 1)
      localStorage.setItem("toDoActivities", JSON.stringify(toDoActivities));
    else if (type === 2)
      localStorage.setItem("doneActivities", JSON.stringify(doneActivities));
    else if (type === 3)
      localStorage.setItem("inProcessActivities", JSON.stringify(inProcessActivities));
  }
});
