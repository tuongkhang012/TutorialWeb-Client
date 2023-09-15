<template>
    <div>
        <h2>Directives</h2>
        <!-- axios -->
        <div>
            <button @click="getStudents">Get Students</button>
            <ul>
                <li v-for="student in data">
                    <p>{{ student.name }}</p>
                    <p>{{ student.birth_day }}</p>
                    <p>{{ student.school }}</p>
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
import axios from "axios";

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
            // thay đổi url của backend server api
                .get("http://localhost:8081/api/students")
                .then((response) => {
                    console.log(response);
                    this.data = response.data.Student;
                })
                .catch({});
        },
    },
};
</script>
