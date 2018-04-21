<template>
  <v-data-table
    :headers="headers"
    :items="messages"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.id_group }}</td>
      <td class="text-xs-right">{{ props.item.type_parametr }}</td>
      <td class="text-xs-right">{{ props.item.value }}</td>
    </template>
  </v-data-table>
</template>


<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Time', value: 'id_group' },
          { text: 'Type', value: 'type_parametr' },
          { text: 'Value', value: 'value' }
        ],
        messages: []
      }
    },
    created(){
          console.log("i try get messages");
          // Send a POST request
          let uri = 'http://localhost:7877/data/messages';
          axios.post(uri,{
            devices: [1234567890,1000000002]
          })
            .then(response => {
              console.log(response);
              if(response.data.success)
              {
                this.messages = response.data.messages;
              }
            })
            .catch(function (error) {
              console.error(error);

            });

        }
  }
</script>

