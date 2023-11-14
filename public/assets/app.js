$(document).ready(function () {
    const $header = $("#header");
    const $accordion = $("#accordion");
    const $cases = $("#cases");
    $cases.on("init", function (event, slick) {
        const slideContents = document.querySelectorAll(".slide-content");

        slideContents.forEach(function (content) {
            content.style.display = "none";
        });
        const currentContent = document.getElementById("slide-content-1");
        if (currentContent) {
            currentContent.style.display = "block";
        }
        $("#usecase").val("Culture");
    });
    $cases.on("afterChange", function (event, slick, currentSlide) {
        showSlideContent(currentSlide);
        const currentSlideTitle = $cases
            .find(".use-cases-slide")
            .eq(currentSlide)
            .find("div")
            .text();
        $("#usecase").val(currentSlideTitle);
    });
    function showSlideContent(slideIndex) {
        const slideContents = document.querySelectorAll(".slide-content");

        slideContents.forEach(function (content) {
            content.style.display = "none";
        });

        const currentContent = document.getElementById(
            "slide-content-" + (slideIndex + 1)
        );
        if (currentContent) {
            currentContent.style.display = "block";
            const contentValue =
                currentContent.textContent || currentContent.innerText;

            $("#contentInput").val(contentValue);
        }
        const value = document.getElementById("contentInput").value;
        console.log("VALUE", value);
    }
    // Accordion
    if ($accordion.length) {
        $accordion.find(".accordion-title").click(function () {
            const isOpened = $(this).hasClass("accordion-opened");
            $accordion.find(".accordion-title").removeClass("accordion-opened");
            if (!isOpened) {
                $(this).addClass("accordion-opened");
            }
            $(this)
                .parent(".accordion-item")
                .find(".accordion-content")
                .slideToggle();
            $(this)
                .parent(".accordion-item")
                .prevAll(".accordion-item")
                .find(".accordion-content")
                .slideUp();
            $(this)
                .parent(".accordion-item")
                .nextAll(".accordion-item")
                .find(".accordion-content")
                .slideUp();
        });
    }

    // Slider
    if ($cases.length) {
        $cases.slick({
            infinite: true,
            slidesToScroll: 1,
            arrows: false,
            slide: ".use-cases-slide",
            // autoplay: true,
            // autoplaySpeed: 2000,
            slidesToShow: 4,
            centerMode: true, // Enable center mode
            centerPadding: "0",
            //  centerMode: true,
            // centerPadding: '60px',
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
        $(".use-cases-slide").on("click", function () {
            var slideIndex = $(this).data("slide-index");
            $cases.slick("slickGoTo", slideIndex);
        });
    }

    AOS?.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        offset: 0, // offset (in px) from the original trigger point
        delay: 400, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });

    $(window).scroll(function () {
        const scrollPosition = $(window).scrollTop();
        scrollPosition > 100
            ? $header.addClass("scroll")
            : $header.removeClass("scroll");
    });
});
const bioQuestions = [
    {
        question:
            "What are the primary reactants used by plants during photosynthesis?",
        choices: [
            "Oxygen and Sugars",
            "Carbon Dioxide and Water",
            "Nitrogen and Oxygen",
            "Hydrogen and Carbon Dioxide",
        ],
        correctAnswer: "Carbon Dioxide and Water",
    },
    {
        question:
            "The process of photosynthesis is described as an endothermic reaction. What does this imply about the energy required for the process?",
        choices: [
            "Energy is neither released nor absorbed during the process.",
            "Energy is released during the process.",
            "Energy is absorbed from the surroundings during the process.",
            "The energy remains constant throughout the process.",
        ],
        correctAnswer:
            "Energy is absorbed from the surroundings during the process.",
    },
    {
        question:
            "What is the primary function of chloroplasts in plant cells?",
        choices: [
            "DNA replication",
            "Protein synthesis",
            "Cellular respiration",
            "Photosynthesis",
        ],
        correctAnswer: "Photosynthesis",
    },
    {
        question:
            "Which pigment, responsible for capturing light energy, is predominantly found in chloroplasts?",
        choices: ["Hemoglobin", "Melanin", "Rhodopsin", "Chlorophyll"],
        correctAnswer: "Chlorophyll",
    },
    {
        question:
            "In which part of the chloroplast does the Calvin cycle, a phase of photosynthesis, primarily take place?",
        choices: ["Thylakoid membrane", "Stroma", "Granum", "Outer membrane"],
        correctAnswer: "Stroma",
    },
];

