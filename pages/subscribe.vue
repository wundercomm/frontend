<script setup lang="ts">
    const userEmail = ref("");
    const backendResponse = ref("");
    async function suscribeToNewsletter() {
        const { data } = await useFetch(`/api/subscribe?email=${userEmail.value}`)
        backendResponse.value = data
    }
</script>

<template>
  <form @submit.prevent="suscribeToNewsletter" class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Subscribe to our newsletter
        </h1>
        <p class="leading-relaxed mt-4">
          I send out a weekly newsletter with tips and tricks for all-in-one
          communications whit your clients. 
          I promise, only relevant content will be sent.
        </p>
      </div>
      <div
        class="
          lg:w-2/6
          md:w-1/2
          bg-gray-100
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          mt-10
          md:mt-0
        "
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Subscribe
        </h2>

        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="userEmail"
            name="email"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <button
          class="
            text-nosferatu-900
            border-0
            py-2
            px-8
            focus:outline-none       
            rounded
            text-lg
            hover:bg-green-900
            bg-gradient-to-r 
            from-wundergreen-900
            to-wundergreen-50
          "
        >
          Subscribe
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Literally you probably haven't heard of them the things i'm bout to
          shoot into your inbox.
        </p>
      </div>
      <pre> {{ backendResponse }} </pre>
    </div>
  </form>
</template>
