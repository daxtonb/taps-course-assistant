const getEmbeddedContext = (context) => {
  const iframe = context.querySelector("iframe");
  if (!iframe) return context;

  return getEmbeddedContext(
    iframe.contentDocument || iframe.contentWindow.document
  );
};

const ctx = getEmbeddedContext(document);

// Expansion panels
Array.from(ctx.querySelectorAll("button")).forEach((x) => {
  if (x.className.startsWith("blocks-accordion")) x.click();
});

// Videos
Array.from(ctx.querySelectorAll("video")).forEach((x) => {
  x.click();
  x.playbackRate = 10;
  x.play();
});

// Quizzes
Array.from(
  ctx.querySelectorAll("div.div.quiz-multiple-choice-option-wrap")
).forEach((x) => x.click());
Array.from(
  ctx.querySelectorAll("div.quiz-multiple-response-option__indicator")
).forEach((x) => x.click());
Array.from(
  ctx.querySelectorAll("div.quiz-multiple-choice-option__indicator")
).forEach((x) => x.click());
setTimeout(() => {
  ctx.querySelectorAll("button.quiz-card__button").forEach((x) => x.click());
}, 1000);

// Process scrollers
const getNext = () => ctx.querySelector("button.process-arrow--right")?.click();
let next = getNext();
while (next) {
  next.click();
  setTimeout(() => {
    console.log("called");
    next = getNext();
  }, 1000);
}

// Interactive images
Array.from(ctx.querySelectorAll("button.labeled-graphic-marker")).forEach((x) =>
  x.click()
);

// Flash cards
Array.from(ctx.querySelectorAll("li.flashcard")).forEach((x) => x.click());

// Tabs
Array.from(ctx.querySelectorAll("button.blocks-tabs__header-item")).forEach(
  (x) => x.click()
);

// Dumbass videos that aren't HTML video players
if (!window.infiniteNext) {
  window.infiniteNext = () => {
    // Just infinitely smash the "Next" button
    setInterval(() => {
      ctx.querySelector("button#next")?.click();
    }, 1000);
  };
  window.infiniteNext();
}

const nextButton = ctx.querySelector("button.pb-nextBtn.disabled");
nextButton?.classList.remove("disabled");
nextButton?.click();
