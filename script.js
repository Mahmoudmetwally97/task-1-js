function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.icon i');
    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    } else {
        answer.style.display = "block";
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
}