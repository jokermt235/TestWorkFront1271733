<template>
    <div class="tile is-parent">
        <div class="tile is-child is-2">
            <SideMenu></SideMenu>
        </div>
        <div class="tile is-child box" ref="element">
            <div class="content">
                <table>
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Ферма</th>
                            <th>Телефон</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in users" :key="item.uid">
                            <td>{{item.name}}</td>
                            <td><a @click="showModal(item)">{{item.farm}}</a></td>
                            <td>{{item.phone}}</td>
                            <td>
                                <b-switch v-model="item.status" @input="onSwitch(item)">
                                    Разрешен
                                </b-switch>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <farm-list ref="farmListModal" @confirm="onConfirm()"></farm-list>
    </div>
</template>
<script>
import SideMenu from '@/components/Menus/SideMenu';
import FarmList from '@/components/Modals/FarmList';
const CustomFirebase = require('@/scripts/custom-firebase.js');
export default {
    data(){
        return {
            users : [],
            user  : {},
            db    : CustomFirebase.default.firestore(),
            loadingComponent : {}
        }
    },
    mounted(){
        this.loadingComponent = this.$buefy.loading.open({
                container: this.$refs.element
        });
        this.load();
        
    },
    components:{
        SideMenu,
        FarmList
    },
    methods: {
        showModal(params){
            this.$refs.farmListModal.show();
            this.user = params;
        },
        onConfirm(){
            console.log(this.$refs.farmListModal.getItem());

            var data = this.user;
            data._farm = "/farm/" + this.$refs.farmListModal.getItem().id;
            data.farm  = this.$refs.farmListModal.getItem().name;
            data.farm_city = this.$refs.farmListModal.getItem().city;
            this.db.collection("user").doc(this.user.id).set(data).then(()=>{
                //this.load();
            });
        },
        load(){
            this.db.collection("user").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if(typeof(this.users) == "object"){
                        var data = doc.data();
                        data.id = doc.id;
                        this.users.push(data);
                    }
                });
                this.loadingComponent.close();
            });
        },
        onSwitch(item){
            this.db.collection("user").doc(item.id).set(item).then(()=>{
                //this.load();
            });
        }
    }
}
</script>
