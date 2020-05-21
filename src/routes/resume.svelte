<style>
    h1 {
        margin: 0;
    }
    h2 {
        margin-bottom: 1.6em;
    }
    address {
        max-width: 1100px;
        flex-wrap: wrap;
    }
    a + a {
      margin-left: 5%;
    }
    @media (max-width: 1020px) {
        figure {
            float: none;
            margin: 0 auto 2em;
        }
    }
    p {
        margin: 0;
        font-family: Avenir Next,Spoqa Han Sans,spoqahansans,Apple SD Gothic Neo,Nanum Barun Gothic,Nanum Gothic,Verdana,Arial,Malgun Gothic,Dotum,sans-serif;
    }
</style>

<svelte:head>
    <title>Resume</title>
</svelte:head>

<section class="container">
    <h2>Dong-ri, Shin</h2>
    <h6>
        Web Front-end Engineer based in Seoul, Korea.
    </h6>
    <address>
        <a href="mailto: shindongri89@gmail.com">shindongri89@gmail.com</a>
        <a href="https://github.com/Shindongri">github.com/Shindongri</a>
        <a href="tel:01092045680">+8210 9204 5680</a>
    </address>

    <article>
        <h2>Skills</h2>
        <ul>
            <li>
              <b>Languages</b>: HTML5, CSS3, Javascript, Typescript, Pug, Sass, SCSS
            </li>
            <li>
                <b>Web Front-end Skill Set</b>: React, Vue, Nuxt, Next, Webpack, Babel
            </li>
            <li>
                <b>Server-Side</b>: Node.js, Express, Sequelize, Mongoose
            </li>
            <li>
                <b>Cloud</b>: AWS EC2, lambda, RDS, Cloud-Front, S3, Code Pipeline, Code Build
            </li>
            <li>
              <b>Etc</b> : Github Actions CI/CD
            </li>
        </ul>
    </article>

    <hr />

    <article>
        <h2>Experience</h2>
        <p>
            <b>Web Front-end Engineer /
              <a href="https://terafunding.com">Tera Funding</a>
            </b>
        </p>
        <time datetime="2019-02-28">Feb, 2019</time>
        <span>~</span>

      <ul>
        <li>
          <b>PC / Mobile Web Maintenance</b>
          <ul>
            <li>PC / MW 유지보수성 업무 대응</li>
          </ul>
        </li>

        <li>
          <b>Toss, SSG Pay 등 외부 채널 연동</b>
          <ul>
            <li>
              Javascript, jQuery
            </li>
          </ul>
        </li>

        <li>
          <b>대출 플랫폼 웹 사이트 구축 (PC)</b>
          <small>
            : 차주를 위한 대고객 대출 플랫폼 (<a href="https://loan.terafunding.com/">https://loan.terafunding.com/</a>)
          </small>
          <ul>
            <li>Nuxt + Typescript</li>
            <li>Global State Machine : Vuex</li>
            <li>Zeplin, Storybook 을 활용한 디자이너와의 협업</li>
            <li>Git Flow 방식의 코드 리뷰 진행</li>
            <li>CSS Pre-processor : Sass, Scss</li>
            <li>BEM (Block Element Modifier) Naming Rule 도입</li>
            <li>Template Engine : Pug</li>
            <li>CI/CD : Github Actions</li>
          </ul>
        </li>

        <li>
          <b>투자 플랫폼 웹 사이트 구축 (PC)</b>
          <small>
            : 부동산 P2P 투자자를 위한 대고객 투자 플랫폼 (<a href="https://terafunding.com/">https://terafunding.com/</a>)
          </small>
          <ul>
            <li>Nuxt</li>
            <li>Global State Machine : Vuex</li>
            <li>Git Flow 방식의 코드 리뷰 진행</li>
            <li>Zeplin, Storybook 을 활용한 디자이너와의 협업</li>
            <li>CSS Pre-processor : Sass, Scss</li>
            <li>BEM(Block Element Modifier) Naming Rule 도입</li>
            <li>Template Engine : Pug</li>
            <li>CI/CD : AWS Code-Build, Code Pipeline</li>
          </ul>
        </li>
      </ul>

      <p>
          <b>
            Web Developer /
            <a href="https://www.i-on.net/index.html">I-ON Communications</a>
          </b>
        </p>
        <time datetime="2016-12-19">Dec, 2016</time>
        <span>~</span>
        <time datetime="2019-02-28">Feb, 2019</time>
        <ul>
          <li>
            <b>CMS(Contents Managament System) 개발</b>
          </li>
          <ul>
            <li>React, Next</li>
            <li>Global State Machine : Redux, MobX</li>
            <li>Middleware : Redux Thunk, Redux-Saga</li>
            <li>UI Framework : Ant Design</li>
            <li>CI : Jenkins</li>
          </ul>
        </ul>

        <p>
          <b>QA / Entrix</b>
        </p>
        <time datetime="2016-01-28 09:00">Jan, 2016</time>
        <span>~</span>
        <time datetime="2016-12">Dec, 2016</time>
        <ul>
            <li>Unit Test & Integration Test</li>
        </ul>
    </article>

    <hr />

    <article>
        <h2>Education</h2>
        <p>
            Information & Communication Engineering / Hansung univ.
        </p>
    </article>

  <hr />

  <article>
    <h2>Certificate</h2>
    <ul>
      <li>
        <p>
          정보 처리 기사
        </p>
        <time>May, 2016</time>
      </li>
    </ul>
  </article>

    <hr />

    <article>
        <h2>Projects</h2>
        <ul>
            <li>
                <p>SBDC 중소기업청 동반성장몰(폐쇄몰) 구축</p>
                <div>
                  <time>Sep, 2018</time>
                  <span>~</span>
                  <time>Feb, 2019</time>
                </div>
                <small>I-ON Communications</small>
            </li>
            <li>
                <p>소상인들의 웹사이트 제작 서비스 - Just10 ( Saas )</p>
                <div>
                  <time>June, 2018</time>
                  <span>~</span>
                  <time>Sep, 2018</time>
                </div>
                <small>I-ON Communications</small>
            </li>
            <li>
                <p>CJ Digital Music Mwave 시스템 구축</p>
                <div>
                  <time>Sep, 2017</time>
                  <span>~</span>
                  <time>June, 2018</time>
                </div>
                <small>I-ON Communications</small>
            </li>
            <li>
                <p>SBS 방송 시스템 CMS 구축</p>
                <div>
                  <time>May, 2017</time>
                  <span>~</span>
                  <time>Sep, 2017</time>
                </div>
                <small>I-ON Communications</small>
            </li>
            <li>
                <p>2018 평창 올림픽 및 패럴림픽 웹 사이트 구축</p>
                <div>
                  <time>Dec, 2016</time>
                  <span>~</span>
                  <time>May, 2017</time>
                </div>
                <small>I-ON Communications</small>
            </li>
        </ul>
    </article>
</section>
