<template>
    <div>
        <v-container fluid>
            <v-layout row wrap> 
                <v-flex md6></v-flex>
                <v-flex xs6 md3>
                    <h3>Plan Estándar</h3>
                    <p>$ 54.2</p>
                </v-flex>
                <v-flex xs6 md3>
                    <h3>Plan Premiun</h3>
                    <p>$ 74.2</p>
                </v-flex>
            </v-layout>
        </v-container>

        <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        class="elevation-1"
        >
            <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                headers: [
            {
                text: 'Cobertura',
                align: 'left',
                value: 'coverage'
            },
            { 
                text: 'Calories',
                align: 'left',
                sortable: false, 
                value: 'calories'
            },
            { 
                text: 'Fat (g)',
                align: 'left', 
                sortable: false,
                value: 'fat' 
            }
            ],
            desserts: [
            {
                value: false,
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0
            },
            {
                value: false,
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0
            },
            {
                value: false,
                name: 'Eclair',
                calories: 262,
                fat: 16.0
            },
            {
                value: false,
                name: 'Cupcake',
                calories: 305,
                fat: 3.7
            },
            {
                value: false,
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0
            },
            {
                value: false,
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0
            },
            {
                value: false,
                name: 'Lollipop',
                calories: 392,
                fat: 0.2
            },
            {
                value: false,
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2
            },
            {
                value: false,
                name: 'Donut',
                calories: 452,
                fat: 25.0
            },
            {
                value: false,
                name: 'KitKat',
                calories: 518,
                fat: 26.0
            }
            ]
            }
        },
        methods: {

        }
    }
</script>