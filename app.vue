<template>
  <div>
    <full-page :options="options">
      <div class="section space-y-8 justify-center items-center px-12">
        <img src="@/assets/img/logo.jpg" alt="Logo" class="w-64" />
        <h1 class="text-7xl font-bold">Recap 2021-22</h1>
      </div>
      <div class="section justify-center items-center px-4 md:px-32">
        <div
          class="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4"
        >
          <h3 class="text-5xl">
            <span class="font-semibold">"not that we did a lot"</span> - Emily
            Kim, June 10
          </h3>
          <img
            src="https://c.tenor.com/WGdwJWHHDqIAAAAC/smh-thomas.gif"
            alt="Thomas the Train"
            class="w-96 mx-auto"
          />
        </div>
      </div>
      <div class="section justify-center items-center px-4 md:px-32">
        <div class="slide">
          <h2 class="text-6xl font-semibold">A fresh beginning...</h2>
        </div>
        <div class="slide flex justify-center items-center space-y-4">
          <img src="@/assets/img/app.png" alt="New App" class="w-64" />
          <p class="text-xl text-gray-100 font-extralight">
            A completely new app, with a completely new look.
          </p>
        </div>
        <div class="slide flex justify-center items-center space-y-4">
          <img
            src="@/assets/img/app_website.png"
            alt="New App Website"
            class="w-4/6"
          />
          <p class="text-xl text-gray-100 font-extralight">
            The brand new app website, built from the ground up.
          </p>
        </div>
        <div class="slide flex justify-center items-center space-y-4">
          <img
            src="@/assets/img/school_website.png"
            alt="New School Website"
            class="w-4/6"
          />
          <p class="text-xl text-gray-100 font-extralight">
            Our new school website, courtesy of our team.
          </p>
        </div>
      </div>
      <div class="section px-4 md:px-32">
        <div class="slide">
          <div
            class="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <h2 class="text-6xl font-semibold">App Stats!</h2>
            <svg
              class="w-48"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>
        </div>
        <div class="slide">
          <p class="text-2xl font-extralight">
            On the week of relaunch, we had
            <span class="font-bold">315 unique users</span> of the app—the
            single largest spike since October 2021 (which is when most Grade 9
            students downloaded the app).
          </p>
        </div>
        <div class="slide">
          <p class="text-2xl font-extralight">
            Since the app relaunch, we have had
            <span class="font-bold">456 unique users</span> and
            <span class="font-bold">102 new users</span> (never downloaded any
            version of the school app before).
          </p>
        </div>
        <div class="slide">
          <div
            class="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4"
          >
            <div class="flex flex-col text-left mx-auto space-y-8">
              <div class="flex flex-col">
                <h4 class="uppercase text-gray-300 text-2xl font-extralight">
                  IOS
                </h4>
                <h2 class="text-5xl">60.1%</h2>
              </div>
              <div class="flex flex-col">
                <h4 class="uppercase text-gray-300 text-2xl font-extralight">
                  Android
                </h4>
                <h2 class="text-5xl">39.9%</h2>
              </div>
            </div>
            <div>
              <p class="text-2xl font-extralight">
                Most of the users of the new app are using iOS.
              </p>
            </div>
          </div>
        </div>
        <div class="slide space-y-8">
          <h1 class="text-9xl">1,529</h1>
          <p class="text-2xl font-extralight">App sessions since May 8</p>
        </div>
        <div class="slide">
          <div
            class="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4"
          >
            <div class="flex flex-col text-left mx-auto space-y-8">
              <div class="flex flex-col">
                <h4 class="uppercase text-gray-300 text-2xl font-extralight">
                  App Lines of Code
                </h4>
                <h2 class="text-5xl">~8,577</h2>
              </div>
              <div class="flex flex-col">
                <h4 class="uppercase text-gray-300 text-2xl font-extralight">
                  App Commits
                </h4>
                <h2 class="text-5xl">77</h2>
              </div>
              <div class="flex flex-col">
                <h4 class="uppercase text-gray-300 text-2xl font-extralight">
                  Backend Lines of Code
                </h4>
                <h2 class="text-5xl">~1,705</h2>
              </div>
              <div class="flex flex-col">
                <h4 class="uppercase text-gray-300 text-2xl font-extralight">
                  Backend Commits
                </h4>
                <h2 class="text-5xl">49</h2>
              </div>
            </div>
            <div>
              <p class="text-2xl font-extralight">
                A lot of work was put into making this new app. (Thanks Kenny!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      options: {
        licenseKey: 'gplv3-license',
        sectionsColor: ['#8d122f', '#d97706', '#15803d', '#3b82f6'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        controlArrowsHTML: [
          '<svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block w-12 h-12 ml-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /> </svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block w-12 h-12 mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>',
        ],
      },
    };
  },
};
</script>

<style>
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: white;
}
.section {
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
}
</style>
