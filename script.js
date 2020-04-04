let i = 0;
let j = 0;
let text = `hi, i'm Jake,`;
let secondText = `I design and code amazing websites and web applications...`;
let speed = 70;

typeWriter = () => {
  if (i < text.length) {
    document.getElementById('profile-name').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriterTwo = () => {
  if (j < secondText.length) {
    document.getElementById('profile-name-more').innerHTML += secondText.charAt(
      j
    );
    j++;
    setTimeout(typeWriterTwo, speed);
  }
};

setThis = () => {
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
};

loadMyBackground = () => {
  let textInfo = $('<div>').attr('id', 'about-me');
  textInfo.append(`From database ties and cloud services to user experiences on the
  front, I work towards providing solutions with a full-stack
  toolbelt. From websites to applications to browser based games, I
  design, develop and produce stylish and polished projects,
  critically involved from planning to publication. You can see a
  curated list of my work below, along with some of my most recent
  projects.`);
  $('#full-width-top').append(textInfo);
};

loadMyHighlights = () => {
  let textInfo = $('<div>').addClass('row');
  textInfo.append(`            
  <div class="card project-cards col-md-3 col-11" id="project-zone">
  <img
    src="assets/images/Solar 1 resized.png"
    class="card-img-top"
    alt="Our Solar System!"
  />
  <div class="card-body">
    <h5 class="card-title">Our Solar System!</h5>
    <p class="card-text">
      A companion progressive web application for students of all
      ages interested in learning more about the solar system we
      call home. This web application includes trivia, dynamicly
      generated and static facts, an interactive map, rover image
      searching and plenty more.
    </p>
  </div>
  <div class="list-group list-group-flush">
    <p class="list-group-item">
      React | MongoDB | REST API | Bootstrap | Node.js | Axios |
      Express.js
    </p>
  </div>
  <div class="card-body">
    <a
      target="_blank"
      href="https://sheltered-anchorage-22057.herokuapp.com/"
      class="card-link"
      ><button class="btn-dark">
        <i class="material-icons">launch</i>
      </button></a
    >
    <a
      target="_blank"
      href="https://github.com/JakeG-9191/Solar-System-Info"
      class="card-link"
      ><button class="btn-dark">
        <i class="material-icons">developer_mode</i>
      </button></a
    >
  </div>
</div>
<div class="card project-cards col-md-3 col-11">
  <img
    src="assets/images/ReignOfReact.JPG"
    class="card-img-top"
    alt="Reign of React"
  />
  <div class="card-body">
    <h5 class="card-title">Reign of React</h5>
    <p class="card-text">
      This full-stack MERN application is an RPG game with a card
      collection and party creation aspect and features persistent
      data so players can continue returning and challening more
      difficult enemies, all while collecting more powerful allies.
    </p>
  </div>
  <div class="list-group list-group-flush">
    <p class="list-group-item">
      React | Express.js | Node.js | MongoDB | Bootstrap | REST API
      | Axios
    </p>
  </div>
  <div class="card-body">
    <a
      target="_blank"
      href="https://frozen-garden-53520.herokuapp.com/"
      class="card-link"
      ><button class="btn-dark">
        <i class="material-icons">launch</i>
      </button></a
    >
    <a
      target="_blank"
      href="https://github.com/ngocduyvo12/project-3-MERN"
      class="card-link"
      ><button class="btn-dark">
        <i class="material-icons">developer_mode</i>
      </button></a
    >
  </div>
</div>
<div class="card project-cards col-md-3 col-11">
  <img
    src="assets/images/COVID19.PNG"
    class="card-img-top"
    alt="Friend Finder"
  />
  <div class="card-body">
    <h5 class="card-title">COVID-19 Quick Information</h5>
    <p class="card-text">
      This is a simple progressive web application that provides
      users with information about the novel coronavirus and the
      disease it causes, COVID-19. Users can select from numerous
      countries to get specific data or global data, this selection
      will also provide articles from the New York Times.
    </p>
  </div>
  <div class="list-group list-group-flush">
    <p class="list-group-item">
      Bootstrap | jQuery | AJAX | 3rd Party API
    </p>
  </div>
  <div class="card-body">
    <a
      target="_blank"
      href="https://jakeg-9191.github.io/COVID-19-info/"
      class="card-link"
      ><button class="btn-dark">
        <i class="material-icons">launch</i>
      </button></a
    >
    <a
      target="_blank"
      href="https://github.com/JakeG-9191/COVID-19-info"
      class="card-link"
      ><button class="btn-dark">
        <i class="material-icons">developer_mode</i>
      </button></a
    >
  </div>
</div>
</div>`);
  $('.projects-go-here').append(textInfo);
};

loadMyProjects = () => {
  let textInfo = $('<div>');
  textInfo.append(
    `
    <div class="card-bottom card">
      <img
        src="assets/images/john-wick-club-scene-screengrab.jpg"
        class="card-img-top"
        alt="Action Giphy App"
      />
      <div class='card-body'>
      <h5 class='card-title'>Action Giphy App</h5>
      <a
        target="_blank"
        href="https://jakeg-9191.github.io/Giphy-API/"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">launch</i>
        </button></a
      >
      <a
        target="_blank"
        href="https://github.com/JakeG-9191/Giphy-API"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">developer_mode</i>
        </button></a
      >
      </div>
    </div>
    <div class="card-bottom card">
      Washington Post Scraper
      <img
        src="assets/images/WashingtonPost.JPG"
        class="card-img-top"
        alt="Washington Post Scraper"
      />
      <a
        target="_blank"
        href="https://chilling-crypt-08855.herokuapp.com/"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">launch</i>
        </button></a
      >
      <a
        target="_blank"
        href="https://github.com/JakeG-9191/Mongo-Search"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">developer_mode</i>
        </button></a
      >
    </div>
    <div class="card-bottom card">
      Bearfoot Voyager
      <img
        src="assets/images/Bearfoot Voyager.JPG"
        class="card-img-top"
        alt="Bearfoot Voyager"
      />
      <a
        target="_blank"
        href="https://jakeg-9191.github.io/Barefoot-Voyager/"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">launch</i>
        </button></a
      >
      <a
        target="_blank"
        href="https://github.com/dlafrance99/Project-one-take-two"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">developer_mode</i>
        </button></a
      >
    </div>
    <div class="card-bottom card">
      DevConnector
      <img
        src="assets/images/DevConnector.JPG"
        class="card-img-top"
        alt="Burger Madness"
      />
      <a
        target="_blank"
        href="https://hidden-falls-47750.herokuapp.com/"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">launch</i>
        </button></a
      >
      <a
        target="_blank"
        href="https://github.com/JakeG-9191/Denver-Dev-Connect"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">developer_mode</i>
        </button></a
      >
    </div>
    <div class="card-bottom card">
      Crystal Collector
      <img
        src="assets/images/Purple Crystal.jpg"
        class="card-img-top"
        alt="Crystal Collector"
      />
      <a
        target="_blank"
        href="https://jakeg-9191.github.io/Unit-4-Game/"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">launch</i>
        </button></a
      >
      <a
        target="_blank"
        href="https://github.com/JakeG-9191/Unit-4-Game"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">developer_mode</i>
        </button></a
      >
    </div>
    <div class="card-bottom card">
      MySQL Bamazon Store (CLI)
      <img
        src="assets/images/managerLowInventory.JPG"
        class="card-img-top"
        alt="Bamazon Application"
      />
      <a target="_blank" href=""
        ><button
          disabled
          style="color: gray"
          class="btn-dark btn-sm project-button"
        >
          <i class="material-icons spinning">launch</i>
        </button></a
      >
      <a
        target="_blank"
        href="https://github.com/JakeG-9191/Bamazon-Node-App"
        ><button class="btn-dark btn-sm project-button">
          <i class="material-icons spinning">developer_mode</i>
        </button></a
      >
    </div>
`
  );
  $('.about-me').append(textInfo);
};

loadMySkills = () => {
  let textInfo = $('<div>').addClass('row').attr('id', 'about-me-2');
  textInfo.append(`            
    <div class="col-md-5 talents">
    <h4>Front End</h4>
    <h5>HTML5</h5>
    <h5>CSS3</h5>
    <h5>Client JavaScript</h5>
    <h5>React</h5>
    <h5>Bootstrap</h5>
  </div>
  <div class="col-md-5 talents">
    <h4>Back End</h4>
    <h5>Node.js</h5>
    <h5>Express.js</h5>
    <h5>MongoDB</h5>
    <h5>MySQL</h5>
    <h5>RESTful APIs</h5>
    <h5>Unit & Integration Testing</h5>
    <h5>Cloud Services (AWS)</h5>
  </div>`);
  $('#full-width-bottom').append(textInfo);
};

loadMyContact = () => {
  let textInfo = $('<form>').attr('id', 'contact-information');
  textInfo.append(`            
<div id="contact-me">
  <h3 style="color: white">Contact Me</h3>
</div>
<a target="_blank" href="https://github.com/JakeG-9191"
  ><img
    id="contact-images"
    src="assets/images/links/Github-White.png"
/></a>

<a
  target="_blank"
  href="https://www.linkedin.com/in/jacob-garlick/"
  ><img
    id="contact-images-linked"
    src="assets/images/links/LinkedIn-White.png"
/></a>

<a target="_blank" href="https://twitter.com/garlick_jake"
  ><img
    id="contact-images"
    src="assets/images/links/Twitter-White.png"
/></a>

<a target="_blank" href="mailto:jacobgarlick@msn.com"
  ><img
    id="contact-images"
    src="assets/images/links/Email-White.png"
/></a>
`);
  $('#full-width-bottom').append(textInfo);
};

loadMyTwitter = () => {
  $('#full-width-bottom').append(`
  <a
  class="twitter-timeline"
  data-lang="en"
  data-height="550"
  data-theme="dark"
  href="https://twitter.com/garlick_jake?ref_src=twsrc%5Etfw"
  >Tweets by garlick_jake</a
>
<script
  async
  src="https://platform.twitter.com/widgets.js"
  charset="utf-8"
></script>
  `);
};

loadMyFooter = () => {
  let textInfo = $('<div>').addClass('my-footer container');
  textInfo.append(
    `
    <div class="row">
      <div class="col-md-12 col-12">
        Copyright &copy (2020)
      </div>
    </div>
    `
  );
  $('#footer-location').append(textInfo);
};

const siteSetTime = 7000;

setTimeout(typeWriter, 1000);
setTimeout(typeWriterTwo, 2000);
setTimeout(setThis, 6000);
setTimeout(loadMyBackground, siteSetTime);
setTimeout(loadMyHighlights, siteSetTime);
setTimeout(loadMyProjects, siteSetTime);
setTimeout(loadMySkills, siteSetTime);
setTimeout(loadMyContact, siteSetTime);
setTimeout(loadMyTwitter, siteSetTime);
setTimeout(loadMyFooter, siteSetTime);
