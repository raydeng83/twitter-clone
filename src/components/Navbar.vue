<template>
 <header>
  <nav class="cd-stretchy-nav">
    <a class="cd-nav-trigger" href="#0">
      <span aria-hidden="true"></span>
    </a>

    <ul>
      <li><a href="#0" class="active"><span>Home</span></a></li>
      <li><a href="#0"><span>Portfolio</span></a></li>
      <li><a href="#0"><span>Services</span></a></li>
      <li><a href="#0"><span>Store</span></a></li>
      <li><a href="#0"><span>Contact</span></a></li>
    </ul>

    <span aria-hidden="true" class="stretchy-nav-bg"></span>
  </nav>
</header>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        msg: 'navbar'
      }
    }
  }
</script>