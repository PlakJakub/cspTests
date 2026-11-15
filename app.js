const quizzes = [...window.quizzesOliwiaAng, ...window.quizzes, ...window.quizzesOliwia];

const QUESTION_STATS_STORAGE_KEY = "quiz-question-stats";
const STARRED_QUESTIONS_STORAGE_KEY = "quiz-starred-questions";

function loadStarredQuestionIds() {
    try {
        const savedIds = JSON.parse(localStorage.getItem(STARRED_QUESTIONS_STORAGE_KEY) || "[]");
        return Array.isArray(savedIds) ? savedIds : [];
    } catch (error) {
        return [];
    }
}

function loadQuestionStats() {
  try {
    const savedStats = JSON.parse(localStorage.getItem(QUESTION_STATS_STORAGE_KEY) || "{}");
    return savedStats && typeof savedStats === "object" ? savedStats : {};
  } catch (error) {
    return {};
  }
}

function getQuestionId(question, questionIndex) {
  return question.id || `${getCurrentQuiz().name}:${questionIndex}`;
}

function getQuestionStats(question, questionIndex) {
  const questionId = getQuestionId(question, questionIndex);
  const stats = state.questionStats[questionId];

  if (!stats || typeof stats !== "object") {
    state.questionStats[questionId] = { correct: 0, wrong: 0 };
  }

  return state.questionStats[questionId];
}

function saveQuestionStats() {
  localStorage.setItem(QUESTION_STATS_STORAGE_KEY, JSON.stringify(state.questionStats));
}

function saveStarredQuestionIds() {
    localStorage.setItem(STARRED_QUESTIONS_STORAGE_KEY, JSON.stringify(state.starredQuestionIds));
}

function registerAnswer(question, questionIndex, isCorrect) {
  const stats = getQuestionStats(question, questionIndex);
  const resultKey = isCorrect ? "correct" : "wrong";
  stats[resultKey] += 1;
  saveQuestionStats();
}

const state = {
  selectedQuizIndex: 0,
  currentQuestionIndex: 0,
  correct: 0,
  wrong: 0,
  answered: false,
  shuffledOrder: [],
  currentQuestionOptions: [],
    questionStats: loadQuestionStats(),
    starredQuestionIds: loadStarredQuestionIds()
};

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const quizList = document.getElementById("quizList");
const quizTitle = document.getElementById("quizTitle");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const progressCount = document.getElementById("progressCount");
const percentageCount = document.getElementById("percentageCount");
const gradeCount = document.getElementById("gradeCount");
const questionNavigation = document.getElementById("questionNavigation");
const questionNavigationValue = document.getElementById("questionNavigationValue");
const questionWrongCount = document.getElementById("questionWrongCount");
const questionCorrectCount = document.getElementById("questionCorrectCount");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const speechToggle = document.getElementById("speechToggle");
const speechRate = document.getElementById("speechRate");
const speechRateValue = document.getElementById("speechRateValue");
const autoPlayBtn = document.getElementById("autoPlayBtn");
const speechVoice = document.getElementById("speechVoice");
const starredOnlyToggle = document.getElementById("starredOnlyToggle");
const questionStarToggle = document.getElementById("questionStarToggle");
const questionEyeToggle = document.getElementById("questionEyeToggle");
let autoPlayActive = false;
let autoPlayPaused = false;
let autoPlayRunId = 0;
let autoPlayTimer = null;
let autoPlayTimerDeadline = 0;
let autoPlayRemaining = 0;

