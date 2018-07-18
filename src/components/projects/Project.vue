<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Projects</v-toolbar-title>
        </v-toolbar>

        <v-list two-line subheader>
          <v-subheader inset>Lista de proyectos activos</v-subheader>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="getTasks(item.id)"
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
const  config = {
    apiKey: "AIzaSyCi7fPMnzlf40u0lrkho0jBlZSTdwm54_E",
    authDomain: "meteorologyapp.firebaseapp.com",
    databaseURL: "https://meteorologyapp.firebaseio.com",
    projectId: "meteorologyapp",
    storageBucket: "meteorologyapp.appspot.com",
    messagingSenderId: "589485436047"
  };
  firebase.initializeApp(config);
  const db =  firebase.firestore();

  export default {
    data () {
      return {
        items: []
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
      getTasks : (id)=> {
        router.push({ path: '/task/'+id})
        //router.push({ name: 'user', params: { userId }})
      }
    }
  } 
</script>
