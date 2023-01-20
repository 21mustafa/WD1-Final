const dataCounts = [14, 146, 85, 221];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startCounter(countElement, elementNum) {
  let count = 0;
  while (count <= elementNum) {
    countElement.innerHTML = count;
    count++;
    await new Promise((r) => setTimeout(r, 25));
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCounters() {
  const countElements = document.getElementsByClassName("counter-back");
  for (let i = 0; i < countElements.length; i++) {
    const countElement = countElements[i];
    let elementNum = dataCounts[i];
    startCounter(countElement, elementNum);
  }
}

(async function () {
  let shouldStart = true;
  document.addEventListener(
    "scroll",
    function () {
      const isVisible = isInViewport(document.getElementById("counter"));
      if (isVisible && shouldStart) {
        shouldStart = false;
        startCounters();
      }
    },
    {
      passive: true,
    }
  );
})();
