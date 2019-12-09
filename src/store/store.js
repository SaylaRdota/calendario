import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        events: []
    },
    getters: {
        EVENTS: state => state.events
    },
    mutations: {
        ADD_EVENT: (state, event) =>{
            let i = state.events.findIndex( index => index.id == event.id)
            if(i == -1)
                state.events.push(event)
        },
        UPDATE_EVENT: (state, event) =>{
            let i = state.events.findIndex( index => index.id == event.id)
            if(i != -1){
                state.events[i].title = event.title
                state.events[i].start = event.start
                state.events[i].allDay = event.allDay
                state.events[i].end = event.end
            }
        }
    },
    action: {}
})

export default store