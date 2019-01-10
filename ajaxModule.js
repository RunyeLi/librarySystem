var ajax = function(){

	let request = null;

    try{
    	request = new XMLHttpRequest();
    }
    catch (trymicrosoft) {
    	try {
    		request = new ActiveXObject("Msxml2.XMLHTTP");
    	}
    	catch (othermicrosoft) {
    		try {
    			request = new ActiveXObject("Microsoft.XMLHTTP");
    		}
    		catch (failed) {
    			request = null;
    		} 
        }
    }

    return{

    	ajaxRequest: function(method, url, params){

	        if(request != null){
	            request.addEventListener("load", function(){alert("Success! Thank you!")});
	            request.addEventListener("error", function(){alert("Error! Please try again!")});
	            request.open(method, url, true);
	            request.setRequestHeader("Content-Type", "application/json");
	            request.send(JSON.stringify(params));
	        } else{
	            alert("Error initializing XMLHttpRequest!");
	        }

    	},

	}

};

