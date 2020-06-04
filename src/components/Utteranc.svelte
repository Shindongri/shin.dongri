<script>
  import { onMount } from 'svelte'

  const config = {
    src: 'https://utteranc.es/client.js',
    repo: 'Shindongri/shin.dongri',
    'issue-term': 'pathname',
    theme: 'github-light',
    crossorigin: 'anonymous',
  }

  let utterencesContainer

  onMount(() => {
    const utterancesScript = document.createElement('script')

    Object.keys(config).map(key => {
      utterancesScript.setAttribute(key, config[key])
    })

    utterencesContainer.appendChild(utterancesScript)
  })
</script>

<style>
  .utterences {

  }
</style>

<div class="utterences" bind:this={ utterencesContainer }></div>
