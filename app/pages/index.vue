<script setup lang="ts">
useHead({
  title: 'jmesrje'
})
</script>

<template>
  <main class="select-none flex items-center justify-center min-h-screen">
    <div
      class="bg-background-color border-2 border-divider-color grid max-w-[800px] w-[800px] h-auto px-16 py-12 rounded-[16px]"
    >
      <p class="text-title-size font-bold">jmesrje</p>
      <p class="text-default-size font-bold">
        GMT-6 —
        <a
          class="text-link-color hover:text-default-color transition-colors"
          href="https://www.google.com/maps/place/Chicago,+IL/"
          target="_blank"
          >CHICAGO IL</a
        >
      </p>
      <div class="flex items-center gap-4 h-auto -ml-1 mt-4 mb-4">
        <a
          class="transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          href="https://github.com/jmesrje"
          target="_blank"
          ><Icon class="size-9" name="simple-icons:github"
        /></a>
        <a
          class="transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          href="https://developer.apple.com/forums/profile/jmesrje"
          target="_blank"
          ><Icon class="size-9" name="simple-icons:apple"
        /></a>
        <a
          class="transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          href="https://bsky.app/profile/jmesrje.bsky.social"
          ><Icon class="size-9" name="simple-icons:bluesky"
        /></a>
      </div>
      <p class="text-heading-size font-bold">about me</p>
      <ul class="list-disc my-2 px-8">
        <li><i>full-stack</i> - vue, lua, JS</li>
        <li><i>athlete</i> - calisthenics and track</li>
        <li><i>passionate</i> - committed to solving problems</li>
        <li><i>disciplined</i> - confident with challenges</li>
      </ul>
      <hr class="h-[2px] my-6 bg-divider-color border-0" />
      <p class="text-heading-size font-bold mb-2">positions</p>
      <p class="text-subtext-size text-subtext-color font-bold font-monospace">CURRENT</p>
      <ul class="list-disc my-2 px-8">
        <li>
          development lead -
          <a
            class="underline text-subtext-color hover:text-white transition-colors"
            href="#"
            >Axiom</a
          >
        </li>
      </ul>
      <p class="text-subtext-size text-subtext-color font-bold font-monospace">PAST</p>
      <ul class="list-disc my-2 px-8">
        <li>
          programmer lead -
          <a
            class="underline text-subtext-color hover:text-white transition-colors"
            href="#"
            >Lumin Labs</a
          >
        </li>
      </ul>
      <hr class="h-[2px] my-6 bg-divider-color border-0" />
      <p class="text-heading-size font-bold mb-2">current works</p>
      <p class="text-subtext-size text-subtext-color font-bold font-monospace">PUBLISHED</p>
      <ul class="list-disc my-2 px-8">
        <li>
          personal portfolio -
          <a
            class="underline text-link-color hover:text-white transition-colors"
            href="https://github.com/jmesrje/jmesrje.github.io"
            target="_blank"
            >jmesrje</a
          >
        </li>
        <li>
          zed charmed icons -
          <a
            class="underline text-link-color hover:text-white transition-colors"
            href="https://github.com/jmesrje/zed-charmed-icons"
            target="_blank"
            >jmesrje</a
          >
        </li>
      </ul>
      <p class="text-subtext-size text-subtext-color font-bold font-monospace">IN PROGRESS</p>
      <ul class="list-disc my-2 px-8">
        <li>
          axiom website -
          <a
            class="underline text-subtext-color hover:text-white transition-colors"
            href="#"
            >soon</a
          >
        </li>
      </ul>
    </div>
  </main>
</template>
