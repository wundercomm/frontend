<template>
    <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative bg-nosferatu-700 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-nosferatu-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-nosferatu-700 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
                <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                </div>

                <!--
                Mobile menu, show/hide based on menu open state.

                Entering: "duration-150 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                -->
            </div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                <h3 class="text-1xl tracking-tight font-extrabold text-white sm:text-2xl md:text-2xl">
                    <span class="block xl:inline">Introducing All-in-one Comunincation</span>
                    <span class="block text-wundergreen-50 xl:inline"> All-in-one Comunincation </span>
                    <span class="block xl:inline">Platform</span>
                </h3>
                <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">WunderComm it just works for small business.</span>
                </h1>
                <p class="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    We're changing how small business can communicate, operate and grow. Every day is made of a mass of customer interactions. WunderComm is a refreshingly easy way to make each one count.
                </p>
                <div class="sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                    <a 
                        href="/subscribe"
                        class="
                            w-full 
                            flex 
                            items-center 
                            justify-center 
                            px-8 py-3 
                            border 
                            border-transparent 
                            text-base 
                            font-medium 
                            rounded-md 
                            hover:bg-green-900
                            bg-gradient-to-r 
                            from-wundergreen-900
                            to-wundergreen-50
                            md:py-4 
                            md:text-lg 
                            md:px-10
                        "
                    >
                        Apply for early access
                    </a>
                    </div>
                    <!-- <div class="mt-3 sm:mt-0 sm:ml-3 hidden">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Live demo
                    </a>
                    </div> -->
                </div>
                </div>
            </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="">
        </div>
        </div>
        
    </div>
</template>