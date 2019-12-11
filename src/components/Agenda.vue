<template>
    <div>
        <full-calendar
                id="calendar"
                :locale="esLocale"
                ref="calendar"
                :plugins="calendarPlugins"
                height="parent"
                :header="{
                    left: 'title',
                    center: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
                    right: 'prev today next'
                 }"
                :buttonText="{
                    today: 'Hoy',
                    month: 'Meses',
                    week: 'Semanas',
                    day: 'Dias',
                    list: 'Eventos',
                    prev: '<',
                    next: '>'
                }"
                :eventTimeFormat = "{
                  hour: 'numeric',
                  minute: '2-digit',
                  meridiem: 'short'
                    }"
                :sync="true"
                :eventLimit="true"
                :views="{
                    timeGrid: {
                    eventLimit: 4
                              }
                        }"
                :navLinks="true"
                :weekNumbers="true"
                :nowIndicator="true"
                :weekNumbersWithinDays="true"
                :selectable="true"
                :events="events"
                themeSystem="bootstrap"
                :droppable="true"
                :draggable="true"
                @change="refreshEvents()"
                :editable="true"
                @select="handleSelect"
                @eventResize="updateEvent"
                @eventDrop="updateEvent"
                @eventClick="handleClick"
                @eventRender="renderEvent"
        ></full-calendar>
        <b-modal v-model="modalShow">
            <event-modal :text="modalText" :event="event"></event-modal>
        </b-modal>

    </div>
</template>

<script>
    require('@fullcalendar/core/main.min.css')
    require('@fullcalendar/daygrid/main.min.css')
    require('@fullcalendar/timegrid/main.min.css')
    require('@fullcalendar/list/main.css')

    // import InteractionPlugin, { Draggable } from '@fullcalendar/interaction'
    import Fullcalendar from '@fullcalendar/vue'
    import DayGridPlugin from '@fullcalendar/daygrid'
    import TimeGridPlugin from '@fullcalendar/timegrid'
    import InteractionPlugin from '@fullcalendar/interaction'
    import bootstrapPlugin from '@fullcalendar/bootstrap'
    import ListPlugin from '@fullcalendar/list'
    // import Tooltip from 'bootstrap/js/dist/tooltip'
    import EventModal from './EventModal'
    import esLocale from '@fullcalendar/core/locales/es';

    export default {
        name: 'calendar',
        data: ()=> ({
            esLocale: esLocale,
            modalShow: false,
            modalText: '',
            event: {},
            events: [],
            calendarPlugins: [
                DayGridPlugin,
                TimeGridPlugin,
                bootstrapPlugin,
                InteractionPlugin,
                ListPlugin
            ]
        }),
        components : {
            EventModal,
            'full-calendar' : Fullcalendar,
            'event-modal' : EventModal
        },
        mounted() {
            // this.setupDraggable();
        },
        methods: {
            // setupDraggable() {
            //     new Draggable(document.getElementById("planned-tasks"), {
            //         itemSelector: ".fc-event",
            //         eventData: function(eventEl) {
            //             let event = {
            //                 id: (new Date()).getTime(),
            //                 title: eventEl.innerText
            //             };
            //             return event;
            //         }
            //     });
            // },
            updateEvent(arg){
                const event = arg.event
                let i = this.events.findIndex( index => index.id == event.id)
                if(i != -1){
                    this.events[i].title = event.title
                    this.events[i].start = event.start
                    this.events[i].allDay = event.allDay
                    this.events[i].end = event.end
                }
            },
            handleSelect(args){
                const event = {
                    id: (new Date()).getTime(),
                    title: 'Algo',
                    start: args.start,
                    end: args.end,
                    allDay: args.allDay,
                    color: '#0bb6ff',
                    textColor: '#fff',
                    borderColor:'#009afc',
                    description: 'Esta es la descripcion del evento'
                }
                this.events.push(event)
            },
            handleClick(arg){
                this.modalShow = true
                this.modalText = 'Texto del modal'
                this.event = arg.event
            },
            renderEvent(arg){
                // arg.el.setAttribute('v-b-popover.hover.top', 'Popover!')
                //eslint-disable-next-line no-console
                console.log(arg)
                // new Tooltip(arg.el, {
                //     title: arg.event.extendedProps.description,
                //     placement: 'top',
                //     trigger: 'hover',
                //     container: 'body'
                // });
            }
        }
    }
</script>

<style>
    .card{
        position: absolute!important;
    }
</style>