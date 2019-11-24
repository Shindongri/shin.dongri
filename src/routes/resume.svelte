<style>
    h1 {
        margin: 0;
    }
    h2 {
        margin-bottom: 1.6em;
    }
    address {
        max-width: 1100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
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

<section class="resume">
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
                Languages: HTML, CSS, Javascript, Typescript, SCSS
            </li>
            <li>
                Web Front-end Skill Set: React.js, Vue.js, Nuxt.js, Next.js, Webpack, Babel
            </li>
            <li>
                Server-Side: node.js, express
            </li>
            <li>
                Cloud: AWS EC2 / lambda / RDS / Cloud-Front / S3
            </li>
        </ul>
    </article>

    <hr />

    <article>
        <h2>Experience</h2>
        <p>
            Web Front-end Engineer /
            <a href="https://terafunding.com">Tera Funding</a>
        </p>
        <time datetime="2019-02-28">Feb, 2019</time>
        <span>~</span>
        <ul>
            <li>Desktop Web, Mobile Web 전반적인 개발에 참여</li>
            <li>vue.js, nuxt.js 프레임워크 사용</li>
            <li>Typescript, Pug, Sass 등의 전처리기 사용</li>
            <li>Zeplin, storybook 을 활용하여 디자이너와 협업</li>
            <li>git flow 전략을 사용한 버전 관리 및 코드 리뷰</li>
            <li>netlify, aws code pipeline, code build 등을 사용하여 CI/CD 구성</li>
        </ul>

        <p>Web Developer /
            <a href="https://www.i-on.net/index.html">I-ON</a>
        </p>
        <time datetime="2016-12-19">Dec, 2016</time>
        <span>~</span>
        <time datetime="2019-02-28">Feb, 2019</time>
        <ul>
            <li>react.js, next.js 사용한 CMS(Contents Managament System) 개발</li>
            <li>Jira, Confluence, Invision, Slack 등 협업 툴 사용</li>
        </ul>

        <p>QA / Entrix</p>
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
        <h2>Projects</h2>
        <ul>
            <li>
                <p>SBDC 중소기업청 동반성장몰 (폐쇄몰 ) 구축</p>
                <time>Sep, 2018</time>
                <span>~</span>
                <time>Feb, 2019</time>
                <p>
                    - next.js <br />
                    - redux <br />
                    - ant.design
                </p>
            </li>
            <li>
                <p>소상인들의 웹사이트 제작 서비스 - Just10 ( Saas )</p>
                <time>June, 2018</time>
                <span>~</span>
                <time>Sep, 2018</time>
                <p>
                    - nuxt.js <br />
                    - next.js
                </p>
            </li>
            <li>
                <p>CJ Digital Music Mwave 시스템 구축</p>
                <time>Sep, 2017</time>
                <span>~</span>
                <time>June, 2018</time>
                <p>
                    - react.js <br />
                    - redux
                </p>
            </li>
            <li>
                <p>SBS 방송 시스템 CMS 구축</p>
                <time>May, 2017</time>
                <span>~</span>
                <time>Sep, 2017</time>
                <p>
                    - react.js <br />
                    - redux
                </p>
            </li>
            <li>
                <p>2018 평창 올림픽 및 패럴림픽 웹 사이트 구축</p>
                <time>Dec, 2016</time>
                <span>~</span>
                <time>May, 2017</time>
                <p>
                    - jquery <br />
                    - jsp
                </p>
            </li>
        </ul>
    </article>
</section>
