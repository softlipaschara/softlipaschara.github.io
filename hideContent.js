/**
 * Created by yangxinyue on 18.01.17.
 */



window.onload = function(){

    console.log("window loaded!");

    function showAbout() {
        console.log("show about button pressed!");
        document.getElementById("index").style.display = 'none';
        document.getElementById("about").style.display = 'block';
        document.getElementById("contact").style.display = 'none';
        document.getElementById("blog").style.display = 'none';
        document.getElementById("mask").className = "maskWhite";
        document.getElementById("indexTitle").className = "aboutActive";
        document.getElementById("aboutTitle").className = "aboutActive";
        document.getElementById("contactTitle").className = "aboutActive";
        document.getElementById("blogTitle").className = "aboutActive";
        document.getElementById("waterImage").style.display = 'none';
        document.getElementById("besidesPart").style.display = 'block';
        return false;
    }


    function showContact(){
        //document.getElementById("printPart").style.display = 'none';
        document.getElementById("index").style.display = 'none';
        document.getElementById("about").style.display = 'none';
        document.getElementById("blog").style.display = 'none';
        document.getElementById("contact").style.display = 'block';
        document.getElementById("waterImage").style.display = 'block';
        document.getElementById("mask").className = "maskWhite";
        document.getElementById("indexTitle").className = "contactActive";
        document.getElementById("aboutTitle").className = "contactActive";
        document.getElementById("contactTitle").className = "contactActive";
        document.getElementById("blogTitle").className = "contactActive";
        document.getElementById("besidesPart").style.display = 'none';

        return false;
    }

    function showIndex(){
        document.getElementById("index").style.display = 'block';
        document.getElementById("about").style.display = 'none';
        document.getElementById("blog").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
        document.getElementById("mask").className = "maskBlack";
        document.getElementById("indexTitle").className = "indexActive";
        document.getElementById("aboutTitle").className = "indexActive";
        document.getElementById("contactTitle").className = "indexActive";
        document.getElementById("blogTitle").className = "indexActive";
        document.getElementById("waterImage").style.display = 'none';
        document.getElementById("besidesPart").style.display = 'none';
        //document.getElementById("printPart").style.display = 'none';
        return false;
    }

    function showBlog(){
        document.getElementById("index").style.display = 'none';
        document.getElementById("about").style.display = 'none';
        document.getElementById("blog").style.display = 'block';
        document.getElementById("contact").style.display = 'none';
        document.getElementById("mask").className = "maskWhite";
        document.getElementById("indexTitle").className = "blogActive";
        document.getElementById("aboutTitle").className = "blogActive";
        document.getElementById("contactTitle").className = "blogActive";
        document.getElementById("blogTitle").className = "blogActive";
        document.getElementById("waterImage").style.display = 'none';
        document.getElementById("besidesPart").style.display = 'none';
        //document.getElementById("printPart").style.display = 'none';
        return false;
    }



    function detectHash(){
        switch (location.hash) {
            case "#about":
                showAbout();
                break;
            case "#contact":
                showContact();
                break;
            case "#selectedWorks":
                showIndex();
                break;
            case "#blog":
                showBlog();
                break;
            default:
                showIndex();
        }
    }

    detectHash();

    window.onhashchange = detectHash;


    var aboutButton = document.getElementById("aboutButton");
    aboutButton.addEventListener("click", function(){
        location.hash = "about"
    });

    var contactButton = document.getElementById("contactButton");
    contactButton.addEventListener("click", function(){
        location.hash = "contact"
    });

    var indexButton = document.getElementById("indexButton");
    indexButton.addEventListener("click", function(){
        location.hash = "selectedWorks"
    });

    var blogButton = document.getElementById("blogButton");
    blogButton.addEventListener("click", function(){
        location.hash = "blog"
    });




};
