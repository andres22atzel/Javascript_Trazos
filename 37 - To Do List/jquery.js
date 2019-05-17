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
    createDraggableEvents(1);
  }

  function displayActivity(type, activityDisplay) {
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
    let btnInProcess = document.createElement("button");
    let inProcessIcon = document.createElement("i");
    let tooltipDelete = document.createElement("span");
    let tooltipInProcess = document.createElement("span");
    let tooltipDone = document.createElement("span");
    $(tooltipDelete).addClass("tooltiptext");
    $(tooltipDelete).text("Borrar");
    $(tooltipInProcess).addClass("tooltiptext");
    $(tooltipInProcess).text("En Proceso");
    $(tooltipDone).addClass("tooltiptext");
    $(tooltipDone).text("Completado");
    $(divElement).addClass("options");
    $(btnDelete).addClass("delete");
    $(btnDone).addClass("done");
    $(trashIcon).addClass("far fa-trash-alt");
    $(doneIcon).addClass("far fa-check-circle");
    $(btnDelete).append($(trashIcon));
    $(btnDelete).append($(tooltipDelete));
    $(btnDone).append($(doneIcon));
    $(btnDone).append($(tooltipDone));
    $(divElement).append($(btnDelete));
    if(type === 1){
      $(btnInProcess).addClass("inProcess");
      $(inProcessIcon).addClass("fas fa-sync-alt");
      $(btnInProcess).append($(inProcessIcon));
      $(btnInProcess).append($(tooltipInProcess));
      $(divElement).append($(btnInProcess));
    }
    $(divElement).append($(btnDone));
    $(pElement).text(activityDisplay);
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
      createDraggableEvents(1);
    }
    if (localStorage.getItem("doneActivities") != null) {
      let jsonArrDoneActivities = localStorage.getItem("doneActivities");
      doneActivities = JSON.parse(jsonArrDoneActivities);
      for (let i = 0; i < doneActivities.length; i++) {
        displayActivity(2, doneActivities[i].activity);
      }
      createToDoActivitiesBtnsEvent(2);
      createDraggableEvents(2);
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
      createDraggableEvents(3);
    }
  }

  function introduceToDoActivity(activityToDo) {
    toDoActivities.push(new Activities(activityToDo));
    localStorage.setItem("toDoActivities", JSON.stringify(toDoActivities));
    displayActivity(1, activityToDo);
    createToDoActivitiesBtnsEvent(1);
    console.log("entro todo")
    console.log(activityToDo);
  }

  function introduceInProcessDoneActivity(activityInDone, type) {
    let activities;
    let activitiesName;
    console.log("entro inprocessdone")
    console.log(activityInDone);
    if (type === 2) {
      activities = doneActivities;
      activitiesName = "doneActivities";
    } else if (type === 3) {
      activities = inProcessActivities;
      activitiesName = "inProcessActivities";
    }
    let toStringActivity = JSON.stringify(activities);
    if (toStringActivity.search(activityInDone) === -1) {
      activities.push(new Activities(activityInDone));
      toStringActivity = JSON.stringify(activities);
      localStorage.setItem(`${activitiesName}`, toStringActivity);
      displayActivity(type, activityInDone);
      createToDoActivitiesBtnsEvent(type);
    }
  };

  function createToDoActivitiesBtnsEvent(type) {
    let selector;
    let typeSelector;
    let typeActivity;
    let numIcon = 0;
    if (type === 1) {
      typeSelector = "toDoActivitiesContainer";
      typeActivity = toDoActivities;
      numIcon = 3;
    } else if (type === 2) {
      typeSelector = "doneActivitiesContainer";
      typeActivity = doneActivities;
      numIcon = 2;
    } else if (type === 3) {
        typeSelector = "inProcessActivitiesContainer";
        typeActivity = inProcessActivities;
        numIcon = 2;
    }
    for (let i = 1; i <= numIcon; i++) {
      if (i === 1) {
        selector = `#${typeSelector} .done`;
      } else if (i === 2) {
        selector = `#${typeSelector} .delete`;
      }
      else if (i === 3) {
        selector = `#${typeSelector} .inProcess`;
      }
      $(selector).off("click");
      $(selector).on({
        click: function() {
          let activity = $(this)
            .parent()
            .siblings()
            .text();
          moveActivity($(this),typeActivity,type);
          if ($(this).hasClass("done") && type === 1) {
            //introduce to do activity a done activity
            introduceInProcessDoneActivity(activity, 2);
          } else if ($(this).hasClass("done") && type === 2) {
            introduceToDoActivity(activity);
          } else if ($(this).hasClass("done") && type === 3) {
            introduceInProcessDoneActivity(activity, 2);
          } else if ($(this).hasClass("inProcess") && type === 1){
            introduceInProcessDoneActivity(activity, 3);
          }
        }
      });
    }
  };

  function moveActivity(activityObject, typeActivity, type){
    let activity = $(activityObject)
    .parent()
    .siblings()
    .text();
    let uiParent = $(activityObject).parent().attr("id");
    let removeIndexValue = 0;
          //eliminar to do activity del DOM
          $(activityObject)
            .parent()
            .parent()
            .remove();
          removeIndexValue = typeActivity.findIndex(function(element) {
            return element.activity === activity;
          });
          //eliminar to do activity del arreglo de actividades
          typeActivity.splice(removeIndexValue, 1);
          console.log(typeActivity);
          if(uiParent === "toDoActivitiesContainer"){
            toDoActivities = typeActivity;
          }else if(uiParent === "inProcessActivitiesContainer"){
            inProcessActivities = typeActivity;
          }else if(uiParent === "doneActivitiesContainer"){
            doneActivities = typeActivity;
          }
          updateLocalStorage(type);
  };

  function updateLocalStorage(type) {
    if (type === 1)
      localStorage.setItem("toDoActivities", JSON.stringify(toDoActivities));
    else if (type === 2)
      localStorage.setItem("doneActivities", JSON.stringify(doneActivities));
    else if (type === 3)
      localStorage.setItem("inProcessActivities", JSON.stringify(inProcessActivities));
  };

  function draggableObjectSearch(ui){
    let uiParent = ui.parent().attr("id");
    let type;
    let typeActivity;
    if(uiParent === "toDoActivitiesContainer"){
      type = 1;
      typeActivity = toDoActivities;
    }else if(uiParent === "inProcessActivitiesContainer"){
      type = 3;
      typeActivity = inProcessActivities;
    }else if(uiParent === "doneActivitiesContainer"){
      type = 2;
      typeActivity = doneActivities;
    }
    return [type, typeActivity];
  }

  $("#toDoContainer").droppable({
    drop:function(event,ui){
      let selfType = 1;
      let arrangeParent = ui.draggable.children();
      let searchResult = draggableObjectSearch(ui.draggable);
      moveActivity(arrangeParent[1],searchResult[1],searchResult[0]);
      introduceToDoActivity($(arrangeParent[0]).text());
      createDraggableEvents(searchResult[0]);
      createDraggableEvents(selfType);
    }
  });

  $("#inProcessContainer").droppable({
    drop:function(event,ui){
      let selfType = 3;
      let arrangeParent = ui.draggable.children();
      let searchResult = draggableObjectSearch(ui.draggable);
      console.log(ui.draggable);
      console.log($(".toDoActivity"));
      console.log($(arrangeParent[0]).text())
      moveActivity(arrangeParent[1],searchResult[1],searchResult[0]);
      introduceInProcessDoneActivity($(arrangeParent[0]).text(), selfType);
      createDraggableEvents(searchResult[0]);
      createDraggableEvents(selfType);
      // console.log(searchResult[1]);
    }
  });

  $("#doneContainer").droppable({
    drop:function(event,ui){
      let selfType = 2;
      let arrangeParent = ui.draggable.children();
      let searchResult = draggableObjectSearch(ui.draggable);
      moveActivity(arrangeParent[1],searchResult[1],searchResult[0]);
      introduceInProcessDoneActivity($(arrangeParent[0]).text(), selfType);
      createDraggableEvents(searchResult[0]);
      createDraggableEvents(selfType);

    }
  });

function createDraggableEvents(type){
  let selector;
  if(type === 1){
    selector = ".toDoActivity";
  }else if(type === 3){
    selector = ".inProcessActivity";
  }if(type === 2){
    selector = ".doneActivity";
  }

  
  $(selector).draggable({
    start:function(){
      $(this).css("z-index","10");
      $(this).siblings().css("z-index","0")
    },
    axis:"y",
    revert: 'invalid'
  });
}

});

