function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}
function toggleExercise(header) {
    const allContents = document.querySelectorAll(".exercise-content");

    allContents.forEach(content => {
        if (content !== header.nextElementSibling) {
            content.style.maxHeight = null;
            content.classList.remove("active");
            const video = content.querySelector("video");
            if (video) video.pause();
        }
    });

    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove("active");
        const video = content.querySelector("video");
        if (video) video.pause();
    } else {
        content.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        const video = content.querySelector("video");
        if (video) video.play();
    }
}
