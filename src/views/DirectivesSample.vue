<template>
    <head>
        <title>Directives</title>
    </head>
    <div>
        <h2>Directives</h2>
        <!-- axios -->
        <div>
            <button @click="getStudents">Get Students</button>
            <ul align="left">
                <li v-for="student in data">
                    <p>Name: {{ student.name }}</p>
                    <p>Birthday: {{ student.birth_day }}</p>
                    <p>School: {{ student.school }}</p>
                    <p>Equipments: {{ student.equipments }}</p>
                </li>
            </ul>
        </div>
        <div>
            <button @click="showAlert">Alert</button>
        </div>
    </div>
</template>

<script>
// import PropsSample from "./PropsSample.vue";
import axios from "../api/api.js";

export default {
    name: "DirectivesSample",
    components: {
        // PropsSample,
    },
    data() {
        return {
            data: null,
        };
    },
    methods: {
        showAlert() {
            alert("Hello World!");
        },
        getStudents() {
            axios
            // direct to the link of the backend server api
                .get("/students")
                .then((response) => {
                    this.data = response.data.Student;
                })
                .catch((err) => {
                    console.log({
                        success: false,
                        message: 'Server error. Please try again.',
                        err: err.message
                    })
                });
        },
    },
};
</script>
