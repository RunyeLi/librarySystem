
var userModule = user();
var eventTrackerModule = eventTracker();

document.getElementById("Add_Users").addEventListener("click", function(){
    selectContentToDisplay("ADD_USER");
});

document.getElementById("User's_Details").addEventListener("click", function(){
    selectContentToDisplay("USER_DETAIL");
});

document.getElementById("Update_Users").addEventListener("click", function(){
    selectContentToDisplay("UPDATE_USER");
});

document.getElementById("Remove_Users").addEventListener("click", function(){
    selectContentToDisplay("REMOVE_USER")
});

document.getElementById("Add_Books").addEventListener("click", function(){
    selectContentToDisplay("ADD_BOOK");
});

document.getElementById("Book's_Details").addEventListener("click", function(){
    selectContentToDisplay("BOOK_DETAIL");
});

document.getElementById("Remove_Books").addEventListener("click", function(){
    selectContentToDisplay("REMOVE_BOOK");
});

document.getElementById("Loan_Books").addEventListener("click", function(){
    selectContentToDisplay("LOAN_BOOK");
});

document.getElementById("Current_Loans").addEventListener("click", function(){
    selectContentToDisplay("CURRENT_LOAN");
});

document.getElementById("Borrow_Books").addEventListener("click", function(){
    selectContentToDisplay("BORROW_BOOK");
});

document.getElementById("Finish_Work").addEventListener("click", function(){
    location.reload();
});

const contentContainer = document.getElementById("content_container");
function selectContentToDisplay(name){
    eventTrackerModule.removeActiveEventListeners(); 
    switch (name){
        case "ADD_USER" :
            // userModule.removeActiveEventListeners();
            userModule.addUserContent(contentContainer, eventTrackerModule);
            break;
        case "USER_DETAIL" :
            // userModule.removeActiveEventListeners();
            console.log(name);
            userModule.updateUserContent(contentContainer, eventTrackerModule);
            break;
        case "UPDATE_USER" :
            console.log(name);
            break;
        case "REMOVE_USER" :
            // userModule.removeActiveEventListeners();
            contentContainer.innerHTML = "<H3> Remove User </H3>";
            break;
        case "ADD_BOOK" :
            console.log(name);
            break;
        case "BOOK_DETAIL" :
            console.log(name);
            break;
        case "REMOVE_BOOK" :
            console.log(name);
            break;
        case "LOAN_BOOK" :
            console.log(name);
            break;
        case "CURRENT_LOAN" :
            console.log(name);
            break;
        case "BORROW_BOOK" :
            console.log(name);
            break;
        default :
            break;
    }
}

