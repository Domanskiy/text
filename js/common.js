$(document).ready(function() {
    var $main = $("#main");
    var $family = $("#family", $main);
    var $size = $("#size", $main);
    var $text = $("#text", $main);

    var families = {
        arial: "Arial,Helvetica,Garuda,sans-serif",
        georgia: "Georgia,'Nimbus Roman No9 L',serif",
        tahoma: "Tahoma,Geneva,Kalimati,sans-serif"
    }

    var defaultSize = 14;
    setSize(defaultSize);


    $size.slider({
        range: "min",
        min: 10,
        max: 18,
        step: 1,
        value: defaultSize,
        slide: function(event, ui){
            setSize(ui.value);
        },
        stop: function(event, ui) {
            console.log("stop");
        }
    });
    $family.change(function(){
        setFamily($(this).val());
    });

    function setSize(size) {
        $text.css("font-size", size);
    }
    function setFamily(family) {
        $text.css("font-family",families[family]);
    }
});