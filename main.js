
// FORM INPUTS VARIABLES
const selectFileBtn = document.getElementsByClassName("select-file-btn")[0];
const selectFileInput = document.getElementById("file");


const profileLinks = document.getElementsByClassName("profile_link");


// MENU VARIABLES
const menuBtn = document.getElementsByClassName("menu")[0]
const accountLink = document.getElementById("account-responsive-link");
const backAccountLink = document.getElementById("back-account-responsive-link")

// ICONS FROM HEADER
const headerHeart = document.getElementsByClassName("heart-icon")[0];
const headerStar = document.getElementsByClassName("star-icon")[0];
const headerProfile = document.getElementsByClassName("profile-icon")[0];





// RESPONSIVE MENU OF HEADER

$('.menu').click (function(){
    $(this).toggleClass('open');
    $('.responsivemenu').toggleClass('isactive')
    if(menuBtn.className.includes('open')){
        $('body').css("overflow", "hidden")
    }else{
        $('body').css("overflow", "")
    }
  });

accountLink.addEventListener("click", function(){
    document.getElementById("general-menu-section").style.display = "none";
    document.getElementById("responsive-menu-profilesection").style.display = "block";
})

backAccountLink.addEventListener("click", function(){
    document.getElementById("general-menu-section").style.display = "block";
    document.getElementById("responsive-menu-profilesection").style.display = "none";
})



$(".magn-glass").click (function(){
    $(".responsivesearcher").toggleClass("isactivesearcher");
    $(".responsivesearcher > input" ).focus();
})
$("main").click(function(){
    if($(".responsivesearcher").attr('class').split(" ").length > 2){
        $(".responsivesearcher").toggleClass("isactivesearcher");
    }
})







// HOVER EFFECTS FOR THE HEADER ICONS

headerHeart.addEventListener("mouseover", function(){
    headerHeart.src = headerHeart.src.split("heart").join("heart-red")
    
});
headerHeart.addEventListener("mouseout", function(){
    headerHeart.src = headerHeart.src.split("heart-red").join("heart")
});

headerStar.addEventListener("mouseover", function(){
    headerStar.src = headerStar.src.split("star").join("star-yellow")
});
headerStar.addEventListener("mouseout", function(){
    headerStar.src = headerStar.src.split("star-yellow").join("star")

});

headerProfile.addEventListener("mouseover", function(){
    headerProfile.src = headerProfile.src.split("profile").join("profile-blue")
});
headerProfile.addEventListener("mouseout", function(){
    headerProfile.src = headerProfile.src.split("profile-blue").join("profile")

});








// FUNCIONALITY OF THE PROFILE SETTINGS

let lastclicked
function changePSState(s1, s2, s3, s4){
    pssections[0].style.display = s1;
    pssections[1].style.display = s2;
    pssections[2].style.display = s3;
    pssections[3].style.display = s4;
    

    if(s1 !== "none"){
        changePSLinkStates(lastclicked, 0);
    }
    else if(s2 !== "none"){
        changePSLinkStates(lastclicked, 1);
    }
    else if(s3 !== "none"){
        changePSLinkStates(lastclicked, 2);
    }
    else if(s4 !== "none"){
        changePSLinkStates(lastclicked, 3);
    }
}

function changePSLinkStates(link, newlink){
    if(typeof link != "undefined")
    link.className = "profsetlink transition";
    pslinks[newlink].classList.add("psclicked");
    lastclicked = pslinks[newlink];

}








// HELPER THAT TELLS THE WIDTH OF THE WINDOW
this.document.getElementById("width").innerHTML = this.window.innerWidth;

window.addEventListener("resize", function(){
    this.document.getElementById("width").innerHTML = this.window.innerWidth;
});





