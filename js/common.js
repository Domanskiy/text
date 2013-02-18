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
    var defaultFamily = "tahoma";
    setSize(defaultSize);
    $family.val(defaultFamily);
    setFamily(defaultFamily);

    $size.slider({
        range: "min",
        min: 10,
        max: 18,
        step: 1,
        value: defaultSize,
        slide: function(event, ui){
            setSize(ui.value);
            console.log("slide size");
        },
        stop: function(event, ui) {
            console.log("size changed");
        }
    });
    $family.change(function(){
        setFamily($(this).val());
        console.log("family changed");
    });

    function setSize(size) {
        $text.css("font-size", size);
    }
    function setFamily(family) {
        $text.css("font-family",families[family]);
    }
});