const englishQuestions = [
    {
        question: "In the first stanza, what do the yellow leaves signify?",
        choices: [
            "Autumn ",
            "The poet's favorite color",
            "A unique species of tree",
            "A fantasy world where trees are yellow",
        ],
    },
    {
        question:
            "In the second stanza, when the poet describes the path as 'Had worn them really about the same'. Considering other elements of the poem, what can you say about the paths?",
        choices: [
            "They are equally worn out with travelers",
            "They are equally untraveled. ",
            "Only one road exists and the other is an illusion",
        ],
    },
    {
        question:
            "How does the tone change between the first two stanzas and the last two?",
        choices: [
            "From cheerful to dramatic",
            "From dramatic to cheerful",
            "From cheerful to lamenting ",
        ],
    },
    // Add more questions as needed
];

const criticalThinkingQuestions = [
    {
        question: "What decision do you think should be taken: ",
        choices: [
            {
                option: "The business decision to go ahead with the railway and make provisions for the rainforest.",
                feedback:
                    "The rainforest has been permanently altered, the railway now passes through the town and brought business and prosperity to the townspeople. Ecologists have noticed that some species have stopped appearing in the rainforest.",
            },
            {
                option: "The decision to cancel the project and maintain the ecology of he rainforest.",
                feedback:
                    "The rainforest has remained untouched and so does the village. The rainforest bursts with a variety of sounds and colours of all the flora and fauna thriving while the village shrinks as young people leave for better opportunities.",
            },
            {
                option: "The decision to move the railway out of the way of the rainforest and provide the townspeople opportunity to work out of their town.  ",
                feedback:
                    "The project is budgeted and fails to receive approval to go ahead with the new plan. The rainforest is unaffected but the village and all other villages who were alongside the planned railroad have lost their opportunity for economic progression.",
            },
        ],
    },
    // Add more critical thinking questions as needed
];
let currentQuestion = 0;
let score = 0;
let startTime;
let answers = [];
let chosenQuiz = "";