function shuffleArray(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getCurrentQuiz() {
  return quizzes[state.selectedQuizIndex];
}

function getCurrentQuestion() {
  if (!state.shuffledOrder.length) {
    return null;
  }
  const questionIndex = state.shuffledOrder[state.currentQuestionIndex];
  return getCurrentQuiz().quiz[questionIndex];
}

function getGrade(percentage) {
  if (percentage === 100) return 6;
  if (percentage > 90) return 5;
  if (percentage > 80) return 4;
  if (percentage > 75) return 3;
  if (percentage >= 70) return 2;
  return 1;
}


function updateCounts() {
    correctCount.textContent = state.correct;
    wrongCount.textContent = state.wrong;
    const currentQuiz = getCurrentQuiz();
    const totalQuestions = state.shuffledOrder.length;
    const answeredQuestions = state.correct + state.wrong;
    const percentage = answeredQuestions ? Math.round((state.correct / answeredQuestions) * 100) : 0;
    const progressValue = Math.min(state.currentQuestionIndex + 1, totalQuestions);
    progressCount.textContent = `${progressValue}/${totalQuestions}`;
    questionNavigation.min = totalQuestions ? "1" : "0";
    questionNavigation.max = String(Math.max(totalQuestions, 1));
    questionNavigation.value = String(totalQuestions ? progressValue : 0);
    questionNavigation.disabled = totalQuestions === 0;
    questionNavigationValue.textContent = `${progressValue}/${totalQuestions}`;
    percentageCount.textContent = `${percentage}%`;
    gradeCount.textContent = answeredQuestions ? getGrade(percentage) : "-";
}

function updateQuestionStats(question) {
    if (!question) {
        questionWrongCount.textContent = "Błędne: 0";
        questionCorrectCount.textContent = "Poprawne: 0";
        return;
    }

    const questionIndex = state.shuffledOrder[state.currentQuestionIndex];
    const stats = getQuestionStats(question, questionIndex);
    questionWrongCount.textContent = `Błędne: ${stats.wrong}`;
    questionCorrectCount.textContent = `Poprawne: ${stats.correct}`;
}

function renderQuizList() {
    quizList.innerHTML = quizzes
        .map((quiz, index) => {
            const activeClass = index === state.selectedQuizIndex ? "active" : "";
            return `<li><button class="quiz-item ${activeClass}" type="button" data-index="${index}">${quiz.name}</button></li>`;
        })
        .join("");

    document.querySelectorAll(".quiz-item").forEach((button) => {
        button.addEventListener("click", () => {
            const quizIndex = Number(button.dataset.index);
            selectQuiz(quizIndex);
        });
    });
}

function updateSpeechValue() {
    speechRateValue.textContent = `${Number(speechRate.value).toFixed(1)}x`;
}

function updateAutoPlayButton() {
    const speechSupported = "speechSynthesis" in window;
    autoPlayBtn.disabled = !speechSupported || (!autoPlayActive && (!getCurrentQuestion() || state.answered));
    autoPlayBtn.textContent = autoPlayActive && !autoPlayPaused ? "⏸ Pauza" : "▶ Play";
    autoPlayBtn.setAttribute("aria-pressed", String(autoPlayActive));
    autoPlayBtn.setAttribute(
        "aria-label",
        autoPlayActive
            ? (autoPlayPaused ? "Wznów czytanie" : "Wstrzymaj czytanie")
            : "Uruchom czytanie pytań"
    );
}

function stopAutoPlay() {
    if (autoPlayTimer !== null) {
        clearTimeout(autoPlayTimer);
        autoPlayTimer = null;
    }

    autoPlayRunId += 1;
    const wasActive = autoPlayActive;
    autoPlayActive = false;
    autoPlayPaused = false;
    autoPlayTimerDeadline = 0;
    autoPlayRemaining = 0;

    if (wasActive) {
        window.speechSynthesis?.cancel();
    }

    updateAutoPlayButton();
}

function scheduleAutoPlayAdvance(delay) {
    autoPlayRemaining = delay;
    autoPlayTimerDeadline = Date.now() + delay;
    autoPlayTimer = setTimeout(() => {
        autoPlayTimer = null;
        autoPlayTimerDeadline = 0;
        autoPlayRemaining = 0;

        if (!autoPlayActive || autoPlayPaused) return;

        if (state.currentQuestionIndex >= state.shuffledOrder.length - 1) {
            stopAutoPlay();
        } else {
            state.currentQuestionIndex += 1;
            renderQuestion();
            speakAutoPlayQuestion();
        }
    }, delay);
}

function markAutoPlayAnswer() {
    const question = getCurrentQuestion();
    if (!question) {
        stopAutoPlay();
        return;
    }

    const correctButton = answersContainer.querySelector(
        `.answer-option[data-real-letter="${question.answer}"]`
    );
    if (!correctButton) {
        console.error("Nie znaleziono przycisku poprawnej odpowiedzi.");
        stopAutoPlay();
        return;
    }

    answersContainer.querySelectorAll(".answer-option").forEach((button) => {
        button.classList.remove("selected", "wrong", "correct");
    });
    correctButton.classList.add("correct");
    scheduleAutoPlayAdvance(900);
}

function createAutoPlayUtterance(text, onend, runId) {
    const utterance = createSpeechUtterance(text);
    utterance.onend = () => {
        if (autoPlayActive && runId === autoPlayRunId && onend) {
            onend();
        }
    };
    utterance.onerror = (event) => {
        if (
            autoPlayActive
            && runId === autoPlayRunId
            && event.error !== "canceled"
        ) {
            console.error("Błąd odczytu pytania:", event.error);
            stopAutoPlay();
        }
    };

    return utterance;
}

function speakAutoPlayQuestion() {
    const question = getCurrentQuestion();
    if (!question || !autoPlayActive || autoPlayPaused) return;

    const runId = autoPlayRunId;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(createAutoPlayUtterance(
        question.question,
        () => {
            if (autoPlayActive && !autoPlayPaused && runId === autoPlayRunId) {
                window.speechSynthesis.speak(createAutoPlayUtterance(
                    question[question.answer],
                    markAutoPlayAnswer,
                    runId
                ));
            }
        },
        runId
    ));
}

function toggleAutoPlay() {
    if (!("speechSynthesis" in window)) {
        console.error("Odczyt mowy nie jest obsługiwany w tej przeglądarce.");
        return;
    }

    if (!autoPlayActive) {
        if (!getCurrentQuestion()) return;

        autoPlayActive = true;
        autoPlayPaused = false;
        autoPlayRunId += 1;
        updateAutoPlayButton();
        speakAutoPlayQuestion();
        return;
    }

    if (!autoPlayPaused) {
        autoPlayPaused = true;
        window.speechSynthesis.pause();

        if (autoPlayTimer !== null) {
            autoPlayRemaining = Math.max(0, autoPlayTimerDeadline - Date.now());
            clearTimeout(autoPlayTimer);
            autoPlayTimer = null;
            autoPlayTimerDeadline = 0;
        }
    } else {
        autoPlayPaused = false;
        window.speechSynthesis.resume();

        if (autoPlayRemaining > 0) {
            scheduleAutoPlayAdvance(autoPlayRemaining);
        }
    }

    updateAutoPlayButton();
}

function populateVoiceList() {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    const polishVoices = voices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("pl"));

    if (!polishVoices.length) {
        speechVoice.innerHTML = '<option value="">Brak polskich głosów</option>';
        speechVoice.disabled = true;
        return;
    }

    speechVoice.disabled = false;
    const currentSelection = speechVoice.value;

    speechVoice.innerHTML = polishVoices
        .map((voice) => `<option value="${voice.name}">${voice.name}</option>`)
        .join("");

    const selectedVoice = polishVoices.find((voice) => voice.name === currentSelection) || polishVoices[0];
    speechVoice.value = selectedVoice.name;
}

