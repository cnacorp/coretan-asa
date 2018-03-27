<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      light
      fixed
      app
    >
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg" >
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="check_route()">
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Made with <span style="color: #e25555;">&hearts;</span> By <a href="https://cnaprojects.com" target="_blank"><strong>Magnificent Code</strong></a></span>
    </v-footer>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: false,
        clipped: true,
        fixed: false,
        items: [
          { icon: 'home', title: 'Terbaru', to: '/' },
          { icon: 'bookmark', title: 'Ditandai', to: '/asd' },
          { icon: 'bubble_chart', title: 'Penulis', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Coretan Asa'
      }
    },
    methods: {
      check_route () {
        console.log('asd')
        if (this.$route.name === 'index') {
          this.$vuetify.theme.primary = '#008aff'
          return false
        }
        return true
      }
    }
  }
</script>

