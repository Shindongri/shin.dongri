<script>
  export let segment;
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    justify-content: flex-end;
    text-transform: uppercase;
    flex-wrap: wrap;
  }
  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }
  a:not(.selected) {
    opacity: 0.7;
  }
  a::before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }
  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }
  .selected::before {
    background: #3d6afe;
  }
</style>

<nav>
  <a class='{segment === undefined ? "selected" : ""}' href='/'>home</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>about</a>
<!--  <a class='{segment === "resume" ? "selected" : ""}' href='resume'>resume</a>-->
</nav>
