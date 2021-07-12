<template>
    <div class="tile is-parent">
        <div class="tile is-child is-2">
            <SideMenu></SideMenu>
        </div>
        <div class="tile is-child box">
            <b-field horizontal label="Добавить Книгу">
                <b-input v-model="item.name"   placeholder="Наименование"></b-input>
                <b-input v-model="item.region" placeholder="Автор"></b-input>
                <b-input v-model="item.city"   placeholder="Кол-во страниц"></b-input>
                <b-button label="Сохранить" type="is-success" @click="add()" />
            </b-field>
            <div class="content box" ref="loading">
                <table>
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Автор</th>
                            <th>Операции</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data" :key="item.name">
                            <td>{{item.name}}</td>
                            <td>{{item.author_id}}</td>
                            <td>{{item.page_count}}</td>
                            <td>
                                <div class="buttons">
                                    <b-button type="is-danger" @click="remove(item)"
                                    icon-left="delete" label="Удалить" />
                                    <b-button type="is-warning" @click="edit(item)"
                                icon-left="check" label="Изменить" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <farm ref="farmModal" @confirm="onConfirm()"></farm>
    </div>
</template>
<script>
import SideMenu from '@/components/Menus/SideMenu';
import Book from '@/components/Modals/Book';
export default {
    data(){
        return {
            columns  : [ {field : "name", label : "Наименование"}, {field : "author_id", label : "автор"}],
            data : [],
            loadingComponent  : {},
            item : {}
        }
    },
    mounted(){
        this.load();
    },
    methods : {
        add(){

        },
        load(){
            this.data = [];
            this.loadingComponent = this.$buefy.loading.open({
                container: this.$refs.loading
            });
        },
        remove(param){
        },
        edit(param){
        },
        onConfirm(){
        }
    },
    components:{
        SideMenu,
        Book
    }
}
</script>
