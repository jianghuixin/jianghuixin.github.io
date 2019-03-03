$(function(){
    addAllClass();
    initUI();
    fillTwo();
    fillTwo();
});

function addClass($Object){
    var labelNum = $Object.text();
    $Object.addClass("label"+labelNum);
}

function addAllClass(){
    $("td").each(function(){
        addClass($(this));
    });
}

function removeClass($Object){
    var labelNum = $Object.text();
    $Object.removeClass("label"+labelNum);
}

function removeAllClass(){
    $("td").each(function(){
        removeClass($(this));
    });
}
 
function fillTwo(){
    var count = $("td:empty").length;
    var position = parseInt(Math.random()*count);
    $Object = $("td:empty").eq(position);
    removeClass($Object);
    $Object.text("2");
    addClass($Object);
}

function initUI(){
    $("tr").each(function(){
        var $Object = $(this).children("td");
        $Object.each(function(index){
            $(this).addClass("column"+index);
        });
    });
    $("table").click(move);
}

function move(){
    var tempLabel = [];
    $("tr").each(function(){
        var $Object = $(this).children("td");
        $Object.each(function(){
            tempNum = $(this).text();
            if(tempLabel[tempLabel.length-1] == tempNum)
                tempLabel[tempLabel.length-1] *= 2;
            else
                tempLabel.push(tempNum)
        });
        $Object.each(function(){
            
        });
    });
}