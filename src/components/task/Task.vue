<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
        <!-- <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Projects</v-toolbar-title>
        </v-toolbar> -->

        <v-list two-line subheader>
          <v-subheader inset>Lista de proyectos activos {{id}}</v-subheader>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="alert(this.id)"
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import {db} from '../../firebase';
  export default {
     props: ['id'],
    data () {
      return {
        items: [{},{}]
      }
    },
    created() {
      this.items = [];
      
    db.collection("proyectos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.items.push({id: doc.id, icon: 'folder', iconClass: 'grey lighten-1 white--text', title: doc.data().name, subtitle: doc.data().createat })
      console.log(doc.data().name)
    });
});





    },
    methods:{
      getTasks :function(id)  {
        //this.$router.push({ path: '/task/'+id})
        //router.push({ name: 'user', params: { userId }})
      }
    }
  } 
</script>
