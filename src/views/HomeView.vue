<template>
  <header>
    <div class="flex flex-col justify-center min-h-[55vh] bg-yellow-400 rounded-b-[50px] mb-[5%]">
      <div class="flex flex-col items-center w-2/3 mx-auto">
        <span class="font-plex font-bold text-6xl mb-5"> Learn Through Play </span>
        <p class="font-nunito text-2xl text-gray-800 text-center"> 
          A new way to learn languages with interactive exercises and LaTeX support
        </p>
        <div class="flex justify-around items-center mx-auto mt-8 space-x-4">
          <button class="btn-primary"> Try Demo </button>
          <button class="btn-primary"> Learn More </button>
        </div>
      </div>
    </div>
  </header>
  
  <article class="flex flex-col items-center px-6 lg:px-24 mb-[5%]">
    <span class="font-plex font-bold text-center text-4xl w-full block mb-16"> How EduWords works </span>
    <section class="relative">
      <div class="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600"></div>
      <div class="space-y-12">

        <div class="relative flex items-center" v-for="(item, index) in timeLine" :key="index+'tL'">
          <div class="absolute left-8 w-8 h-8 bg-yellow-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
            <i :class="['icon', `icon-${item.icon}`, 'text-white']"></i>
          </div>
          <div class="ml-16 bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300">
            <span class="text-xl font-semibold mb-2"> {{ item.title }} </span>
            <p class="text-gray-600"> {{ item.info }} </p>
          </div>
        </div>
      
      </div>
    </section>
  </article>

  <article class="flex flex-col p-6 lg:p-24 bg-gray-50">
    <span class="font-plex font-bold text-center text-4xl w-full block mb-8"> Features </span>
    <div class="flex flex-col md:flex-row items-stretch space-x-10  my-5">
      <section class="flex-1 flex flex-col justify-center items-center border-3 border-yellow-400 rounded-xl p-4 space-y-3 min-h-[25vh] mb-12 md:mb-0">
        <span class="font-nunito font-bold text-2xl w-full"> LaTeX Compatibility </span>
        <div class="w-full p-3 bg-gray-200/50 rounded-xl font-jet">
          \frac{d}{dx}\left(x^2\right) = 2x
        </div>
        <div class="w-full p-3 border-2 border-gray-200/75 rounded-xl font-jet">
          Result
        </div>
        <p class="text-gray-700 text-sm">
          Example of LaTeX mathematical notation rendered in your content
        </p>
      </section>
      <section class="flex-1 flex flex-col items-center p-4 space-y-10">
        <div class="flex items-start space-x-5 w-full">
          <span class="flex justify-center items-center bg-yellow-200 rounded-xl text-[1.5rem] text-amber-600 w-12 h-12"><i class="icon icon-file"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Mathematical Expressions</span>
            <p class="text-gray-700">
              Write complex mathematical formulas using LaTeX syntax, rendered beautifully in your content.
            </p>
          </div>
        </div>
        <div class="flex items-start space-x-5 w-full">
          <span class="flex justify-center items-center bg-yellow-200 rounded-xl text-[1.5rem] text-amber-600 w-12 h-12"><i class="icon icon-graduation"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Student-Friendly</span>
            <p class="text-gray-700">
              Designed specifically for university students, with academic features and formatting.
            </p>
          </div>
        </div>
        <div class="flex items-start space-x-5 w-full">
          <span class="flex justify-center items-center bg-yellow-200 rounded-xl text-[1.5rem] text-amber-600 w-12 h-12"><i class="icon icon-user"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Community Reviews</span>
            <p class="text-gray-700">
              Get feedback and suggestions from other students in your field.
            </p>
          </div>
        </div>
      </section>
    </div>
  </article>

  <section class="flex flex-col w-2/3 mx-auto py-24">
    <span class="text-3xl text-center font-bold mb-10">Our Mission</span>

    <div class="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400 mb-10">
      <p class="text-lg text-gray-700italic">
        "Our goal is simple: to create a platform where educational content can be freely shared, accessed, and
        improved upon by a community of learners and educators."
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="rounded-lg border-none shadow-md px-6 pt-8">
        <div class="flex items-start space-x-5 w-full p-5">
          <span class="flex justify-center items-center bg-yellow-100 rounded-full text-[1.5rem] text-amber-600 w-12 h-12"><i class="icon icon-share"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Sharing Knowledge</span>
            <p class="text-gray-700">
              We believe knowledge should be freely accessible to everyone. EduWords was created to facilitate the sharing of educational content across disciplines and borders.
            </p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border-none shadow-md px-6 pt-8">
        <div class="flex items-start space-x-5 w-full p-5">
          <span class="flex justify-center items-center bg-yellow-100 rounded-full text-[1.5rem] text-amber-600 w-12 h-12"><i class="icon icon-institute"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Supporting Education</span>
            <p class="text-gray-700">
              Our platform is designed to support schools and educational institutions by providing tools that make learning more interactive and engaging.
            </p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border-none shadow-md px-6 pt-8">
        <div class="flex items-start space-x-5 w-full p-5">
          <span class="flex justify-center items-center bg-yellow-100 rounded-full text-[1.5rem] text-amber-600 w-12 h-12"><i class="icon icon-book-open"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Democratizing Learning</span>
            <p class="text-gray-700">
              By making educational content freely available, we aim to democratize learning and reduce barriers to quality education.
            </p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border-none shadow-md px-6 pt-8">
        <div class="flex items-start space-x-5 w-full p-5">
          <span class="flex justify-center items-center bg-yellow-100 rounded-full text-[1.5rem] text-amber-600 w-12 h-12"><i class="icon icon-heart"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Community-Driven</span>
            <p class="text-gray-700">
              EduWords is built by students for students. We're not driven by profit, but by a passion for education and a desire to help others learn.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl flex p-6 my-10">
      <div class="flex flex-col">
        <span class="flex items-center text-3xl font-bold mb-5 font-merri"><i class="icon icon-stars mr-3 text-5xl text-amber-600"></i> The KISS Principle</span>
        <p class="font-plex ">
          At EduWords, we follow the KISS principle: <b>Keep It Simple, <del>Stupid</del></b>. We believe that simplicity is the ultimate sophistication, especially in education.
        </p>
        <div class="grid md:grid-cols-2 gap-6 pt-4">
          <div class="bg-white p-4 rounded-lg">
            <span class="font-semibold mb-2">Simple Design</span>
            <p class="text-gray-700">
              Our interface is intuitive and clutter-free, allowing users to focus on what matters: the content.
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <span class="font-semibold mb-2">Simple Workflow</span>
            <p class="text-gray-700">
              Creating and sharing content follows a straightforward process that anyone can master quickly.
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <span class="font-semibold mb-2">Simple Language</span>
            <p class="text-gray-700">
              We avoid jargon and complex terminology, making our platform accessible to users of all backgrounds.
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <span class="font-semibold mb-2">Simple Goals</span>
            <p class="text-gray-700">
              We focus on doing one thing well: helping people share and access educational content.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <span class="text-gray-700 text-center">
      Join us in our mission to make education more accessible, interactive, and enjoyable for everyone.
    </span>
  </section>

  <section class="flex flex-col items-stretch px-6 lg:px-24 py-20 bg-gray-50">

    <span class="text-3xl text-center font-bold mb-10">Future of EduWords</span>
    <span class="text-gray-700 text-xl mx-auto mb-8">EduWords is evolving to serve you better, while remaining completely free.</span>
    <span class="text-gray-700 text-xl mx-auto mb-8">EduWords is and will always be free to use. Creating an account unlocks additional features and ways to contribute.</span>

    <div class="flex space-x-5 mt-8">
      <div class="flex flex-col justify-center px-6 py-4 rounded-xl border-2 space-y-3 border-gray-200 bg-white" v-for="(item, index) in features" :key="index+'ft'">
        <i :class="`icon icon-${item.icon} text-yellow-500 text-4xl`"></i><span class="font-bold text-2xl mt-2"> {{ item.title }} </span>
        <p class="test-gray-600">
          {{ item.info }}
        </p>
      </div>
    </div>
  </section>

  <footer class="flex justify-between px-4 lg:px-16 py-8 w-full bg-primary">
    <div class="flex items-center">
      <div>
        <span class="flex items-center text-xl font-plex font-bold">
          <i class="icon icon-book mr-2"></i> BV-ESFM
        </span>
      </div>
    </div>
    <div class="flex items-center">
      <span class="font-nunito">
        Created by Cristian R
      </span>
    </div>
    <div class="flex items-center space-x-4">
      <span class="font-nunito">
        Terms &amp; Privacy
      </span>
      <span class="font-nunito">
        Contact
      </span>
    </div>
  </footer>
</template>

<script setup>
  const timeLine = [
    {
      title: 'Write LaTeX File',
      info: `
        Create your content using LaTeX syntax
      `,
      icon: 'file',
    },
    {
      title: 'Upload',
      info: `
        Upload your LaTeX file to EduWords
      `,
      icon: 'upload',
    },
    {
      title: 'Compile',
      info: `
        Our custom compiler processes your LaTeX on the server
      `,
      icon: 'server',
    },
    {
      title: 'Publish',
      info: `
        Your virtual book is now ready to be shared and read
      `,
      icon: 'book-open',
    },
  ]

  const features = [
    {
      title: 'Free Accounts',
      info: `
        Create a free account to access all features. Reading is always free for everyone.
      `,
      icon: 'user'
    },
    {
      title: 'Contribute and Interact',
      info: `
        With a free account, create, publish, comment, and suggest improvements to content.
      `,
      icon: 'edit'
    },
    {
      title: 'Continuous Upgrades',
      info: `
        We're constantly improving and adding new features to enhance your experience, all for free.
      `,
      icon: 'star'
    }
  ]
</script>

<style scoped>

</style>

