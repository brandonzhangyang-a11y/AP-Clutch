// Start page for a full-length practice test. Pressing Start opens the locked full-screen runner (exam.js).
(() => {
  const params = new URLSearchParams(location.search);
  const exam = (params.get("exam") || "").toUpperCase();
  const root = $("#test-root");
  const home = (hash) => {
    location.href = `index.html${hash}`;
  };

  function draw() {
    root.replaceChildren();
    if (!AP.blueprints[exam]) {
      const box = el("div", "ap-note");
      box.append(el("h3", "", "Choose a test"), el("p", "", "Pick the SAT or ACT practice test from the AP Clutch home page."));
      const back = el("a", "ws-button", "Back to AP Clutch");
      back.href = "index.html#plan";
      box.append(back);
      root.append(box);
      return;
    }
    document.title = `${AP.blueprints[exam].title} — AP Clutch`;
    root.append(
      AP.renderExamIntro(exam, {
        onBack: (stay) => (stay === true ? draw() : home("#plan")),
        onStart: (opts) => AP.startExam(exam, opts),
      }),
    );
  }

  // After the test (or a save & exit) send the student back to the main page.
  AP.onExamFinished = (att) => home(`#exam-results/${att.exam}/${att.id}`);
  AP.onRunnerClosed = () => home("#plan");

  draw();
})();
