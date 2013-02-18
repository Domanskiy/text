define(["values", "functions", "config"], function(values, functions, config){
    return {
        waitResponse : function() {
            /* web socket */
            values.size = Math.floor((Math.random()*(config.maxFont-config.minFont))+config.minFont);
            values.family = "tahoma";
            values.text = "text from server";

            functions.setAllOptions();

            setTimeout(arguments.callee, config.serverTimeout);
        },
        sendRequest : function() {
            console.log("Send to server:\n font-family: %d\n font-size: %d\n text: %d", values.family, values.size, values.text);
        }
    }
});
