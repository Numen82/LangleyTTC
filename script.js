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
    let e = false
    if (!e) {
        console.log("hehe");
        e = true;
    }
}