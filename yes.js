const febHolidays = [
    "Dear janne, please feel it",
    "Please ye aese hi cycle hai, mzk mei bnaya hua to dont take it seriously",
    "Dost bhi tum, pyaar bhi tum 😊",
    "ek bhi tum aur hazar bhi tum 🤩",
    "dukh me tum aur khushi me tum 🤨",
    "Jindagi ke safar me kaafi ho tum ❤",
    "Maine kaafi upr rkha h tumhe apni priority mei❤️",
    "You're my everything ✔",
    "You are my favourite ✨💕",
    "And of course... wait janne.....",
    "My future wife {in my dreams atleast}🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive or dead. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy{kadr nahi aapko vo alg baat hai}🥺",
    "I want to be with u forever.🤞✔",
    "IF you dont marry someone.💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😒",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "You're the best human being !! 💖",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "There's some hardships, 😢",
    "but you forgive me always 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "My whole life would be somewhere attached with you, 🥹",
    "my unconditional love,my private variable💖",
    "Please take care of myself who really loves you❤",
    "I'm binary in love; you're the one and only '1 in my life",
    "Thanking god isnt enough vese to but still very blessed to have you.🙏",
    "You're literally a lot to me more than a normal frnd,",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  