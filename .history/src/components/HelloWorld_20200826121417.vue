<template>
  <div class="hello">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-container fluid>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>

      <b-container fluid>
        <div>
          <ul class="list-unstyled">
            <b-media tag="li" style="width:20%">
              <template v-slot:aside>
                <b-img v-bind="mainProps" rounded alt="placeholder"></b-img>
                <div class="nav-card">
                  百度一下
                 <div class="nav-card-text">
                  百度一下,你就知道
                </div>
                <div class="nav-card-btn">
                 打开
               </div>
                </div>
               
              </template>
            </b-media>

            <b-media tag="li" class="my-4">
              <template v-slot:aside>
                <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
              </template>

              <h5 class="mt-0 mb-1">List-based media object</h5>
              <p class="mb-0">Cras sit</p>
            </b-media>

            <b-media tag="li">
              <template v-slot:aside>
                <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
              </template>

              <h5 class="mt-0 mb-1">List-based media object</h5>
              <p class="mb-0">Cras sit</p>
            </b-media>
          </ul>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1"
      }
    };
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav-card{position:relative;width:100%;margin-left: 8px;}
.nav-card-text{
  font-size:12px;bottom:0px;position:absolute;
}
.nav-card-btn{
  font-size:12px;right: 0px;:0px;position:absolute;
}
</style>
