<template>
  <div>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg>
        <v-layout row wrap style="margin: -35px">
          <v-flex xs12 lg6 v-for="(album, index) in items">
            <card 
              :title="album.id"
              :image="album.gambar"
              :artistName="album.posisi"
              :url="album.tipe"
              :color="picker(index)"
              :color1="picker1(index)"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
  import Card from '~/components/Card.vue'

  export default {
    data () {
      return {
        items: [
          { id: 'home', gambar: 'https://randomuser.me/api/portraits/men/85.jpg', posisi: '/', tipe: 'tipe' },
          { id: 'bookmark', gambar: 'https://randomuser.me/api/portraits/men/85.jpg', posisi: '/asd', tipe: 'tipe' },
          { id: 'bubble_chart', gambar: 'https://randomuser.me/api/portraits/men/85.jpg', posisi: '/inspire', tipe: 'tipe' },
          { id: 'bubble_chart', gambar: 'https://randomuser.me/api/portraits/men/85.jpg', posisi: '/inspire', tipe: 'tipe' }
        ]
      }
    },
    components: {
      Card
    },
    methods: {
      picker (index) {
        return index % 4 === 0 ? 'red' : (index % 4 === 1 ? 'blue' : (index % 4 === 2 ? 'purple' : 'green'))
      },
      picker1 (index) {
        return index % 4 === 0 ? '#ff0000' : (index % 4 === 1 ? '#008aff' : (index % 4 === 2 ? '#9128c3' : '#32CD32'))
      }
    },
    computed: {
      albumExists () {
        return this.$store.state.albums.length > 0
      },
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    }
  }
</script>