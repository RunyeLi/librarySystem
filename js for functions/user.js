// javascript module pattern
// javascript closure
var user = function(){
    // private

    // add user html string
    // a required attribute. 
    // In browsers that support HTML5 form validation, 
    // this will prevent the form from being submitted 
    // until all the fields have been completed.
    let addUserHtml =
        `
            <h2>Add a User</h2>
            <form id="addUser" >
                <label>Name:</label>
                <br>
                <input type="text" name="uName" id="uName">
                <br><br>
                <label>Barcode:</label>
                <br>
                <input type="text" name="barcode" id="barcode">
                <br><br>
                <label>Member Type:</label>
                <br>
                <input type="radio" name="memberType" id="staff" value="staff">
                <label>Staff</label>
                <input type="radio" name="memberType" id="student" value="student">
                <label>Student</label>
                <br><br>
                <input type="submit" value="Add a User" id="submit">
            </form> 
        `;

    function getValue(){
        if(document.getElementById("staff").checked == true){
            return document.getElementById("staff").value; 
        }else if(document.getElementById("student").checked == true){
            return document.getElementById("student").value; 
        }else{
            return null; 
        }
    }

    function resetForm(){
        document.getElementById("uName").value = "";
        document.getElementById("barcode").value = "";
        document.getElementById("staff").checked = false;
        document.getElementById("student").checked = false;
    }

    

    function addUser() {
        var uName = document.getElementById("uName").value;
        var barcode = document.getElementById("barcode").value;
        var memberType = getValue();
        //var form = "name=" + escape(uName) + "&barcode=" + escape(barcode) + "&memberType=" + escape(memberType);
        var params = {
            name: uName,
            barcode: barcode,
            memberType: memberType
        };



        var request = false;
        try {
            request = new XMLHttpRequest();
        } catch (trymicrosoft) {
            try {
                request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (othermicrosoft) {
                try {
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (failed) {
                    request = false;     
                }  
            }
        }


        if(request != false){
            request.addEventListener("load", function(){alert("Success! Thank you!")});
            request.addEventListener("error", function(){alert("Error! Please try again!")});
            request.open("POST", "http://127.0.0.1:3000/users", true);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(params));
            resetForm();
        }else{
            alert("Error initializing XMLHttpRequest!");
        }
        
    }

    let userDeatailHtml =
        `
            <h2>Get a User's Details</h2>
            <form action="js for functions/user.js" method="get">
                Name<br>
                <input type="text" name="name">
                <br><br>
                Barcode<br>
                <input type="text" name="barcode">
                <br><br>
                <input type="submit" value="Add a User">
            </form> 
        `;

    // remove user html string


    


    // public
    return {
        addUserContent: function(container, eventTrackerModuleReference){
            container.innerHTML = addUserHtml; // render html first
            //document.getElementById("addUser").addEventListener("submit", function(event){event.preventDefault();addUser();});
            // then add event to form element
            eventTrackerModuleReference.addEventListenerAndTrack(document.getElementById("addUser"), "submit", function(event){event.preventDefault();addUser();});
        }


    }
};






