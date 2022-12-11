const Body = document.querySelector("body");

const menuBurger = document.querySelector(".menu_burger");

const arr_opacity = document.querySelectorAll(".opacity");

const menuSubList = document.querySelector(".menu_sub_list");

let count = 0;

menuBurger.addEventListener("click", function(event) {
    menuSubList.classList.toggle("active");
    if (arr_opacity.length != 0){
        for (let index = 0; index < arr_opacity.length; index++){
            arr_opacity[index].classList.toggle("opacity_2");
        };
    };
    if (count % 2 == 0){
        Body.classList.add("overflow");
    } else{
        Body.classList.remove("overflow");
    };
    count += 1;
    if (count == 10){
        count = 0;
    };
});

const arr_links = document.querySelectorAll(".menu_link");

for (let index = 0; index < arr_links.length; index++){
    arr_links[index].addEventListener("click", function(event) {
        for (let index_2 = 0; index_2 < arr_opacity.length; index_2++){
            if (arr_links[index].textContent.toLowerCase() == arr_opacity[index_2].id.toLowerCase()){
                arr_opacity[index_2].scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            };
        };
        event.preventDefault();
    });
};

const arr_links_2 = document.querySelectorAll(".menu_sub_list_link");

for (let index = 0; index < arr_links_2.length; index++){
    arr_links_2[index].addEventListener("click", function(event) {
        menuSubList.classList.remove("active");
        for (let index_2 = 0; index_2 < arr_opacity.length; index_2++){
            arr_opacity[index_2].classList.remove("opacity_2");
            if (arr_links_2[index].textContent.toLowerCase() == arr_opacity[index_2].id.toLowerCase()){
                arr_opacity[index_2].scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
                Body.classList.remove("overflow");
            };
        };
        event.preventDefault();
    });
};
