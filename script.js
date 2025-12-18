// == DOM Queries ==
const funFactBtn = document.getElementById("funFactBtn");
const themeBtn = document.getElementById("themeBtn");
const dailyMessage = document.getElementById("dailyMessage");

/* for fun fact*/
const funFactBox = document.getElementById("funFactBox");



// == Function 1: Show Random ESG Fun Fact When Clicked ==
const facts = [
  '🌱 ESG began with environmental concerns: The Global Reporting Initiative (GRI) was founded in 1997 with an initial focus on environmental issues, later broadening its scope to include social and governance factors.',
  '🌍 ESG is not just "doing good," it is risk management: it work to identify and manage long-term risks, such as climate risk or supply chain disruptions, which can have significant financial impacts.',
  '🤝 Most large companies already report on ESG: Over 90% of S&P 500 companies now publish an ESG or sustainability report, a significant jump from just 20% a decade ago, indicating widespread adoption of the practice.',
  '📊 ESG investment is massive and growing: ESG-focused institutional investments are projected to exceed $33.9 trillion by 2026 globally.',
  '♻️ "Greenwashing" is a concern: it is a significant challenge where a company misrepresents its ESG initiatives to appear more responsible than it actually is, leading to increased scrutiny and regulation.'
];

function showFunFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  funFactBox.textContent = facts[randomIndex];

  funFactBox.style.display = "block"; /* display only if clicked*/
}

if (funFactBtn) {
  funFactBtn.addEventListener("click", showFunFact);
}



// == Function 2: Toggle Theme Color ==
function toggleTheme() {
  document.body.classList.toggle("eyeCareMode");
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}



// == Function 3: Daily Message based on the Day of the Week ==
function setDailyMessage() {
  const today = new Date().getDay(); // set the week starts on Sunday, 0 = Sunday
  let msg = "";

  if (today == 0) {
    msg = "🌞 Sunday: Reflect and recharge! Sustainability begins with self-care.";
  } else if (today == 1) {
    msg = "📘 Monday: Start the week strong — small actions can create big ESG impact.";
  } else if (today == 2) {
    msg = "🌿 Tuesday: Notice something green today — nature is everywhere.";
  } else if (today == 3) {
    msg = "💧 Wednesday: Water wisely — every drop matters.";
  } else if (today == 4) {
    msg = "🌍 Thursday: Think globally, act locally — sustainability is a forever teamwork.";
  } else if (today == 5) {
    msg = "💡 Friday: Choose one habit to improve — progress outbeats perfection.";
  } else if (today == 6) {
    msg = "🌱 Saturday: Explore your environment — learning starts with curiosity.";
  }

  if (dailyMessage) {
    dailyMessage.textContent = msg;
  }

}

/* messages appears on page load automatically*/
setDailyMessage();