function createSpeechUtterance(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pl-PL";
    utterance.rate = Number(speechRate.value);

    const voices = window.speechSynthesis.getVoices();
    const polishVoices = voices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("pl"));
    const selectedVoiceName = speechVoice.value;
    const chosenVoice = polishVoices.find((voice) => voice.name === selectedVoiceName) || polishVoices[0] || voices[0];

    if (chosenVoice) {
        utterance.voice = chosenVoice;
    }

    return utterance;
}

function speakQuestion() {
    const isSpeechEnabled = speechToggle.checked;
    if (!isSpeechEnabled || !("speechSynthesis" in window)) {
        window.speechSynthesis?.cancel();
        return;
    }

    const question = getCurrentQuestion();
    if (!question) return;

    const visibleOptions = state.currentQuestionOptions.length
        ? state.currentQuestionOptions
        : [
            { visibleLetter: "A", realLetter: "a", text: question.a },
            { visibleLetter: "B", realLetter: "b", text: question.b },
            { visibleLetter: "C", realLetter: "c", text: question.c },
            { visibleLetter: "D", realLetter: "d", text: question.d }
        ];

    const text = [
        question.question,
        ...visibleOptions.map(({ visibleLetter, text }) => `${visibleLetter}: ${text}`)
    ].join(". ");

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(createSpeechUtterance(text));
}

function prepareShuffledOrder() {
    const currentQuiz = getCurrentQuiz();
    state.shuffledOrder = shuffleArray(currentQuiz.quiz
        .map((question, index) => ({
            index,
            score: getQuestionStats(question, index).correct - getQuestionStats(question, index).wrong
        }))
        .filter(({ index }) => {
            const question = currentQuiz.quiz[index];
            return !starredOnlyToggle.checked || state.starredQuestionIds.includes(getQuestionId(question, index));
        }))
        .sort((firstQuestion, secondQuestion) => firstQuestion.score - secondQuestion.score)
        .map(({ index }) => index);
}

