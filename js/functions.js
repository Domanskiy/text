define(["DOM","families", "values", "server"], function(DOM,families,values, server) {
    return {
        init: function(){
            var _this = this;

            /* font size slider */
            DOM.$size.slider({
                range: "min",
                min: 10,
                max: 18,
                step: 1,
                value: values.size,
                slide: function(event, ui){
                    values.size = ui.value;
                    _this.setSize();
                },
                stop: function(event, ui) {
                    server.sendRequest();
                }
            });

            /* font family select */
            DOM.$family.change(function(){
                values.family = $(this).val();
                _this.setFamily();
                server.sendRequest();
            });

            /* set default values */
            _this.setSize();
            DOM.$family.val(values.family);
            _this.setFamily();
            DOM.$text.html(values.text);

            /* wait from server */
            server.waitResponse();
        },
        setSize: function(){
            DOM.$text.css("font-size", values.size);
        },
        setFamily: function(){
            DOM.$text.css("font-family",families[values.family]);
        }
    }
});
