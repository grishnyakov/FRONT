
<template>
  <div>
    <D_BIND_DEVICES> </D_BIND_DEVICES>

    <v-data-table
      :headers="headers"
      :items="devices"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.id_type }}</td>
        <td class="text-xs-right">{{ props.item.info }}</td>
      </template>
    </v-data-table>
  </div>


</template>


<script>
  import axios from 'axios'
  import D_BIND_DEVICES from "./D_BIND_DEVICES";
  export default {
    components: {D_BIND_DEVICES},
    data () {
      return {
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Type', value: 'id_type' },
          { text: 'info', value: 'info' }
        ],
        devices: []
      }
    },
    created(){
        console.log("i try get devices");
        // Send a POST request
        let uri = 'http://localhost:7877/data/devices';

        axios.post(uri,{
          username:  this.$session.get('username')
        })
          .then(response => {
            console.log(response);
            if (response.data.success) {
              this.devices = response.data.devices;
            }
          })
          .catch(function (error) {
            console.error(error);

          });

      }
  }
</script>