function updateQuestionStar(question, questionIndex) {
    const isStarred = state.starredQuestionIds.includes(getQuestionId(question, questionIndex));
    questionStarToggle.textContent = isStarred ? "★" : "☆";
    questionStarToggle.classList.toggle("is-starred", isStarred);
    questionStarToggle.setAttribute("aria-pressed", String(isStarred));
    questionStarToggle.setAttribute("aria-label", isStarred ? "Usuń gwiazdkę z pytania" : "Oznacz pytanie gwiazdką");
}

function renderQuestion() {
    const currentQuiz = getCurrentQuiz();
    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) {
        questionText.textContent = starredOnlyToggle.checked && state.shuffledOrder.length === 0
            ? "Brak pytań oznaczonych gwiazdką."
            : "Quiz został zakończony.";
        updateQuestionStats(null);
        answersContainer.innerHTML = "";
        nextQuestionBtn.hidden = true;
        questionStarToggle.disabled = true;
        questionEyeToggle.disabled = true;
        updateAutoPlayButton();
        updateCounts();
        return;
    }

    state.answered = false;
    nextQuestionBtn.hidden = true;
    questionStarToggle.disabled = false;
    questionEyeToggle.disabled = false;
    quizTitle.textContent = currentQuiz.name;
    questionText.textContent = currentQuestion.question;
    updateQuestionStar(currentQuestion, state.shuffledOrder[state.currentQuestionIndex]);
    updateQuestionStats(currentQuestion);

    const shuffledOptions = shuffleArray(["a", "b", "c", "d"]);
    state.currentQuestionOptions = shuffledOptions.map((realLetter, index) => ({
        visibleLetter: String.fromCharCode(65 + index),
        realLetter,
        text: currentQuestion[realLetter]
    }));

    answersContainer.innerHTML = state.currentQuestionOptions
        .map(({ visibleLetter, realLetter, text }) => `
      <button class="answer-option" type="button" data-real-letter="${realLetter}" data-visible-letter="${visibleLetter}" aria-label="Odpowiedź ${visibleLetter}">
        <span class="option-letter">${visibleLetter}</span>
        <span class="option-text">${text}</span>
      </button>
    `)
        .join("");

    answersContainer.querySelectorAll(".answer-option").forEach((button) => {
        button.addEventListener("click", () => handleAnswer(button));
    });

    updateCounts();
    updateAutoPlayButton();
    if (!autoPlayActive) speakQuestion();
}

function selectQuiz(index) {
    stopAutoPlay();
    state.selectedQuizIndex = index;
    state.currentQuestionIndex = 0;
    state.correct = 0;
    state.wrong = 0;
    prepareShuffledOrder();
    renderQuizList();
    renderQuestion();
}

function handleAnswer(selectedButton) {
    if (state.answered) return;

    if (autoPlayActive) stopAutoPlay();
    window.speechSynthesis?.cancel();

    const question = getCurrentQuestion();
    const questionIndex = state.shuffledOrder[state.currentQuestionIndex];
    const optionButtons = Array.from(document.querySelectorAll(".answer-option"));
    const selectedRealLetter = selectedButton.dataset.realLetter;
    state.answered = true;
    updateAutoPlayButton();

    optionButtons.forEach((button) => {
        const realLetter = button.dataset.realLetter;
        button.disabled = true;
        button.classList.remove("selected");
        button.classList.remove("correct");
        button.classList.remove("wrong");

        if (realLetter === selectedRealLetter) {
            button.classList.add("selected");
        }
    });

    setTimeout(() => {
        optionButtons.forEach((button) => {
            const realLetter = button.dataset.realLetter;
            button.classList.remove("selected");

            if (realLetter === question.answer) {
                button.classList.add("correct");
            }

            if (realLetter === selectedRealLetter && realLetter !== question.answer) {
                button.classList.add("wrong");
            }
        });

        if (selectedRealLetter === question.answer) {
            state.correct += 1;
            registerAnswer(question, questionIndex, true);
            updateQuestionStats(question);
            updateCounts();

            setTimeout(() => {
                if (state.currentQuestionIndex < state.shuffledOrder.length - 1) {
                    state.currentQuestionIndex += 1;
                    renderQuestion();
                } else {
                    nextQuestion();
                }
            }, 800);
            return;
        }

        state.wrong += 1;
        registerAnswer(question, questionIndex, false);
        updateQuestionStats(question);
        updateCounts();
        nextQuestionBtn.hidden = false;
    }, 500);
}

