<template>
    <div>
        <v-container fluid>
            <v-data-table
            :headers="headers"
            :items="characteristics"
            :loading="true"
            hide-actions
            class="elevation-1"
            >
                <v-progress-linear slot="progress" color="blue"></v-progress-linear>
                <template slot="headers" slot-scope="props">
                    <tr>
                        <th 
                            v-for="header in props.headers"
                            :key="header.text"
                        >
                            <span>{{ header.text }}</span>
                            <br>
                            <span v-if="header.price_plan">$ {{ header.price_plan }}</span>
                        </th>
                    </tr>
                </template>

                <template slot="items" slot-scope="props">
                    <td width="60%">{{ props.item.caracteristica }}</td>
                    <td width="20%" style="text-align:center !important" class="text-xs-right">
                        <v-icon medium color="green darken-2" v-if="props.item.aplica">check</v-icon>
                        <v-icon medium color="red darken-2" v-if="!props.item.aplica">close</v-icon>
                    </td>
                    <td  width="20%" style="text-align:center !important" class="text-xs-right">
                        <v-icon medium color="green darken-2" v-if="props.item.aplica_premiun">check</v-icon>
                        <v-icon medium color="red darken-2" v-if="!props.item.aplica_premiun">close</v-icon>
                    </td>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {

            }
        },
        props: ['headers', 'characteristics'],
        methods: {}
    }
</script>