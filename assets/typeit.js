var cursorChars = ["_", "|", "&block;"];
var cursor = cursorChars[Math.floor(Math.random() * cursorChars.length)];

const jobInstance = new TypeIt("#job", {
  cursorChar: cursor,
  speed: 60,
})
  .type("bioinformatician & full-stack developer", { delay: 1000 })
  .move(-12, { delay: 250 })
  .delete(1, { delay: 200 })
  .type("4", { delay: 300 })
  .options({ speed: 33 })
  .move(null, { to: "end" })
  .go();

const ghInstance = new TypeIt("#gh", {
  cursorChar: cursor,
  speed: 75,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .type("check my github <span class='fa-brands'></span>")
  .go();

const linkedinInstance = new TypeIt("#linkedin", {
  cursorChar: cursor,
  speed: 75,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .type("find me on my linked<span class='fa-brands'></span>")
  .go();

const emailInstance = new TypeIt("#email", {
  cursorChar: cursor,
  speed: 75,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .type("send an email to <span style='font-weight: bold;'>leo@leogillet.com</span>")
  .go();

const aotyInstance = new TypeIt("#aoty", {
  cursorChar: cursor,
  speed: 75,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .type("what i'm listening to <span class='fa-solid'></span>")
  .go();
