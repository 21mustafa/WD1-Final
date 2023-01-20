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

(async function () {
  const countElements = document.getElementsByClassName("counter-back");
  for (let i = 0; i < countElements.length; i++) {
    const countElement = countElements[i];
    let elementNum = dataCounts[i];
    startCounter(countElement, elementNum);
  }
})();
