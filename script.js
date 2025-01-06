function submitQuiz() {
    const answers = {
        html: "Tim Berners-Lee",
        python: "Guido van Rossum",
        java: "Use of pointers",
        ai: "John McCarthy"
    };

    let score = 0;
    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        
        // Check if an answer was selected for each question
        if (selected) {
            if (selected.value === answers[key]) {
                score++;
            }
        } else {
            alert(`You missed answering the ${key} question!`);
            return; // Prevent score calculation until all questions are answered
        }
    }

    alert(`Your score: ${score} / ${Object.keys(answers).length}`);
}
// Quiz Submission Logic
document.getElementById("submit-btn").addEventListener("click", function () {
    const courses = [
        { id: "html", quizzes: "html-quizzes", progress: "progress-html" },
        { id: "css", quizzes: "css-quizzes", progress: "progress-css" },
        { id: "javascript", quizzes: "javascript-quizzes", progress: "progress-js" },
        { id: "python", quizzes: "python-quizzes", progress: "progress-python" },
        { id: "java", quizzes: "java-quizzes", progress: "progress-java" },
        { id: "cplusplus", quizzes: "cplusplus-quizzes", progress: "progress-cpp" },
    ];

    const resultMessage = document.getElementById("result-message");
    let message = "";

    courses.forEach((course) => {
        const courseCheckbox = document.getElementById(course.id);
        const quizzesInput = document.getElementById(course.quizzes);
        const progressBar = document.getElementById(course.progress);

        if (courseCheckbox.checked) {
            const quizzesAttempted = parseInt(quizzesInput.value);

            if (isNaN(quizzesAttempted) || quizzesAttempted < 0 || quizzesAttempted > 10) {
                message += `Please enter a valid number of quizzes (0-10) for ${course.id.toUpperCase()}.\n`;
            } else {
                // Update progress bar
                const progressPercentage = (quizzesAttempted / 10) * 100;
                progressBar.style.width = `${progressPercentage}%`;

               
            }
        }
    });

    if (message === "") {
        message = "Keep learning.";
    }

    resultMessage.textContent = message;
    resultMessage.style.color = message.includes("keep learning") ? "purple" : "purple";
});