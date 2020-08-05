let i = 0;
let j = 0;
let text = `hi, i'm Jake,`;
let secondText = `I design and code amazing websites and web applications...`;
let speed = 60;

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

const scrollElement = document.querySelector('#main-container');

const myAutoHeight = document.documentElement.scrollHeight;
const myAutoWidth = document.documentElement.scrollWidth;

var topScroll;
var midScroll;
var bottomScroll;

if (myAutoWidth >= myAutoHeight) {
  topScroll = myAutoHeight * -1;
  midScroll = myAutoHeight * -2;
  bottomScroll = myAutoHeight * -4;
} else {
  topScroll = myAutoHeight * -1;
  midScroll = myAutoHeight * -5;
  bottomScroll = myAutoHeight * -10;
}

window.addEventListener('scroll', (event) => {
  const { top } = scrollElement.getBoundingClientRect();
  if (top - window.outerHeight < topScroll) {
    scrollElement.style.backgroundImage =
      'url("../assets/images/trianglify-export.png")';
  }
  if (top - window.outerHeight < midScroll) {
    scrollElement.style.backgroundImage =
      'url("../assets/images/trianglify-export-other.png")';
  }
  if (top - window.outerHeight < bottomScroll) {
    scrollElement.style.backgroundImage =
      'url("../assets/images/trianglify-export-three.png")';
  }
});

setThis = () => {
  let thisInfo = $('<div id="technology-width-correction">');
  thisInfo.append(
    `<img class="tech-pics" src="assets/images/tech/HTML5_Logo_512.png" />
        <img class="tech-pics" src="assets/images/tech/css3.png" />
        <img class="tech-pics" src="assets/images/tech/bootstrap.png" />
        <img class="tech-pics" src="assets/images/tech/javascriptlang.png" />
        <img class="tech-pics" src="assets/images/tech/jquery.png" />
        <img
          class="tech-pics"
          src="assets/images/tech/430-4309307_react-js-transparent-logo-hd-png-download.png"
        />
        <img class="tech-pics" src="assets/images/tech/511529_preview.png" />
        <img class="tech-pics" src="assets/images/tech/mongodb-226029.png" />
        <img class="tech-pics" src="assets/images/tech/sql_694757.png" />
        <img class="tech-pics" src="assets/images/tech/aws-mobile-hub.svg" />
        <img class="tech-pics" src="assets/images/tech/git.png" />
        <img class="tech-pics" src="assets/images/tech/shopify.png" />`
  );
  $('.technology-me').append(thisInfo);
};

loadMyBackground = () => {
  let textInfo = $('<div>').attr('id', 'about-me');
  textInfo.append(`From database ties and cloud services to user experiences on the
  front, I work towards providing solutions with a full-stack
  toolbelt. Whether the work involves websites, applications or browser based games, I
  design, develop, test and produce stylish and polished projects,
  deeply involved from planning to publication. You can see a
  curated list of my work below.`);
  $('#full-width-top').append(textInfo);
};

