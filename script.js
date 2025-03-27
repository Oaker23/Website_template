window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let firstSection = document.querySelector("section"); // choose Section first
    let firstSectionHeight = firstSection.offsetHeight; // height Section first

    if (window.scrollY > firstSectionHeight) {
        navbar.style.display = "none"; // hide Navbar
    } else {
        navbar.style.display = "block"; // show Navbar
    }
});

// typing
function typeEffect(element, textArray, typingSpeed = 100, deletingSpeed = 50, delay = 2000) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        let currentText = textArray[textIndex];
        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            speed = delay; // รอเวลาก่อนเริ่มลบ
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // change to the next text
        }

        setTimeout(type, speed);
    }

    type();
}

document.addEventListener("DOMContentLoaded", function () {
    const text2 = document.querySelector(".text-2");
    const typing = document.querySelector(".typing");

    typeEffect(text2, ["Nonthasin Noinat", "Nonthasin Noinat"], 100, 50, 1500);
    typeEffect(typing, ["Developer", "Designer", "Coder"], 100, 50, 1500);
});
