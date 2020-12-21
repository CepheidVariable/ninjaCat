var imgCats = [ new ImageItem('./assets/cat0.png'),
                new ImageItem('./assets/cat1.png'),
                new ImageItem('./assets/cat2.png'),
                new ImageItem('./assets/cat3.png'),
                new ImageItem('./assets/cat4.png'),
];
var imgNinjas = [   new ImageItem('./assets/ninja0.png'),
                    new ImageItem('./assets/ninja1.png'),
                    new ImageItem('./assets/ninja2.png'),
                    new ImageItem('./assets/ninja3.png'),
                    new ImageItem('./assets/ninja4.png'),
];

function ImageItem(src){
    this.image = new Image();
    this.src = src;
};

function loadImages(element){
    for (let i = 0; i < imgCats.length; i++) {
        imgCats[i].image.alt = "Cat picture " + i;
        imgCats[i].image.title = "Cat picture " + i;
        imgNinjas[i].image.alt = "Ninja picture " + i;
        imgNinjas[i].image.title = "Ninja picture " + i;
        document.getElementById(i).setAttribute("alt-src", imgCats[i].src);
        document.getElementById(i).setAttribute("src", imgNinjas[i].src);
        document.getElementById(i).setAttribute("alt", imgNinjas[i].image.alt);

    };
    console.log(imgCats,imgNinjas)
};


$(document).ready(function(){
    loadImages();

    $(".flip-box").mouseenter(function(){
        var tmp = $(this).find("img").attr("id");
        var tmpAlt = $(this).find("img").attr("alt-src");
        $(this).find(".flip-box-back img").attr("src", tmpAlt);
        $(this).find(".flip-box-back img").attr("alt-src", imgNinjas[tmp]);
        $(this).children(".flip-box-inner").css("transform" , "rotateY(-180deg)");
    });

    $(".flip-box").click(function(){
        $(this).children(".flip-box-inner").css("transform" , "rotateY(0deg)");
    });
});