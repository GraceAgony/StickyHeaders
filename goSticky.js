document.addEventListener("DOMContentLoaded", init);
function init() {
    var headers = document.getElementsByClassName('header');
    console.log(headers);
    var top = {};
    for(var i = 0; i< headers.length; i++){
        var coord = headers[i].getBoundingClientRect().top + pageYOffset;
        top[coord] =  headers[i];
    };
    console.log(top);
    window.addEventListener('scroll', scroll);

    function scroll() {
        var fix;
        var i = 0;
        for(var x in top){
            console.log("y="+pageYOffset);
            console.log("x="+x);
            if(((i==0)&&(pageYOffset>x))||((i!==0)&&(pageYOffset >= x - 50))){
                fix = top[x];
            };
            if((i==0)&&(pageYOffset==x)){
                top[x].style.position = "static";
                top[x].style.top = x +"px";
            };
            i++;
        };
        if(fix){
            fix.style.position = "fixed";
            fix.style.top = 0;
            for(var x in top){
                if(top[x] !== fix){
                    top[x].style.position = "static";
                    top[x].style.top = x +"px";
                };
            };
        };
    };
};

