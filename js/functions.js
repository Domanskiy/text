define(["DOM","families"], function(DOM,families) {
    return {
        init: function(){
            var _this = this;
            DOM.$size.slider({
                range: "min",
                min: 10,
                max: 18,
                step: 1,
                value: 14,
                slide: function(event, ui){
                   _this.setSize(ui.value);
                    //setSize(ui.value);
                    console.log("slide size");
                },
                stop: function(event, ui) {
                    console.log("size changed");
                }
            });

            DOM.$family.change(function(){
                //setFamily($(this).val());
                _this.setFamily($(this).val());
                console.log("family changed");
            });
        },
        setSize: function(size){
            DOM.$text.css("font-size", size);
        },
        setFamily: function(family){
            DOM.$text.css("font-family",families[family]);
        }
    }
})
