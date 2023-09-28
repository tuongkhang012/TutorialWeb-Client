<template>
    <div>
        <h2 class="mt-4">Equipments</h2>
        <div class="float-end me-4 mb-2 p-2">
            <button type="button" class="btn btn-primary"
            data-bs-toggle="modal" data-bs-target="#inputEquip" @click="Create">Add equipment</button>
        </div>
        <div>
            <table class="table table-striped table-hover table-bordered border-secondary" >
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Tier</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(equipment, index) in equipments" :key="index">
                        <th scope="row"> {{ index+1 }} </th>
                        <td>{{ equipment.name }}</td>
                        <td>{{ equipment.type }}</td>
                        <td>{{ equipment.tier }}</td>
                        <td>
                            <button type="button" class="btn me-2 btn-info" data-bs-toggle="modal"
                            data-bs-target="#inputEquip" @click="Update(equipment)">Edit</button>
                            <button type="button" class="btn btn-danger" 
                            @click="Delete(equipment._id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Modal -->
            <div class="modal fade" id="inputEquip" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog d-flex justify-content-center">
                    <div class="modal-content w-75">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ equipmentModal.txtTitle }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-4">
                            <form>
                                <div class="form-outline mb-4">
                                    <label>Name:</label>
                                    <input v-model="equipmentModal.dataEquip.name" type="text" placeholder="Name" 
                                    class="form-control" required/>
                                </div>
                                <div class="form-outline mb-4">
                                    <label>Type:</label>
                                    <input v-model="equipmentModal.dataEquip.type" type="text" placeholder="Type" 
                                    class="form-control" required/>
                                </div>
                                <div class="form-outline mb-4">
                                    <label>Tier:</label>
                                    <input v-model="equipmentModal.dataEquip.tier" type="number" placeholder="Tier" 
                                    class="form-control" required/>
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

export default {
    name: "EquipmentView",
    async mounted(){
        this.getEquipments()
    },
    data() {
        return {
            equipments: [],
            equipmentModal: {
                txtTitle: "",
                submitType: null,
                dataEquip: {
                    name: null,
                    type: null,
                    tier: null,
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
                
            if(!inp.type)
                return {
                    ok: false,
                    msg: "Missing type!",
                }
            
            if(!inp.tier)
                return {
                    ok: false,
                    msg: "Missing tier!",
                }
            
            return {
                ok: true,
                msg: "ok"
            }
        },
        async getEquipments() {
            const res = await axios.get("/equips")
            this.equipments = res.data;
        },
        async Create(){
            this.equipmentModal = {
                txtTitle: "Creating new equipment",
                submitType: "create",
                dataEquip: {
                    name: null,
                    type: null,
                    tier: null,
                },
            }
        },
        async Update(equipment) {
            this.equipmentModal = {
                txtTitle: "Updating existing equipment",
                submitType: "update",
                dataEquip: {
                    _id: equipment._id,
                    name: equipment.name,
                    type: equipment.type,
                    tier: equipment.tier,
                },
            }
        },
        async Submit() {
            const submitType = this.equipmentModal.submitType;
            const data = this.equipmentModal.dataEquip;
            const outputJson = await this.Validation(data);

            const checker = outputJson.ok;
            const msg = outputJson.msg;

            if(!checker){
                swal("Missing field!", msg, "error");
                return
            }

            if (submitType === "create") {
                await axios.post("/equip", data);
            } else {
                const { _id, ...rest } = data;
                await axios.put(`/equip/${_id}`, rest);
            }
            await this.getEquipments();
        },
        async Delete(_id) {
            await axios.delete(`/equip/${_id}`);
            await this.getEquipments();
        },
    },
};
</script>