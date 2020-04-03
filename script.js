let i = 0;
let j = 0;
let text = `hi, i'm Jake,`;
let secondText = `I design and code amazing websites and web applications...`;
let speed = 80;

function typeWriter() {
  if (i < text.length) {
    document.getElementById('profile-name').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriterTwo() {
  if (j < secondText.length) {
    document.getElementById('profile-name-more').innerHTML += secondText.charAt(
      j
    );
    j++;
    setTimeout(typeWriterTwo, speed);
  }
}

function setThis() {
  let thisInfo = $('<div>');
  thisInfo.append(
    `<img class="tech-pics" src="assets/images/tech/HTML5_Logo_512.png" />
        <img class="tech-pics" src="assets/images/tech/badge-css-3-512.png" />
        <img class="tech-pics" src="assets/images/tech/javascriptlang.png" />
        <img
          class="tech-pics"
          src="assets/images/tech/430-4309307_react-js-transparent-logo-hd-png-download.png"
        />
        <img class="tech-pics" src="assets/images/tech/511529_preview.png" />
        <img class="tech-pics" src="assets/images/tech/mongodb-226029.png" />
        <img class="tech-pics" src="assets/images/tech/sql_694757.png" />
        <img class="tech-pics" src="assets/images/tech/AWS-logo.png" />`
  );
  $('.technology-me').append(thisInfo);
}

setTimeout(typeWriter, 1000);
setTimeout(typeWriterTwo, 3000);
setTimeout(setThis, 8000);
