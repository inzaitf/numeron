<template>
  <v-form>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-card>
            <input-form
              title="Signup"
              :name.sync="name"
              :password.sync="password"
              @enter="signup"
            />
            <v-row align="center" justify="center" class="px-auto">
              <v-btn
                outlined
                @click="signup"
                :disabled="name.length < 3 || password.length < 3"
                >Signup</v-btn
              >
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import InputForm from "@/components/InputForm.vue";

export default {
  name: "Signup",

  components: {
    InputForm
  },

  data: () => ({
    show: false,
    name: "",
    password: ""
  }),
  computed: {
    user_obj: function() {
      return {
        name: this.name,
        password: this.password
      };
    }
  },
  methods: {
    show_password: function() {
      this.show = !this.show;
    },
    signup: function() {
      this.user_obj;
      this.axios
        .post("http://localhost:3000/user/create", this.user_obj)
        .then(response => {
          //トークンをローカルストレージに保存
          this.$store.state.auth.store_token = response.data.token;
          this.$store.dispatch("auth/do_save");
          //ホームページに遷移
          window.location.href = "/";
        })
        .catch(error => {
          error;
          
        });
    }
  }
};
</script>
