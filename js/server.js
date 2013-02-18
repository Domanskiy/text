define(["values"], function(values){
    return {
        waitResponse : function() {
            console.log(Math.floor((Math.random()*(18-10))+10));
            values.size = Math.floor((Math.random()*(18-10))+10);
            //_this.setSize();
            //console.log(_this);

            setTimeout(arguments.callee, 2000);
        },
        sendRequest : function() {
            console.log("Send to server:\n font-family: %d\n font-size: %d\n text: %d", values.family, values.size, values.text);
        }
    }
});
