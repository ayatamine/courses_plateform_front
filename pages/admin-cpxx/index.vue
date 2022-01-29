<template>
  <div>
    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="primary fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 ">
              <h5 class="text-truncate text-uppercase primary--text">Users</h5>
              <h1 class="primary--text">{{ statistics.users }}</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="cyan fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 ">
              <h5 class="text-truncate text-uppercase cyan--text">Articles</h5>
              <h1 class="cyan--text">{{ statistics.articles }}</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>

      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="green fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 ">
              <h5 class="text-truncate text-uppercase green--text">NewsLetter List</h5>
              <h1 class="green--text">{{ statistics.newsletterlist }}</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="error fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 ">
              <h5 class="text-truncate text-uppercase error--text">Courses</h5>
              <h1 class="error--text">{{ statistics.courses }}</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="orange fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 ">
              <h5 class="text-truncate text-uppercase orange--text">Tutorials</h5>
              <h1 class="orange--text">{{ statistics.tutorials }}</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="teal fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 ">
              <h5 class="text-truncate text-uppercase teal--text">Project</h5>
              <h1 class="teal--text">{{ statistics.projects }}</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="4" cols="md" class="pb-2">
        <v-card class="dark">
          <v-card-title class="font-weight-light text-truncate cyan--text">
            Orders
          </v-card-title>
          <v-card-text>
            <v-carousel
              cycle
              height="180"
              interval="2000"
              hide-delimiter-background
              show-arrows-on-hover>
              <v-carousel-item>
                <div class="row no-gutters">
                  <div class="col">
                    <div>
                      <h2 class="cyan--text">Randy Sheets</h2>
                      <p class="mt-1">Tutankum, WI 33192</p>
                      <h3 class="mb-0">$217.00 <i class="mdi mdi-36px mdi-credit-card-outline float-right"></i></h3>
                      <p>Total items: 5</p>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
              <v-carousel-item>
                <div class="row no-gutters">
                  <div class="col">
                    <div>
                      <h2 class="cyan--text">Jose Valdex</h2>
                      <p class="mt-1">Turnup, PA 23192</p>
                      <h3 class="mb-0">$97.00 <i class="mdi mdi-36px mdi-paypal float-right"></i></h3>
                      <p>Total items: 2</p>
                    </div>
                  </div>
                </div>
              </v-carousel-item>
              </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" cols="md" class="pb-2">
        <v-card min-height="252">
          <v-card-title class="font-weight-light text-truncate primary--text">
            Goals
          </v-card-title>
          <v-card-text>
            <p class="primary--text subtitle-1">
              Results from last campaign
            </p>
            <div class="my-5">
              <v-progress-linear
                indeterminate
                height="8"
                color="primary"
              ></v-progress-linear>
              <h6>SINCE JAN 2020</h6>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined rounded color="primary">
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4" cols="md" class="pb-2">
        <v-card min-height="252">
          <v-card-title class="font-weight-light text-truncate success--text">
            On-boarding
          </v-card-title>
          <v-card-text>
                        <span class="success--text subtitle-1">
                            Judy Pincus
                        </span>
            <div class="mb-3">
              @jpincus
              <h3>Service Manager</h3>
              <span class="overline">Start date: 5/12/2020</span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined rounded color="success">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto text-center">
          <v-card-title class="primary--text">
            Sales
          </v-card-title>
          <v-sparkline
            :value="sparklineData"
            padding="18"
            label-size="4"
            color="cyan"
            :gradient="['#007bff','cyan']"
            :line-width="2"
            :stroke-linecap="'round'"
            smooth>
            <template v-slot:label="item">
              ${{ item.value }}
            </template>
          </v-sparkline>
          <v-card-actions class="py-4 justify-center">
            <v-btn color="primary" to="/reports">View Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout:'admin',
  middleware:'auth_admin',
  data(){
    return {
      sparklineData: [
        423,
        446,
        675,
        510,
        590,
        610,
        423,
      ],
      statistics:{
        users: 0,
        articles: 0,
        newsletterlist: 0,
        courses: 0,
        tutorials: 0,
        projects: 0
      },
    }
  },
  async fetch() {
    await this.$axios.$get(`/api/admin-cpx/statistics`,
      {headers:{Authorization:"Bearer "+this.$store.state['adminAuth'].token}})
      .then(res => {
        this.statistics = res;
      })
      .catch(err => alert(err) )

  },
}
</script>

<style>

</style>
