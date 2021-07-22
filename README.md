# EventBus_Polling_Status :bus:
This module/Class handles (collects and deletes) a list of own events with custom names,<br> 
functions which should be triggered when the event occurs <br>
and an optional given time-interval how often should be polled.<br> 
Means how often the event/function should be called. <br><br>


To be used like: <br>
eventBus.startPolling('checkingNewMails', myFuntionToBeTriggered, 1000);<br>
eventBus.stopPolling('checkingNewMails');<br><br>

The Event-list looks like:<br><br>

myPolls: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checkingNewMails: [2000, 1],<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;someEvent: [1200, 3],<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;somethingHappend: [3000, 2]<br>
}<br><br>

![EventBus_Polling_Status](https://user-images.githubusercontent.com/85163640/126676564-3d49b037-eb88-4a2b-914f-826e34ed1bcb.jpg)


