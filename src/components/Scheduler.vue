<template>
    <div>
        <v-form>

    <v-text-field v-model="phone" >Preferred Phone Number </v-text-field>
    <v-text-field v-model="name" >Your Name</v-text-field>
        <v-date-picker v-model="datePicked"></v-date-picker>
    <v-time-picker v-model="timePicked"></v-time-picker>
    </v-form>
    <v-btn @click="submitSchedule">Submit </v-btn>
    <v-btn @click="clearForm">Clear Form</v-btn>
    <p v-if="submitted">Thanks, {{name}}, we look forward to talking to you at {{timePicked}} on {{datePicked}}.  </p>
</div>
</template>
<script>
export default {
data(){
    return{
        timePicked: null,
        datePicked: null,
        name: null,
        phone: null,
        submitted: false,
        overlay: false
    }
},
methods:{
    submitSchedule: function(){
        this.submitted = true;
    },
    clearForm: function(){
        this.timePicked = null;
        this.datePicked = null;
        this.name = null;
        this.phone = null;
        this.submitted = false;
    }
}
    
}
</script>
<style scoped>

</style>