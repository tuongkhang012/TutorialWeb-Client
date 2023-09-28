<template>
    <div>
        <h2 class="mt-4">Schools</h2>
        <div class="float-end me-4 mb-2 p-2">
            <button type="button" class="btn btn-primary"
            data-bs-toggle="modal" data-bs-target="#inputSchool" @click="Create">Add school</button>
        </div>
        <div>
            <table class="table table-striped table-hover table-bordered border-secondary" >
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Number of Students</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(school, index) in schools" :key="index">
                        <th scope="row"> {{ index+1 }} </th>
                        <td>{{ school.name }}</td>
                        <td>{{ school.noStudents }}</td>
                        <td>
                            <button type="button" class="btn me-2 btn-info" data-bs-toggle="modal"
                            data-bs-target="#inputSchool" @click="Update(school)">Edit</button>
                            <button type="button" class="btn btn-danger" 
                            @click="Delete(school._id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Modal -->
            <div class="modal fade" id="inputSchool" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog d-flex justify-content-center">
                    <div class="modal-content w-75">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ schoolModal.txtTitle }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-4">
                            <form>
                                <div class="form-group mb-4">
                                    <label>Name:</label>
                                    <input v-model="schoolModal.dataSchool.name" type="text" placeholder="Name" 
                                    class="form-control" required />
                                </div>
                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block" @click="Submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from "../api/api.js";
import swal from "sweetalert"

export default {
    name: "SchoolView",
    async mounted(){
        this.getSchools()
    },
    data() {
        return {
            schools: [],
            schoolModal: {
                txtTitle: "",
                submitType: null,
                dataSchool: {
                    name: null,
                },
            },
        };
    },
    methods: {
        async Validation(inp){
            if(!inp.name)
                return {
                    ok: false,
                    msg: "Missing name!",
                }
            
            return {
                ok: true,
                msg: "ok"
            }
        },
        async getSchools() {
            const res = await axios.get("/schools")
            this.schools = res.data;
        },
        async Create(){
            this.schoolModal = {
                txtTitle: "Creating new school",
                submitType: "create",
                dataSchool: {
                    name: null,
                },
            }
        },
        async Update(school) {
            this.schoolModal = {
                txtTitle: "Updating existing school",
                submitType: "update",
                dataSchool: {
                    _id: school._id,
                    name: school.name,
                },
            }
        },
        async Submit() {
            const submitType = this.schoolModal.submitType;
            const data = this.schoolModal.dataSchool;
            const outputJson = await this.Validation(data);

            const checker = outputJson.ok;
            const msg = outputJson.msg;

            if(!checker){
                swal("Missing field!", msg, "error");
                return
            }

            if (submitType === "create") {
                await axios.post("/school", data);
                await swal("Success!", "Created new school", "success");
            } else {
                const { _id, ...rest } = data;
                await axios.put(`/school/${_id}`, rest);
            }
            await this.getSchools();
        },
        async Delete(_id) {
            await axios.delete(`/school/${_id}`);
            await this.getSchools();
        },
    },
};
</script>