const quizzes = [...window.quizzesKuba, ...window.quizzes];

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
const questionWrongCount = document.getElementById("questionWrongCount");
const questionCorrectCount = document.getElementById("questionCorrectCount");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const speechToggle = document.getElementById("speechToggle");
const speechRate = document.getElementById("speechRate");
const speechRateValue = document.getElementById("speechRateValue");
const speechVoice = document.getElementById("speechVoice");
const starredOnlyToggle = document.getElementById("starredOnlyToggle");
const questionStarToggle = document.getElementById("questionStarToggle");

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

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

function prepareShuffledOrder() {
    const currentQuiz = getCurrentQuiz();
    state.shuffledOrder = currentQuiz.quiz
        .map((question, index) => ({
            index,
            score: getQuestionStats(question, index).correct - getQuestionStats(question, index).wrong
        }))
        .filter(({ index }) => {
            const question = currentQuiz.quiz[index];
            return !starredOnlyToggle.checked || state.starredQuestionIds.includes(getQuestionId(question, index));
        })
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
        updateCounts();
        return;
    }

    state.answered = false;
    nextQuestionBtn.hidden = true;
    questionStarToggle.disabled = false;
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
    speakQuestion();
}

function selectQuiz(index) {
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

    window.speechSynthesis?.cancel();

    const question = getCurrentQuestion();
    const questionIndex = state.shuffledOrder[state.currentQuestionIndex];
    const optionButtons = Array.from(document.querySelectorAll(".answer-option"));
    const selectedRealLetter = selectedButton.dataset.realLetter;
    state.answered = true;

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
    if (!speechToggle.checked) {
        window.speechSynthesis?.cancel();
        return;
    }
    speakQuestion();
});

speechRate.addEventListener("input", () => {
    updateSpeechValue();
    if (speechToggle.checked) {
        speakQuestion();
    }
});

speechRate.addEventListener("change", () => {
    updateSpeechValue();
    if (speechToggle.checked) {
        speakQuestion();
    }
});

speechVoice.addEventListener("change", () => {
    if (speechToggle.checked) {
        speakQuestion();
    }
});

window.speechSynthesis?.addEventListener("voiceschanged", () => {
    populateVoiceList();
    if (speechToggle.checked) {
        speakQuestion();
    }
});

nextQuestionBtn.addEventListener("click", nextQuestion);

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

starredOnlyToggle.addEventListener("change", () => {
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
