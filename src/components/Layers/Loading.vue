<template>
<div ref="element">
</div>
</template>
<script>
const TAG = "Loading";
export default {
    data(){
        return {
            
            loadingComponent : {}
        }
    },
    mounted(){
        this.loadingComponent = this.$buefy.loading.open({
            container: this.$refs.element
        });
    },
    beforeDestroy() {
        this.loadingComponent.close();
        console.log(TAG, "On destroy evenet")
    }
}
</script>