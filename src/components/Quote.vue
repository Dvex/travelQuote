<template>
    <div>
        <v-container fluid>
            <v-alert :value="alert" type="error">
                Porfavor, para realizar una cotización necesita ingresar todos los datos.
            </v-alert>
            <v-layout row wrap>
                <v-flex xs12 md5>
                    <v-select
                    :items="destinations"
                    v-model="destiny"
                    label="Destino"
                    prepend-icon="flight_takeoff"
                    autocomplete
                    ></v-select>
                </v-flex>
                <v-flex md2></v-flex>
                <v-flex xs12 md5>
                    <v-text-field
                    id="number_passenger"
                    name="passenger"
                    v-model="number_passenger"
                    prepend-icon="accessibility"
                    label="Numero de pasajeros"
                    ></v-text-field>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12 md5>
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
                <v-flex md2></v-flex>
                <v-flex xs12 md5>
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

        <v-container fluid v-if="result_headers.length > 0">
            <v-layout row wrap>
                <v-flex xs12>
                    <result-quote :headers="result_headers" :characteristics="result_characteristics"></result-quote>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import ResultQuote from './ResultQuote'

    export default {
        data: function() {
            return {
                alert: false,
                destiny: null,
                startDate: null,
                endDate: null,
                number_passenger: null,
                startMenu: false,
                endMenu: false,
                dateFormatted: null,
                destinations: [],
                result_headers: [],
                result_characteristics: []
            }
        },
        methods: {
            fecthDestinations:function (){
                this.$http.get('destinos').then(
                    response => {
                        return response.json()
                    },
                    error => {
                        console.log(error)
                    }
                ).then(
                    data => {
                        this.destinations = data
                    }
                )
            },
            doQuote: function() {
                if(this.destiny == null && this.startDate == null && this.endDate == null && this.number_passenger == null){
                    this.alert = true
                } else {
                    this.alert = false
                }

                if(!this.alert)
                    this.$http.post('cotizacion', {
                        destino: this.destiny,
                        fecha_partida: this.startDate,
                        fecha_retorno: this.endDate,
                        cantidad_pasajeros: this.number_passenger
                    }).then(
                        response => {
                            return response.json()
                        },
                        error => {
                            console.log(error)
                        }
                    ).then(
                        data => {
                            this.result_headers = []
                            this.result_headers.push({ text: 'Caracteristicas', align: 'left' })

                            for(let result of data){
                                
                                let plan = {
                                    text: result.tipo_plan,
                                    align: 'center',
                                    price_plan: result.precio_plan
                                }

                                this.result_headers.push(plan);

                                if(result.tipo_plan == 'Plan Standard'){
                                    this.result_characteristics = result.caracteristicas
                                } else {
                                    this.result_characteristics.forEach((item, index) => {
                                        Object.assign(item, { aplica_premiun: result.caracteristicas[index].aplica })
                                    })
                                }
                                
                            }
                        }
                    );
            }
        },
        beforeMount() {
            this.fecthDestinations();
        },
        components: {
          'result-quote': ResultQuote
        }
    }
</script>