loadMyHighlights = () => {
  let textInfo = $('<div>').addClass('row');
  textInfo.append(`            
  <div class="card project-cards col-lg-4 col-md-11 col-11" id="project-zone">
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
<div class="card project-cards col-lg-4 col-md-11 col-11">
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
      difficult enemies, all while becoming more powerful as players and gaining better party members.
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
<div class="card project-cards col-lg-4 col-md-11 col-11">
  <img
    src="assets/images/COVID19.PNG"
    class="card-img-top"
    alt="Friend Finder"
  />
  <div class="card-body">
    <h5 class="card-title">COVID-19 Info</h5>
    <p class="card-text">
      This is a progressive web application that provides
      users with information about the novel coronavirus and the
      disease it causes, COVID-19. Users can select from numerous
      countries to get specific data or global data, this selection
      will also provide articles from the New York Times.
    </p>
  </div>
  <div class="list-group list-group-flush">
    <p class="list-group-item">
      Bootstrap | jQuery | AJAX Methods | REST API
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
  let textInfo = $('<div>').addClass('row');
  let changeHeight;

  if (window.screen.width > 765) {
    changeHeight = parseInt(window.screen.height / 2);
  } else {
    changeHeight = parseInt(window.screen.height / 2.5);
  }

  textInfo.append(
    `
    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/mutual aid.PNG"
    class="other-project-images"
    alt="Mutual Aid World Application"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://mutualaid.world/"
    ><i class="material-icons bottom-icons">launch</i></a>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/resilience-app"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>The Mutual Aid applicaiton was put together by a team of developers, designers, community engagement officers and leaders in response to the COVID-19 outbreak. I provide development, testing and project management services to the application as well as the landing page.</p>
    </div>
    </div>


    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/john-wick-club-scene-screengrab.jpg"
    class="other-project-images"
    alt="Action Giphy App"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://jakeg-9191.github.io/Giphy-API/"
    ><i class="material-icons bottom-icons">launch</i></a>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/Giphy-API"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>An action themed gif gift, this site has pre-determined awesome movies for users to search for amazing gifs, though they can also search for thier own. Tech includes Boostrap, JavaScript, jQuery and REST API.</p>
    </div>
    </div>


    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/MyFavoriteThings.PNG"
    class="other-project-images"
    alt="My Favorite Things"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://myfavoritethingscolorado.com/"
    ><i class="material-icons bottom-icons">launch</i>
    </a>
    <p class='project-add-info'>E-Commerce website for small business, My Favorite Things. Tech includes custom Liquid and CSS on the Shopify CMS, in addition to in-depth SEO for pages and products.</p>
    </div>
    </div>


    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/Bearfoot Voyager.JPG"
    class="other-project-images"
    alt="Bearfoot Voyager"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://jakeg-9191.github.io/Barefoot-Voyager/"
    ><i class="material-icons bottom-icons">launch</i></a>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/Barefoot-Voyager"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>The perfect traveler companion application for those looking to learn about events, weather, and other happenings at thier destination. Tech includes Bootstrap, CSS, JavaScript and various REST API's.</p>
    </div>
    </div>


    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/DevConnector.JPG"
    class="other-project-images"
    alt="DevConnector Application"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://hidden-falls-47750.herokuapp.com/"
    ><i class="material-icons bottom-icons">launch</i></a>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/Denver-Dev-Connect"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>DevConnector is a social media platform focused on developers, users can create profiles, leave messages and more. Tech includes React, Bootstrap, Node, MongoDB, Authentication, Redux and Mongoose.</p>
    </div>
    </div>


    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/Friendfinder.JPG"
    class="other-project-images"
    alt="Friend Finder Application"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://boiling-bayou-10154.herokuapp.com/"
    ><i class="material-icons bottom-icons">launch</i></a>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/Friend-Finder"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>Friend Finder allows you to find your perfect best friend by providing answers to several questions which are then evaluated and compared to other participants for compatibility. Tech includes REST API, Node, Express and MongoDB.</p>
    </div>
    </div>


    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/managerLowInventory.JPG"
    class="other-project-images"
    alt="Bamazon Application"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/Bamazon-Node-App"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>This CLI application allows user to shop for inventory in the Bamazon store or act as the manager to view or modify current inventory. Tech includes Node and MySQL.</p>
    </div>
    </div>


    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/WashingtonPost.JPG"
    class="other-project-images"
    alt="Washington Post Scraper"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://chilling-crypt-08855.herokuapp.com/"
    ><i class="material-icons bottom-icons">launch</i></a>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/Mongo-Search"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>The Washington Post Scraper allows users to scrape for the latest articles from the Washington Post, view and save them for later reading. Tech includes MongoDB, Mongoose, Node and JavaScript.</p>
    </div>
    </div>

    
    <div class='col-12 col-md-4'>
    <img
    style='width: 100%; height: ${changeHeight}px;'
    src="assets/images/Simple-notes.PNG"
    class="other-project-images"
    alt="Simple Notes Application"
    />
    <div class='buttonProject'>
    <a
    class='button'
    target="_blank"
    href="https://jakeg-9191.github.io/Notes-App/"
    ><i class="material-icons bottom-icons">launch</i></a>
    <a
    class='button'
    target="_blank"
    href="https://github.com/JakeG-9191/Notes-App"
    ><i class="material-icons bottom-icons">developer_mode</i>
    </a>
    <p class='project-add-info'>This simple note application allows the user to utilize an extremely lightweight and responsive web based note storage. Information is currently saved based on local storage, so prior notes from the same device and browser will be saved for future use. Notes can be added or removed individually, and can also be mass deleted with one click. Tech includes HTML, CSS, JavaScript, jQuery and Local Storage.</p>
    </div>
    </div>
`
  );
  $('.about-me').append(textInfo);
};

loadMyPublications = () => {
  let textInfo = $('<div>').addClass('row').attr('id', 'about-me-2');
  textInfo.append(`
    <div class="col-md-12" id="publication-zone">
      <h3>Publications</h3>
      <div>
        <hr class='contact-hr-fix-publication'></hr>
        <a 
        class="publications"
        target="_blank"
        href="https://medium.com/dev-genius/getting-started-with-open-source-ce5231b23de8">
        Getting Started With Open Source [Medium]
        </a>
      </div>
      <div>
        <hr class='contact-hr-fix-publication'></hr>
        <a 
        class="publications"
        target="_blank"
        href="https://medium.com/dev-genius/four-quick-css-tricks-to-impress-79673c5edf6e">
        Four Quick CSS Tricks To Impress [Medium]
        </a>
      </div>
      <div>
        <hr class='contact-hr-fix-publication'></hr>
        <a 
        class="publications"
        target="_blank"
        href="https://medium.com/p/thinking-about-a-coding-bootcamp-eight-things-to-ponder-7fcec74f804d?source=email-38b720119ea--writer.postDistributed&sk=a276b8f749f67a6dbc5ca15aac07711d">
        Thinking About A Coding Bootcamp? Eight Things To Ponder [Medium]
        </a>
      </div>
      <div>
        <hr class='contact-hr-fix-publication'></hr>
        <a 
        class="publications"
        target="_blank"
        href="https://medium.com/@bjornsin/build-a-multiple-choice-trivia-game-react-61ee0f5bcf12?source=friends_link&sk=8235cc9a6a8f0be8d8ccdd44e43bd653">
        Build A Multiple Choice Trivia Game - React [Medium]
        </a>
      </div>
    </div>
  `);
  $('#full-width-bottom').append(textInfo);
};

loadMySkills = () => {
  let textInfo = $('<div>').addClass('row').attr('id', 'about-me-3');
  textInfo.append(`
    <div class="col-md-5 talents">
      <h4>Front End & CMS</h4>
      <h5>HTML5</h5>
      <h5>CSS3</h5>
      <h5>Client JavaScript / ES6+</h5>
      <h5>jQuery</h5>
      <h5>React</h5>
      <h5>Bootstrap</h5>
      <h5>Shopify</h5>
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
  <h3 style="color: black">More Information / Contact Me</h3>
</div>
<a 
  target="_blank" href="https://github.com/JakeG-9191"
  ><img
    id="contact-images"
    src="assets/images/links/Github-White.png"
/></a>

<a
  target="_blank"
  href="https://www.linkedin.com/in/jacob-garlick/"
  ><img
    id="contact-images"
    src="assets/images/links/LinkedIn-White.png"
/></a>

<a 
  target="_blank" href="https://twitter.com/garlick_jake"
  ><img
    id="contact-images"
    src="assets/images/links/Twitter-White.png"
/></a>

<a 
  target="_blank" href="https://medium.com/@bjornsin"
  ><img
    id="contact-images"
    src="assets/images/links/Medium-White.png"
/></a>

<hr class='contact-hr-fix'></hr>

<p style="color: black; margin-top: 1rem; letter-spacing: normal; font-size: x-large;">I am available for consultation or hire concerning website or web application development, please email me to discuss projects or positions.</p>

<hr class='contact-hr-fix'></hr>

<form
  action="https://formspree.io/mvowdjlr"
  method="POST"
>
  <label>
    <p class='form-text'>Email:</p>
    <input type="text" name="_replyto">
  </label>
  <label>
    <p class='form-text'>Message:</p>
    <textarea name="message"></textarea>
  </label>

  <button class='btn-dark' type="submit">Send</button>
</form>
`);
  $('#full-width-bottom').append(textInfo);
};

loadMyFooter = () => {
  let textInfo = $('<div>').addClass('my-footer container');
  textInfo.append(
    `
    <div class="row">
      <div class="col-md-12 col-12">
        <h6 style="font-weight: 900;">Copyright &copy (2020)</h6>
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
setTimeout(loadMyPublications, siteSetTime);
setTimeout(loadMySkills, siteSetTime);
setTimeout(loadMyContact, siteSetTime);
setTimeout(loadMyFooter, siteSetTime);