function nextQuestion() {
    const currentQuiz = getCurrentQuiz();

    if (state.currentQuestionIndex < state.shuffledOrder.length - 1) {
        state.currentQuestionIndex += 1;
        renderQuestion();
        return;
    }

    const total = state.correct + state.wrong;
    const percentage = total ? Math.round((state.correct / total) * 100) : 0;
    questionText.textContent = `Quiz zakończony. Wynik: ${state.correct}/${total} poprawnych odpowiedzi (${percentage}%). Ocena: ${getGrade(percentage)}.`;
    answersContainer.innerHTML = "";
    nextQuestionBtn.hidden = true;
}

speechToggle.addEventListener("change", () => {
    if (autoPlayActive) return;

    if (!speechToggle.checked) {
        window.speechSynthesis?.cancel();
        return;
    }
    speakQuestion();
});

speechRate.addEventListener("input", () => {
    updateSpeechValue();
    if (speechToggle.checked && !autoPlayActive) {
        speakQuestion();
    }
});

speechRate.addEventListener("change", () => {
    updateSpeechValue();
    if (speechToggle.checked && !autoPlayActive) {
        speakQuestion();
    }
});

speechVoice.addEventListener("change", () => {
    if (speechToggle.checked && !autoPlayActive) {
        speakQuestion();
    }
});

window.speechSynthesis?.addEventListener("voiceschanged", () => {
    populateVoiceList();
    if (speechToggle.checked && !autoPlayActive) {
        speakQuestion();
    }
});

nextQuestionBtn.addEventListener("click", nextQuestion);
autoPlayBtn.addEventListener("click", toggleAutoPlay);
questionNavigation.addEventListener("input", () => {
    const totalQuestions = state.shuffledOrder.length;
    const questionNumber = Number(questionNavigation.value);
    questionNavigationValue.textContent = `${questionNumber}/${totalQuestions}`;
});
questionNavigation.addEventListener("change", () => {
    const totalQuestions = state.shuffledOrder.length;
    if (!totalQuestions) return;

    stopAutoPlay();
    state.currentQuestionIndex = Number(questionNavigation.value) - 1;
    renderQuestion();
});

document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
    }

    const target = event.target;
    if (target instanceof HTMLElement && (
        target.isContentEditable || ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName)
    )) {
        return;
    }

    if (event.key === " " && !nextQuestionBtn.hidden) {
        event.preventDefault();
        nextQuestion();
        return;
    }

    const visibleLetter = {
        "1": "A",
        "8": "A",
        "2": "B",
        "9": "B",
        "3": "C",
        "5": "C",
        "4": "D",
        "6": "D"
    }[event.key];
    if (!visibleLetter) return;

    if (state.answered || !getCurrentQuestion()) return;

    const selectedButton = answersContainer.querySelector(
        `.answer-option[data-visible-letter="${visibleLetter}"]`
    );
    if (selectedButton) handleAnswer(selectedButton);
});

questionStarToggle.addEventListener("click", () => {
    const question = getCurrentQuestion();
    if (!question) return;

    const questionIndex = state.shuffledOrder[state.currentQuestionIndex];
    const questionId = getQuestionId(question, questionIndex);
    const starredIndex = state.starredQuestionIds.indexOf(questionId);

    if (starredIndex === -1) {
        state.starredQuestionIds.push(questionId);
    } else {
        state.starredQuestionIds.splice(starredIndex, 1);
    }

    saveStarredQuestionIds();
    updateQuestionStar(question, questionIndex);
});

questionEyeToggle.addEventListener("click", () => {
    const question = getCurrentQuestion();
    if (!question) return;

    const correctAnswer = answersContainer.querySelector(
        `.answer-option[data-real-letter="${question.answer}"]`
    );
    if (!correctAnswer) return;

    correctAnswer.classList.remove("reveal-correct");
    void correctAnswer.offsetWidth;
    correctAnswer.classList.add("reveal-correct");
});

starredOnlyToggle.addEventListener("change", () => {
    stopAutoPlay();
    state.currentQuestionIndex = 0;
    state.correct = 0;
    state.wrong = 0;
    prepareShuffledOrder();
    renderQuestion();
});

updateSpeechValue();
populateVoiceList();
prepareShuffledOrder();
renderQuizList();
renderQuestion();
