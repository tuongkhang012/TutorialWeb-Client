<template>
    <head>
        <title>Home</title>
    </head>
    <body class="container">

    <main>
    <div v-if="isLoggedIn" class="jumbotron">
        <h1>Welcome back, {{ username }}!</h1>
    </div>
    <div v-else class="jumbotron">
        <h1>It's empty</h1>
        <p>like my soul...</p>
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