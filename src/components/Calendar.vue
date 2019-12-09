<template>
    <div>
        <div id='external-events'>
            <p>
                <strong>Draggable Events</strong>
            </p>
            <div class='fc-event'>My Event 1</div>
            <div class='fc-event'>My Event 2</div>
            <div class='fc-event'>My Event 3</div>
            <div class='fc-event'>My Event 4</div>
            <div class='fc-event'>My Event 5</div>
            <p>
                <input type='checkbox' id='drop-remove' />
                <label for='drop-remove'>remove after drop</label>
            </p>
        </div>
        <full-calendar ref="calendar"
                       :events="events"
                       :config="config"
        ></full-calendar>
    </div>
</template>

<script>
    import moment from 'moment'
  //  import { Draggable } from '@fullcalendar/interaction'
    import { FullCalendar } from 'vue-full-calendar'
    export default {
        components: {
            FullCalendar,
        },
        data() {
            return {
                events: [
                    // {
                    //     title  : 'event3',
                    //     start  : '2019-12-09T12:30:00',
                    //     allDay : false,
                    // }
                ],
                config: {
                    locale: 'es',
                    selectable: true,
                    droppable: true,
                    draggable: true,
                    editable: true,
                    dragRevertDuration: 0,
                    buttonText: {
                        today: 'Hoy',
                        month: 'Meses',
                        week: 'Semanas',
                        day: 'Dias',
                        list: 'Eventos'
                    },
                    select: this.handleSelect,
                    eventResize: this.updateEvent,
                    eventDrop: this.updateEvent,
                    eventClick: this.handleClick,
                    eventRender: this.renderEvent
                },

            }
        },
        methods: {
            // setupDraggable() {
            //     new Draggable(document.getElementById("planned-tasks"), {
            //         itemSelector: '.fc-event',
            //         eventData: function(eventEl) {
            //             return {
            //                 title: eventEl.innerText
            //             };
            //         }
            //     });
            // },
            test(args){
                //eslint-disable-next-line no-console
                console.log(args)
            },
            updateEvent(arg){
                const event = arg
                let i = this.events.findIndex( index => index.id == event.id)
                if(i != -1){
                    this.events[i].title = event.title
                    this.events[i].start = event.start
                    this.events[i].allDay = event.allDay
                    this.events[i].end = event.end
                }
            },
            handleSelect(ini, end){
                if(ini._ambigTime){
                    const event = {
                        id: (new Date()).getTime(),
                        title: 'Algo',
                        start: moment(ini._i).add(1, 'd'),
                        end: moment(end._i).add(1, 'd'),
                        allDay: ini._ambigTime
                    }
                    this.events.push(event)
                }else{
                    const event = {
                        id: (new Date()).getTime(),
                        title: 'Algo',
                        start: moment(ini._i),
                        end: moment(end._i),
                        allDay: ini._ambigTime
                    }
                    this.events.push(event)
                }
                this.refreshEvents()
            },
            handleClick(arg){
                this.modalShow = true
                this.modalText = 'Texto del modal'
                this.event = arg.event
            },
            renderEvent(){
                //eslint-disable-next-line no-console
                // console.log(args)
            },
            refreshEvents() {
                this.$refs.calendar.$emit('refetch-events')
            },
        },
        mounted() {
           // this.setupDraggable();
        },
    }

    // function transform(...list){
    //     let time = list[0] + '-' + (list[1] < 10? list[1] : '0' + list[1]) + (list[2] < 10? list[2] : '0' + list[2])
    //     time += 'T' + list[3] + ':' + list[4] + ':' + list[5]
    //     return time
    // }
</script>

<style scoped>

</style>