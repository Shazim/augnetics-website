$(document).ready(function(){
    const $header = $('#header');
    const $accordion = $('#accordion');
    const $cases = $('#cases');
    $cases.on('init', function(event, slick){
        const slideContents = document.querySelectorAll('.slide-content');
        
            
            slideContents.forEach(function(content) {
              content.style.display = 'none';
            });
            const currentContent = document.getElementById('slide-content-1' );
            if (currentContent) {
              currentContent.style.display = 'block';
            }
    });
    $cases.on('afterChange', function(event, slick, currentSlide){
   
        showSlideContent(currentSlide);
      });
      function showSlideContent(slideIndex) {
        
        const slideContents = document.querySelectorAll('.slide-content');
      
            
            slideContents.forEach(function(content) {
              content.style.display = 'none';
            });
      
        const currentContent = document.getElementById('slide-content-' + (slideIndex + 1));
        if (currentContent) {
          currentContent.style.display = 'block';
          const contentValue = currentContent.textContent || currentContent.innerText;

$('#contentInput').val(contentValue);
        }
       const value =document.getElementById('contentInput').value
       console.log("VALUE",value) 
      }
    // Accordion
    if($accordion.length){
        $accordion.find(".accordion-title").click(function(){
           const isOpened =  $(this).hasClass('accordion-opened');
            $accordion.find('.accordion-title').removeClass('accordion-opened');
            if(!isOpened){
                $(this).addClass('accordion-opened');
            }
            $(this).parent(".accordion-item").find(".accordion-content").slideToggle();
            $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-content").slideUp();
            $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-content").slideUp();
        });
    }

    // Slider
    if($cases.length) {
        $cases.slick({
            infinite: true,
            slidesToScroll: 1,
            arrows: false,
            slide: '.use-cases-slide',
            // autoplay: true,
            // autoplaySpeed: 2000,
            slidesToShow: 4,
            centerMode: true, // Enable center mode
            centerPadding: '0', 
            //  centerMode: true,
            // centerPadding: '60px',
            responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
        $('.use-cases-slide').on('click', function() {
            var slideIndex = $(this).data('slide-index');
            $cases.slick('slickGoTo', slideIndex);
          });
    }


    AOS?.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        offset: 0, // offset (in px) from the original trigger point
        delay: 400, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });


    $(window).scroll(function(){
        const scrollPosition = $(window).scrollTop();
        scrollPosition > 100 ?
        $header.addClass('scroll'):
        $header.removeClass('scroll');
    })
});
const bioQuestions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Madrid", "Paris", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    }
];

const personalQuestions = [
    {
        question: "What is your favorite color?",
        choices: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "" // Add user-specific correct answer here
    },
    {
        question: "What is your favorite animal?",
        choices: ["Dog", "Cat", "Bird", "Fish"],
        correctAnswer: "" // Add user-specific correct answer here
    },
    {
        question: "What is your hometown?",
        choices: ["New York", "Los Angeles", "Chicago", "Other"],
        correctAnswer: "" // Add user-specific correct answer here
    }
];

let currentQuestion = 0;
let score = 0;
let startTime;
let answers = [];
let chosenQuiz = '';

function chooseQuiz(quizType) {
    chosenQuiz = quizType;
    const container=document.querySelectorAll('.quiz-container')
    container.forEach(function(content) {
        content.style.display = 'none';
      });
      
    document.querySelector('#quiz-container').style.display = 'block';

    if (quizType === 'bio') {
        loadQuestion(bioQuestions);
    } else if (quizType === 'personal') {
        loadQuestion(personalQuestions);
    }
}

function loadQuestion(questions) {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submit=document.getElementById("submit").style.display="block"
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
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

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
            timeTaken
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
    const quizContainer = document.querySelector('.quizes');
    const resultElement = document.createElement('div');
    resultElement.classList.add('result');
    const resultContainer=document.createElement("div");
    resultContainer.innerHTML=`
    <h3>Result</h3>`;
    resultElement.append(resultContainer)
    answers.forEach((answer, index) => {
        const questionResult = document.createElement('div');
        questionResult.innerHTML = `
          <p class="question">Question: ${answer.question}</p>
             `;

        const choicesElement = document.createElement('div');
        choicesElement.classList.add('choices');

        getCurrentQuestions()[index]?.choices?.forEach((choice, i) => {
            const label = document.createElement("label");
            label.innerHTML = `
               
                ${choice}
            `;
            choicesElement.appendChild(label);
        });

        questionResult.appendChild(choicesElement);
        resultElement.appendChild(questionResult);
        const answerContainer=document.createElement("div");
        answerContainer.innerHTML=`
        <p class=${answer.userAnswer === answer.correctAnswer?"correct":"incorrect"}>Your Answer: ${answer.userAnswer}</p>
        <p>Correct Answer: ${answer.correctAnswer}</p>
        <p>Time Taken: ${answer.timeTaken} seconds</p>`;
        answerContainer.style.marginBottom="50px";
        questionResult.appendChild(answerContainer);
    });

    quizContainer.innerHTML = '';
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
    return chosenQuiz === 'bio' ? bioQuestions : personalQuestions;
}

$(document).ready(function() {
    $("#submit").click(function() {
        checkAnswer();
    });
});