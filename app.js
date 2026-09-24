const quizzes = [
  {
    name: "Prewencja",
    quiz: [
            {
            "question": "Podstawą prawną Legitymowania jest:",
            "a": "art. 15 ust 1 pkt 2 Ustawy o Policji",
            "b": "art. 15 ust 2 pkt 1 Ustawy o Policji",
            "c": "art. 15 ust 1 pkt 3 Ustawy o Policji",
            "d": "art. 15 ust 1 pkt 1 Ustawy o Policji",
            "answer": "d",
            "answerConfirmedBy": []
            },
            {
            "question": "Podstawą faktyczną legitymowania NIE jest:",
            "a": "identyfikacja osoby podejrzanej o popełnienie przestępstwa lub wykroczenia",
            "b": "poszukiwanie osób zaginionych lub ukrywających się przed organami ścigania",
            "c": "ustalenie miejsca zamieszkania osoby, którą jesteśmy prywatnie zainteresowani",
            "d": "wykonywanie poleceń wydanych przez sąd, prokuraturę, organy administracji rządowej",
            "answer": "c",
            "answerConfirmedBy": []
            },
            {
            "question": "Jeżeli osoba legitymowana nie posiada dokumentu tożsamości, to policjant powinien:",
            "a": "nie musi pouczać osoby o żadnej odpowiedzialności",
            "b": "uprzedzić ją o odpowiedzialności karnej z art. 65 KK",
            "c": "uprzedzić ją o odpowiedzialności karnej z art. 65 KW",
            "d": "uprzedzić ją o odpowiedzialności karnej z art. 65 KPOW (inaczej KPW)",
            "answer": "c",
            "answerConfirmedBy": []
            },
            {
            "question": "Policjant zatrzymał „na gorącym uczynku” kradzieży mienia sprawcę wykroczenia, którego tożsamości nie może ustalić, wobec powyższego powinien osobę tę zatrzymać na podstawie:",
            "a": "art. 145 KW,",
            "b": "art. 145 KK,",
            "c": "art. 45 KW,",
            "d": "art. 45 KPOW,",
            "answer": "d",
            "answerConfirmedBy": []
            },
    ]
  },
  {
    name: "Informatyka",
    quiz: [
        {
    "question": "Podstawowym zadaniem biura SIRENE jest wymiana informacji:",
    "a": "Dodatkowych",
    "b": "Uzupełniających",
    "c": "Szczegółowych",
    "d": "Szczególnych",
    "answer": "b",
    "answerConfirmedBy": []
  },
  {
    "question": "Systemem łączności INTERPOLU jest:",
    "a": "Interpol 24",
    "b": "SIENA",
    "c": "I-24/7",
    "d": "EIS",
    "answer": "c",
    "answerConfirmedBy": []
  },
  {
    "question": "Europejski Urząd Policji funkcjonuje od:",
    "a": "1 stycznia 2003 r.",
    "b": "1 listopada 2004 r.",
    "c": "1 lipca 1999 r.",
    "d": "1 czerwca 1997 r.",
    "answer": "c",
    "answerConfirmedBy": []
  }
    ]
  }
];

const state = {
  selectedQuizIndex: 0,
  currentQuestionIndex: 0,
  correct: 0,
  wrong: 0,
  answered: false,
  shuffledOrder: []
};

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const quizList = document.getElementById("quizList");
const quizTitle = document.getElementById("quizTitle");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const progressCount = document.getElementById("progressCount");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const speechToggle = document.getElementById("speechToggle");
const speechRate = document.getElementById("speechRate");
const speechRateValue = document.getElementById("speechRateValue");
const speechVoice = document.getElementById("speechVoice");

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

function updateCounts() {
  correctCount.textContent = state.correct;
  wrongCount.textContent = state.wrong;
  const currentQuiz = getCurrentQuiz();
  const totalQuestions = currentQuiz.quiz.length;
  const progressValue = Math.min(state.currentQuestionIndex + 1, totalQuestions);
  progressCount.textContent = `${progressValue}/${totalQuestions}`;
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

  const text = [
    question.question,
    `A: ${question.a}`,
    `B: ${question.b}`,
    `C: ${question.c}`,
    `D: ${question.d}`
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
  state.shuffledOrder = shuffleArray(Array.from({ length: getCurrentQuiz().quiz.length }, (_, index) => index));
}

function renderQuestion() {
  const currentQuiz = getCurrentQuiz();
  const currentQuestion = getCurrentQuestion();

  if (!currentQuestion) {
    questionText.textContent = "Quiz został zakończony.";
    answersContainer.innerHTML = "";
    nextQuestionBtn.hidden = true;
    return;
  }

  state.answered = false;
  nextQuestionBtn.hidden = true;
  quizTitle.textContent = currentQuiz.name;
  questionText.textContent = currentQuestion.question;

  const options = ["a", "b", "c", "d"];
  answersContainer.innerHTML = options
    .map((letter) => {
      const text = currentQuestion[letter];
      return `
        <button class="answer-option" type="button" data-letter="${letter}" aria-label="Odpowiedź ${letter.toUpperCase()}">
          <span class="option-letter">${letter.toUpperCase()}</span>
          <span class="option-text">${text}</span>
        </button>
      `;
    })
    .join("");

  answersContainer.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button.dataset.letter));
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

function handleAnswer(selectedLetter) {
  if (state.answered) return;

  window.speechSynthesis?.cancel();

  const question = getCurrentQuestion();
  const optionButtons = Array.from(document.querySelectorAll(".answer-option"));
  state.answered = true;

  optionButtons.forEach((button) => {
    const letter = button.dataset.letter;
    button.disabled = true;
    button.classList.remove("selected");
    button.classList.remove("correct");
    button.classList.remove("wrong");

    if (letter === selectedLetter) {
      button.classList.add("selected");
    }
  });

  setTimeout(() => {
    optionButtons.forEach((button) => {
      const letter = button.dataset.letter;
      button.classList.remove("selected");

      if (letter === question.answer) {
        button.classList.add("correct");
      }

      if (letter === selectedLetter && letter !== question.answer) {
        button.classList.add("wrong");
      }
    });

    if (selectedLetter === question.answer) {
      state.correct += 1;
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
  questionText.textContent = `Quiz zakończony. Wynik: ${state.correct}/${total} poprawnych odpowiedzi.`;
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

updateSpeechValue();
populateVoiceList();
prepareShuffledOrder();
renderQuizList();
renderQuestion();
