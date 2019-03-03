$(function(){
    initUI();
    fillTwo();
    fillTwo();
});

function addLabelClass($Object){
    var labelNum = $Object.text();
    $Object.addClass("label"+labelNum);
}

function addAllLabelClass(){
    $("td").each(function(){
        addLabelClass($(this));
    });
}

function removeLabelClass($Object){
    var labelNum = $Object.text();
    $Object.removeClass("label"+labelNum);
}

function removeAllLabelClass(){
    $("td").each(function(){
        removeLabelClass($(this));
    });
}
 
function fillTwo(){
    var count = $("td:empty").length;
    var position = parseInt(Math.random()*count);
    $Object = $("td:empty").eq(position);
    removeLabelClass($Object);
    $Object.text("2");
    addLabelClass($Object);
}

function initUI(){
    $("tr").each(function(indexRow){
        var $Object = $(this).children("td");
        $Object.each(function(indexColumn){
            $(this).addClass("row"+indexRow);
            $(this).addClass("column"+indexColumn);
        });
    });
    addAllLabelClass();
    $("span").each(function(){
        $(this).click(function(){
            moveLabel($(this).text());
        });
    });
}

function moveLabel(direction)
{
    var array = [0, 0, 0, 0];
    switch(direction)
    {
        case "up":
            for(index in array){
                array[index] = $(".column"+index);
            }break;
        case "left":
            for(index in array){
                array[index] = $(".row"+index);
            }break;
        case "down":
            for(index in array){
                array[index] = $($(".column"+index).toArray().reverse());
            }break;
        case "right":
            for(index in array){
                array[index] = $($(".row"+index).toArray().reverse());
            }break;
    }
    if(move(array))
        fillTwo();
}

function move(array){
    var tempLabel, isMove = false;
    $(array).each(function(){
        tempLabel = [];
        $(this).each(function(){
            tempNum = $(this).text();
            removeLabelClass($(this));
            if(tempNum)
                if(tempLabel[tempLabel.length-1] == tempNum)
                    tempLabel[tempLabel.length-1] *= 2;
                else
                    tempLabel.push(tempNum);
        });
        $(this).each(function(index){
            if(tempLabel[index]==undefined)
                tempLabel[index] = "";

            if(tempLabel[index] != $(this).text())
                isMove = true;
            
            if(tempLabel[index])
            {
                $(this).text(tempLabel[index]);
                addLabelClass($(this));
            }
            else
            {
                $(this).text("");
                addLabelClass($(this));
            }
        });
    });
    return isMove;
}