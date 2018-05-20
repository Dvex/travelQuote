<template>
    <div>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs6>
                    <v-select
                    :items="items"
                    v-model="destiny"
                    :error-messages="['Porfavor seleccione una opción']"
                    label="Destino"
                    item-value="text"
                    ></v-select>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                    id="number_passenger"
                    name="passenger"
                    v-model="number_passenger"
                    label="Numero de pasajeros"
                    ></v-text-field>
                </v-flex>
                <v-flex xs6>
                    <v-menu
                        ref="startMenu"
                        :close-on-content-click="false"
                        v-model="startMenu"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="startDate"
                        label="Fecha partida"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker v-model="startDate" no-title @input="startMenu = false"></v-date-picker>
                    </v-menu>
                </v-flex>
                <v-flex xs6>
                    <v-menu
                        ref="endMenu"
                        :close-on-content-click="false"
                        v-model="endMenu"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="endDate"
                        label="Fecha retorno"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker v-model="endDate" no-title @input="endMenu = false"></v-date-picker>
                    </v-menu>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md4></v-flex>
                <v-flex xs12 md4 style="text-align:center">
                    <v-btn @click.native="doQuote" color="info">Cotizar</v-btn>
                </v-flex>
                <v-flex xs12 md4></v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                destiny: null,
                startDate: null,
                endDate: null,
                startMenu: false,
                endMenu: false,
                dateFormatted: null,
                number_passenger: null,
                items: [
                    { text: 'State 1' },
                    { text: 'State 2' },
                    { text: 'State 3' },
                    { text: 'State 4' },
                    { text: 'State 5' },
                    { text: 'State 6' },
                    { text: 'State 7' }
                ],
            }
        },
        methods: {
            doQuote: function(){
                console.log('Cotizar')
            }
        }
    }
</script>