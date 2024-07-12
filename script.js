const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".inner-scroller");
        const scrollerContent = Array.from(scrollerInner.children);
        console.log(scrollerContent)

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}


if (document.URL.includes("gallery.html")) {
    const gallery = document.getElementsByClassName("gal-holder")[0];
    const imgBlock = document.getElementsByClassName("image")[0];
    var docFrag = document.createDocumentFragment();

    //https://stackoverflow.com/questions/29488371/how-to-add-a-list-of-images-to-the-document-from-an-array-of-urls 
    //The stackoverflow above was very useful
    for (var i = 1; i <= 9; i++) {
        docFrag.appendChild(setImg(i, imgBlock.cloneNode(true)));
        console.log();
    }

    console.log(docFrag);
    console.log(imgBlock);
    //imgBlock.style.display = "block";
    
    gallery.appendChild(docFrag);
}

function setImg(num, image) {
    image.style.display = "block";
    image.style.backgroundImage = "url(img/TTCImgs/club\\ \\(" +  num + "\\).jpg)";
    image.setAttribute("id", "image " + num)
    //image.setAttribute("onclick", "enlarge()") //Don't use this code, probably use an eventListener
    return image;
}

//TODO: Do this later with help from this
//https://www.geeksforgeeks.org/toggle-class-by-adding-the-class-name-when-element-is-clicked-and-remove-when-clicked-outside/
function enlarge(elem) {
    elem.style.transform = "translate(30px)";
}