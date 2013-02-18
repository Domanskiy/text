define(["functions", "DOM", "values", "server"], function(functions, DOM, values, server){
    return {
        assign: function(){
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

            /* set default values */
            functions.setAllOptions();
            //this.setDefaults();

            /* wait from server(web socket) */
            setTimeout(server.waitResponse, 5000);
        },
        setDefaults : function(){
            functions.setSize();
            functions.setFamily();
            functions.setText();
        }
    }
});