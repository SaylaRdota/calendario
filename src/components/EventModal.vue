<template>
    <div>
        {{text}}
        <br>
        <b>Event Details:</b>
        <br>
       <b>Titulo</b>: {{ event.title }}
        <br>
        <b>Id:</b> {{ event.id }}
        <br>
        <b>Inicio:</b> {{ event.start }}
        <br>
        <b>Fin:</b> {{ event.end }}
        <hr>
        <br>
        <input type="text" v-model="title">
        <input type="date" v-model="start">
        <input type="date" v-model="end">
        <button @click="updateEvent"> Modificar</button>
    </div>
</template>

<script>

    export default {
        props: { text: String, event: Object},
        data: ()=>({
            title: '',
            start: {},
            end: {}
        }),
        mounted(){
            this.title = formatDate(this.event.title)
            this.start = formatDate(this.event.start)
            this.end = formatDate(this.event.end)
        },
        methods: {
            updateEvent(){
                this.$store.commit('UPDATE_EVENT',{
                    id: this.event.id,
                    title: this.title,
                    start: this.start,
                    end: this.end
                })
            }
        }
    }

    function formatDate(date){
        var options = {year: 'numeric', month: '2-digit', day: '2-digit'}
        let string = date.toLocaleString("ko-KR", options).replace(/\. /g, "-")

        return string.substr(0, string.length -1)
    }
</script>

<style scoped>

</style>