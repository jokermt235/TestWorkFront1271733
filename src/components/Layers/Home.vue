<template>
    <div class="tile is-parent">
        <div class="tile is-child is-2">
            <SideMenu></SideMenu>
        </div>
        <div class="tile is-child box">
            <div class="content">
                <div class="tile is-child is-3">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SideMenu from '@/components/Menus/SideMenu';
import App from '@/App';
export default  {
    extends : App,
    data(){
        return {
        }
    },
    components:{
        SideMenu
    }
}
</script>