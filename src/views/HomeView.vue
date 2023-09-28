<template>
    <head>
        <title>Home</title>
    </head>
    <body class="container">

    <main>
    <div class="my-4">
        <img src="../../public/schale.png" alt="logo">
    </div>
    <div v-if="isLoggedIn" class="mt-4 p-5 bg-secondary bg-gradient rounded">
        <h1>Welcome back, {{ username }}!</h1>
    </div>
    <div v-else class="mt-4 p-5 bg-secondary bg-gradient rounded">
        <h1 class="text-light">Welcome to SCHALE!</h1>
        <p class="text-light">We thirst for the Seven Wailings,
        <br> We bear the Koan of Jericho</p>
    </div>
    </main>

    </body>
</template>

<script>
    export default {
        name: "HomeView",
        data () {
            return {
                isLoggedIn: false,
                username: "Akane",
            }
        }
    }
</script>