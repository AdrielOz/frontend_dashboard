<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <dashboard-statistics-card></dashboard-statistics-card>
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPoll } from '@mdi/js'

// demos
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'

export default {
  components: {
    DashboardStatisticsCard,
  },
  setup() {
    const totalProfit = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'success',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }



    return {
      totalProfit,
    }
  },
}
</script>
