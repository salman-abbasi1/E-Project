const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // Close all others
        document.querySelectorAll(".faq-answer").forEach(ans => {
            if (ans !== answer) ans.style.maxHeight = null;
        });

        // Toggle selected
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
