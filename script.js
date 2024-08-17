const $button = $("#button");
const $toasts = $("#toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

$button.on("click", function () {
  createNotification();
});

function createNotification(message = null, type = null) {
  const notif = $("<div></div>")
    .addClass("toast")
    .addClass(type ? type : getRandomType())
    .text(message ? message : getRandomMessage());

  $("#toasts").append(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
