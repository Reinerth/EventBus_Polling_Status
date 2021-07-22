/**
 * @date                    2019 12 17
 * @author                  Arthur Reinerth
 * @module      {Object}    eventBus: with this module/Class, the user can handle (collect) a list of own events 
 *                          with custom names, functions which should be triggered when event occurs 
 *                          and an optional given time-interval how often should be polled.
 *                          (how often the event/function should be called) 
 *                          To be used like: eventBus.startPolling('somethingHappend', myFuntionToBeTriggered, 1000);
 * @property    {Object}    config: contains some settings for the module e.g. the default time-period of the interval
 * @property    {Object}    myPolls: is an empty object which will contain all the events started
 * @function    {Object}    listOfPolls: returns an object as the list of all events started (for the user). 
 *                          Be aware the list is loaded asynchronious.
 * @function    {Object}    stopPolling: user can stop one of the already started events 
 *                          e.g. eventBus.stopPolling('checkingNewMails');
 * @function    {Object}    startPolling: user can start custom events 
 *                          e.g. eventBus.startPolling('nameOfCustomEvent', nameOfFunctionToBeTriggered, 1000);
 * @param       {String}    customEventsName: is the given name  and value which should be polled
 * @param       {Function}  startThis: is the given name of the function to be triggered/polled
 * @param       {Number}    pollingPeriod: is the period of the interval, 
 *                          means how often the event should be submitted/polled
 * @example
 * 
 *      ```javascript
 *      eventBus.startPolling('checkingNewMails', checkingNewMails, 1000);
 * 
 *      eventBus.stopPolling('checkingNewMails');
 * 
 *      let myListOfPolls = eventBus.listOfPolls(); // Be aware: loaded async
 *      console.log(listOfPolls);
 *      ```
 **/

    // ES5 Traditional Syntax except "let"
    'use strict';

    let eventBus = {
        config:{
            defaultIntervalPeriod: 1000,
        },
        // Collection of the registered Events
        myPolls: {
            // e.g. 
            // newEmails: [2000, 1],
            // somethingHappend: [3000, 2]
        },
        // Is returning the list of registered Events
        listOfPolls: function(myPollsPeriod) {
            console.log('listOfPolls');
            
            return this.myPolls;
        },
        // Stops the event
        stopPolling: function(customEventsName) {
            clearInterval(this.myPolls[customEventsName][1]);
            // Directly delete event from list of collected Polls/Events
            delete this.myPolls[customEventsName];
        },
        // Starts the event
        startPolling: function(customEventsName, startThis, pollingPeriod) {

            // Set default interval-period if not set by user
            if (typeof(pollingPeriod) == 'undefined' || pollingPeriod == ''){
                pollingPeriod = this.config.defaultIntervalPeriod;
            }

            // Start an interval for a "customEventsName", means: start polling the given function "startThis"
            // "startThis" is substitute-function of the function from the user which should be polled
            let myInterval = setInterval(function() {
                if (typeof(startThis) != 'undefined' || startThis != ''){
                    startThis();
                }
            }, pollingPeriod);

            // Save new Poll-Object in list myPolls
            this.myPolls[customEventsName] = [pollingPeriod, myInterval];
        }
    };

