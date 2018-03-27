<template>
  <v-card>
    <v-card-media src="https://marketplace.canva.com/MACF5OFkrMY/2/0/thumbnail_large/canva-monochrome-thriller-wattpad-cover-MACF5OFkrMY.jpg" height="200px">
    </v-card-media>
    <v-card-title primary-title style="margin-top: -30px">
      <v-flex>
        <v-divider></v-divider>
        <v-btn @click="card_click()" :color="color" flat nuxt to="/tulisan/1"><h3>Kangaroo Valley Safari</h3></v-btn>

        <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>

      </v-flex>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
      <v-avatar
        size="48px"
        slot="activator">
        <img
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          alt="">
      </v-avatar>
      <div>
        <p style="font-size: 12px; opacity: 0.9; margin-bottom: -2px">Anonymous</p>
        <p style="font-size: 12px; opacity: 0.7; margin-bottom: -4px">1 January 2018 | 12 pembaca</p>
      </div>
      
      <v-spacer></v-spacer>
      <v-icon>bookmark</v-icon>
      <v-icon>share</v-icon>
    </v-card-actions>
  </v-card>

</template>

<script>
  export default {
    props: ['title', 'image', 'artistName', 'url', 'color', 'color1'],
    computed: {
    },
    methods: {
      card_click () {
        this.$vuetify.theme.primary = this.$props.color1
        this.$store.state.color_primary = this.$props.color
      }
    }
  }
</script>