function chooseQuiz(quizType) {
    chosenQuiz = quizType;
    const container = document.querySelectorAll(".quiz-container");
    container.forEach(function (content) {
        content.style.display = "none";
    });

    document.querySelector("#quiz-container").style.display = "block";

    if (quizType === "bio") {
        loadQuestion(bioQuestions);
    } else if (quizType === "english") {
        loadEnglishQuestion(englishQuestions);
    } else if (quizType === "criticalThinking") {
        loadCriticalQuestion(criticalThinkingQuestions);
    }
}
function loadCriticalQuestion(questions) {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submit = (document.getElementById("submit").style.display = "block");
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach((choice, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="choice" value="${choice.option}" >
            <span>${choice.option}</span>
        `;

        choicesElement.appendChild(label);
    });

    startTime = new Date(); // Start the timer
}

function checkCriticalAnswer() {
    const selectedChoice = document.querySelector(
        'input[name="choice"]:checked'
    );

    if (selectedChoice) {
        const userAnswer = selectedChoice.value;

        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Calculate time in seconds
        console.log(getCriticalCurrentQuestion());
        answers.push({
            question: getCriticalCurrentQuestion(),
            userAnswer,
            timeTaken,
        });

        currentQuestion++;
        if (currentQuestion < getCriticalCurrentQuestions().length) {
            loadCriticalQuestion(getCriticalCurrentQuestions());
        } else {
            showCriticalResult();
        }
    }
}
function showCriticalResult() {
    const resultContainer = document.querySelector(".quizes");
    resultContainer.innerHTML = " <h3>Result</h3`"; // Clear previous content

    answers.forEach((answer, index) => {
        const questionResult = document.createElement("div");
        questionResult.innerHTML = `
          <p class="question">Question: ${answer.question}</p>
             `;

        const choicesElement = document.createElement("div");
        choicesElement.classList.add("choices");

        getCriticalCurrentQuestions()[index]?.choices?.forEach((choice, i) => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="choice" value="${
                    choice.option
                }" disabled ${
                choice.option === answer.userAnswer ? "checked" : ""
            }>
                ${choice.option}
            `;
            choicesElement.appendChild(label);
        });

        questionResult.appendChild(choicesElement);

        const feedbackContainer = document.createElement("div");
        feedbackContainer.innerHTML = `
        <h1> Feedback:</h1>
            <p class="feedback feedback-bold"> ${getCriticalFeedback(
                answer.userAnswer
            )}</p>
            <p class="time-taken">Time Taken: ${answer.timeTaken} seconds</p>`;
        feedbackContainer.style.marginBottom = "50px";
        feedbackContainer.classList.add("answer-container");
        questionResult.appendChild(feedbackContainer);

        resultContainer.appendChild(questionResult);
    });
}

function getCriticalFeedback(userAnswer) {
    const currentChoices = getCriticalCurrentQuestions()?.[0]?.choices;

    const selectedChoice = currentChoices?.find(
        (choice) => choice.option === userAnswer
    );

    if (selectedChoice) {
        return selectedChoice.feedback;
    } else {
        return "Invalid option selected";
    }
}
function getCriticalCurrentQuestion() {
    return getCriticalCurrentQuestions()[currentQuestion]?.question;
}

function getCriticalCurrentQuestions() {
    return chosenQuiz === "criticalThinking" ? criticalThinkingQuestions : [];
}

function loadEnglishQuestion(questions) {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submit = (document.getElementById("submit").style.display = "block");
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach((choice, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="choice" value="${choice}" >
            <span>${choice}</span>
        `;

        choicesElement.appendChild(label);
    });

    startTime = new Date(); // Start the timer
}

function checkEnglishAnswer() {
    const selectedChoice = document.querySelector(
        'input[name="choice"]:checked'
    );

    if (selectedChoice) {
        const userAnswer = selectedChoice.value;

        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Calculate time in seconds

        answers.push({
            question: getEngishCurrentQuestion(),
            userAnswer,
            timeTaken,
        });

        currentQuestion++;
        if (currentQuestion < getEngishCurrentQuestions().length) {
            loadEnglishQuestion(getEngishCurrentQuestions());
        } else {
            showEngishResult();
        }
    }
}

function showEngishResult() {
    const quizContainer = document.querySelector(".quizes");
    const resultElement = document.createElement("div");
    resultElement.classList.add("result");
    const resultContainer = document.createElement("div");
    resultContainer.innerHTML = `
    <h3>Result</h3>`;
    resultElement.append(resultContainer);
    answers.forEach((answer, index) => {
        const questionResult = document.createElement("div");
        questionResult.innerHTML = `
          <p class="question">Question: ${answer.question}</p>
             `;

        const choicesElement = document.createElement("div");
        choicesElement.classList.add("choices");

        getEngishCurrentQuestions()[index]?.choices?.forEach((choice, i) => {
            const label = document.createElement("label");
            label.innerHTML = `
                
                ${choice}
            `;
            choicesElement.appendChild(label);
        });

        questionResult.appendChild(choicesElement);
        resultElement.appendChild(questionResult);

        const feedbackContainer = document.createElement("div");
        feedbackContainer.innerHTML = `
            <p class="feedback feedback-bold">Your Answer: ${getEngishFeedback(
                answer.userAnswer
            )}</p>
            <p class="feedback-bold time-taken">Time Taken: ${
                answer.timeTaken
            } seconds</p>`;
        feedbackContainer.style.marginBottom = "50px";
        feedbackContainer.classList.add("answer-container");
        questionResult.appendChild(feedbackContainer);
    });

    quizContainer.innerHTML = "";
    quizContainer.appendChild(resultElement);
}

function getEngishFeedback(userAnswer) {
    // Provide feedback based on the user's selected option
    return `Your selected option "${userAnswer}" is correct.`;
}

function getEngishCurrentQuestion() {
    return getEngishCurrentQuestions()[currentQuestion]?.question;
}

function getEngishCurrentQuestions() {
    return chosenQuiz === "english" ? englishQuestions : [];
}

function loadQuestion(questions) {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submit = (document.getElementById("submit").style.display = "block");
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach((choice, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="choice" value="${choice}">
            ${choice}
        `;
        choicesElement.appendChild(label);
    });

    startTime = new Date(); // Start the timer
}

function checkAnswer() {
    const selectedChoice = document.querySelector(
        'input[name="choice"]:checked'
    );

    if (selectedChoice) {
        const userAnswer = selectedChoice.value;
        if (userAnswer === getCurrentCorrectAnswer()) {
            score++;
        }

        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Calculate time in seconds

        answers.push({
            question: getCurrentQuestion(),
            userAnswer,
            correctAnswer: getCurrentCorrectAnswer(),
            timeTaken,
        });

        currentQuestion++;
        if (currentQuestion < getCurrentQuestions().length) {
            loadQuestion(getCurrentQuestions());
        } else {
            showResult();
        }
    }
}

function showResult() {
    const quizContainer = document.querySelector(".quizes");
    const resultElement = document.createElement("div");
    resultElement.classList.add("result");
    const resultContainer = document.createElement("div");
    resultContainer.innerHTML = `
    <h3>Result</h3>`;
    resultElement.append(resultContainer);
    answers.forEach((answer, index) => {
        const questionResult = document.createElement("div");
        questionResult.innerHTML = `
          <p class="question">Question: ${answer.question}</p>
             `;

        const choicesElement = document.createElement("div");
        choicesElement.classList.add("choices");

        getCurrentQuestions()[index]?.choices?.forEach((choice, i) => {
            const label = document.createElement("label");
            label.innerHTML = `
               
                - ${choice}
            `;
            choicesElement.appendChild(label);
        });

        questionResult.appendChild(choicesElement);
        resultElement.appendChild(questionResult);
        const answerContainer = document.createElement("div");
        answerContainer.innerHTML = `
        <p class=${
            answer.userAnswer === answer.correctAnswer ? "correct" : "incorrect"
        }><span class="feedback">Your Answer: <span class="feedback-bold"> ${
            answer.userAnswer
        }</span></span></p>
        <p class="feedback">Correct Answer: <span class="feedback-bold">${
            answer.correctAnswer
        }</span></p>
        <p class="time-taken">Time Taken: ${answer.timeTaken} seconds</p>`;
        answerContainer.style.marginBottom = "50px";
        answerContainer.classList.add("answer-container");
        questionResult.appendChild(answerContainer);
    });

    quizContainer.innerHTML = "";
    quizContainer.appendChild(resultElement);
    // quizContainer.appendChild(correctAnswersElement);
}

function getCurrentQuestion() {
    return getCurrentQuestions()[currentQuestion]?.question;
}

function getCurrentCorrectAnswer() {
    return getCurrentQuestions()[currentQuestion]?.correctAnswer;
}

function getCurrentQuestions() {
    return chosenQuiz === "bio" && bioQuestions;
}

$(document).ready(function () {
    $("#submit").click(function () {
        if (chosenQuiz === "bio") {
            checkAnswer();
        } else if (chosenQuiz === "english") {
            checkEnglishAnswer();
        } else if (chosenQuiz === "criticalThinking") {
            checkCriticalAnswer();
        }
    });
});
