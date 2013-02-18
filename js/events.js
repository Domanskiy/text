define(["functions", "DOM", "values", "server", "config"], function(functions, DOM, values, server, config){
    return {
        assign: function(){
            var _this = this;
            /* font size slider */
            DOM.$size.slider({
                range: "min",
                min: 10,
                max: 18,
                step: 1,
                slide: function(event, ui){
                    values.size = ui.value;
                    functions.setFontSize();
                },
                stop: function(event, ui) {
                    server.sendRequest();
                }
            });

            /* font family select */
            DOM.$family.change(function(){
                values.family = $(this).val();
                functions.setFontFamily();
                server.sendRequest();
            });

            /* textarea */
            DOM.$text.on("keyup", function(){
                var currentValue = $(this).val();
                values.text = currentValue;
                setTimeout(function(){_this.checkText(currentValue)}, config.keyupTimeout);
            })

            /* set default values */
            functions.setAllOptions();
            //this.setDefaults();

            /* wait from server(web socket) */
            setTimeout(server.waitResponse, config.serverTimeout);
        },
        checkText: function(value){
            if (value === values.text){
                server.sendRequest();
            }
        }
    }
});