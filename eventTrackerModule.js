// I implemented this module to avoid memory leaks in the older browser versions of internet explorer 
// I read and researched this is considered good practise so I took the time to write this code
// Here is information on it, if you would like to read why:
// https://stackoverflow.com/questions/6033821/do-i-need-to-remove-event-listeners-before-removing-elements

var eventTracker = function(){

	let eventTrackerObjects = [];

	return{
		addEventListenerAndTrack: function(element, eventTypeString, eventHandlerFunction){
        // push event information to eventTrackerObjects array so can remove later
        	eventTrackerObjects.push({
            	element: element,
            	eventType: eventTypeString,
            	eventListener: eventHandlerFunction
        	});
        	console.log(eventTrackerObjects);

        	// add listener to the element
        	element.addEventListener(eventTypeString, eventHandlerFunction)
    	},

    	removeActiveEventListeners: function(){
	        while(eventTrackerObjects.length > 0){
	            console.log("removing listener: " + eventTrackerObjects[0].toString());
	            eventTrackerObjects[0].element.removeEventListener(eventTrackerObjects[0].eventType, eventTrackerObjects[0].eventListener);
	            eventTrackerObjects.shift();
	            }
	        console.log(eventTrackerObjects);
	    }
	}
};