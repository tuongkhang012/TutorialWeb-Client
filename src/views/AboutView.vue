<template>
    <body class="container">

    <head>
        <title>About</title>
    </head>
    <main>
    <div class="mt-4 p-5 bg-secondary bg-gradient rounded">
        <div class="container">
            <h1 class="text-light">Made by Akane</h1>
        </div>
    </div>
    <div>
        <button type="button" class="btn btn-outline-secondary m-4 p-2" @click="showAlert">Say Hi!</button>
    </div>
    </main>

    </body>
</template>

<script>
export default {
    name: "AboutView",
    components: {
        
    },
    data() {
        return {
            
        };
    },
    methods: {
        showAlert() {
            alert("Hello there!");
        },
    },
};
</script>