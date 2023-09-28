<template>
    <div>
        <h2 class="mt-4">Students</h2>
        <div class="float-end me-4 mb-2 p-2">
            <button type="button" class="btn btn-primary"
            data-bs-toggle="modal" data-bs-target="#inputStudent" @click="Create">Add student</button>
        </div>
        <div>
            <table class="table table-striped table-hover table-bordered border-secondary" >
                <thead>
                    <tr>
                    <th scope="col-sm">ID</th>
                    <th scope="col-sm">Name</th>
                    <th scope="col-sm">Birthday</th>
                    <th scope="col-sm">Age</th>
                    <th scope="col-sm">Sex</th>
                    <th scope="col-sm">Height</th>
                    <th scope="col-sm">School</th>
                    <th scope="col-sm">School Year</th>
                    <th scope="col-sm">Equipments</th>
                    <th scope="col-sm">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index) in students" :key="index">
                        <th scope="row"> {{ index+1 }} </th>
                        <td>{{ student.name }}</td>
                        <td>{{ student.birth_day_f }}</td>
                        <td>{{ student.age }}</td>
                        <td>{{ student.sex_f }}</td>
                        <td>{{ student.height }}cm</td>
                        <td>{{ student.school?.map(s => s.name).join(', ') }}</td>
                        <td>{{ student.school_year }}</td>
                        <td>{{ student.equipments?.map(s => s.name).join(', ') }}</td>
                        <td>
                            <button type="button" class="btn me-2 btn-info" data-bs-toggle="modal"
                            data-bs-target="#inputStudent" @click="Update(student)">Edit</button>
                            <button type="button" class="btn btn-danger" 
                            @click="Delete(student._id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Modal -->
            <div class="modal fade" id="inputStudent" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg d-flex justify-content-center">
                    <div class="modal-content w-75">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ studentModal.txtTitle }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-4">
                            <form>

                                <div class="col mb-4">
                                    <label>Name:</label>
                                    <input v-model="studentModal.dataStudent.name" type="text" placeholder="Name" 
                                    class="form-control" required />
                                </div>
                                
                                <div class="row">
                                    <div class="col">
                                        <label>Sex:</label>
                                        <br>
                                        <label class="m-1">
                                            <input class="form-check-input me-1" v-model="studentModal.dataStudent.sex" 
                                            type="radio" value="false" name="optradio" required>Female</label>
                                        <label class="m-1">
                                            <input class="form-check-input me-1" v-model="studentModal.dataStudent.sex" 
                                            type="radio" value="true" name="optradio">Male</label>
                                    </div>

                                    <div class="col mb-4">
                                        <label>Birthday:</label>
                                        <input v-model="studentModal.dataStudent.birth_day" type="date" placeholder="Birthday"
                                        class="form-control" required/>
                                    </div>
                                    
                                    <div class="col mb-4">
                                        <label>Age:</label>
                                        <input v-model="studentModal.dataStudent.age" type="text" placeholder="Age" 
                                        class="form-control" required/>
                                    </div>
                                </div>
                                
                                <div class="row mb-4">
                                    <div class="col">
                                        <label for="school">School:</label>
                                        <div>
                                            <div v-for="(item, index) in schools" :key="index">
                                                <input class="form-check-input me-1" type="radio" :id="`s_${index}`" 
                                                :value="item._id" required
                                                v-model="studentModal.dataStudent.school">
                                                <label class="form-check-label me-1" :for="`s_${index}`">{{ item.name }}</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <label>School Year:</label>
                                        <input v-model="studentModal.dataStudent.school_year" type="text" 
                                        placeholder="School Year" class="form-control" required/>
                                    </div>

                                    <div class="col">
                                    <label>Height(cm):</label>
                                    <input v-model="studentModal.dataStudent.height" type="text" placeholder="Height" 
                                    class="form-control" required/>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label for="equipments">Equipments:</label>
                                    <div>
                                        <div class="form-group" v-for="(item, index) in equipments" :key="index">
                                            <input class="form-check-input m-1" type="checkbox" :id="`s_${index}`" :value="item._id" 
                                            :checked="studentModal.dataStudent.equipments.map(s => s._id).includes(item._id)"
                                            v-model="studentModal.dataStudent.equipments">
                                            <label class="form-check-label" :for="`s_${index}`">{{ item.name }}</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- Submit button -->
                                <button type="submit" :disable="disable" class="btn btn-primary btn-block" @click="Submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from "../api/api.js";
import moment from "moment";

export default {
    name: "StudentView",
    async mounted(){
        this.getStudents()
        this.getEquipments()
        this.getSchools()
    },
    data() {
        return {
            students: [],
            equipments: [],
            schools: [],
            studentModal: {
                txtTitle: "",
                submitType: null,
                dataStudent: {
                    name: null,
                    school: [],
                    birth_day: null,
                    age: null,
                    sex: null,
                    school_year: null,
                    height: null,
                    equipments: [],
                },
            },
        };
    },
    methods: {
        async getStudents() {
            const res = await axios.get("/students")
            this.students = await res.data.map((item) => {
                item.birth_day_f = moment(item.birth_day).format("DD/MM");
                item.sex_f = item.sex? "Male" : "Female" ;
                return item;
            });
        },
        async Validation(inp){
            if(!inp.name)
                return {
                    ok: false,
                    msg: "Missing name!",
                }

            if(!inp.sex)
                return {
                    ok: false,
                    msg: "Please select one gender!",
                }

            if(!inp.birth_day)
                return {
                    ok: false,
                    msg: "Missing birthday!",
                }

            if(!inp.age)
                return {
                    ok: false,
                    msg: "Missing age!",
                }
            
            if(!inp.school.length)
                return {
                    ok: false,
                    msg: "Please select one school!",
                }

            if(!inp.school_year)
                return {
                    ok: false,
                    msg: "Missing school year!",
                }
            
            if(!inp.height)
                return {
                    ok: false,
                    msg: "Missing height!",
                }
            
            return {
                ok: true,
                msg: "ok"
            }
        },
        async getEquipments() {
            const res = await axios.get("/equips")
            this.equipments = res.data
        },
        async getSchools() {
            const res = await axios.get("/schools")
            this.schools = res.data
        },
        async Create(){
            this.studentModal = {
                txtTitle: "Creating new student",
                submitType: "create",
                dataStudent: {
                    name: null,
                    school: [],
                    birth_day: null,
                    age: null,
                    sex: null,
                    school_year: null,
                    height: null,
                    equipments: [],
                },
            }
        },
        async Update(student) {
            this.studentModal = {
                txtTitle: "Updating existing student",
                submitType: "update",
                dataStudent: {
                    _id: student._id,
                    name: student.name,
                    school: student.school.map(s => s._id),
                    birth_day: student.birth_day,
                    age: student.age,
                    sex: student.sex,
                    school_year: student.school_year,
                    height: student.height,
                    equipments: student.equipments.map(s => s._id)
                },
            }
        },
        async Submit() {
            const submitType = this.studentModal.submitType;
            const data = this.studentModal.dataStudent;
            const outputJson = await this.Validation(data);

            const checker = outputJson.ok;
            const msg = outputJson.msg;

            if(!checker){
                swal("Missing field!", msg, "error");
                return
            }

            if (submitType === "create") {
                await axios.post("/student", data);
            } else {
                const { _id, ...rest } = data;
                await axios.put(`/student/${_id}`, rest);
            }
            await this.getStudents();
        },
        async Delete(_id) {
            await axios.delete(`/student/${_id}`);
            await this.getStudents();
        },
    },
};
</script>
