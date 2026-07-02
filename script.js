const requestText = "Call of Duty needs Central Asia servers. Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan and Turkmenistan players are playing with very high ping. Please add Kazakhstan/Uzbekistan server support.";

const statusEl = document.querySelector(".copy-status");
const copyButtons = document.querySelectorAll("[data-copy-request]");

async function copyServerRequest() {
  try {
    await navigator.clipboard.writeText(requestText);
    if (statusEl) {
      statusEl.textContent = "Server request copied.";
    }
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = requestText;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    if (statusEl) {
      statusEl.textContent = "Server request copied.";
    }
  }
}

copyButtons.forEach((button) => {
  button.addEventListener("click", copyServerRequest);
});
