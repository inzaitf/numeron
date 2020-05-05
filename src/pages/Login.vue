<template>
  <v-form>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-card>
            <input-form
              title="Login"
              :name.sync="name"
              :password.sync="password"
              @enter="login"
            />
            <p v-if="api_error" style="color: red;">
              ※ユーザー名、もしくはパスワードが間違っています
            </p>

            <v-row align="center" justify="center" class="px-auto">
              <v-btn
                outlined
                @click="login"
                :disabled="name.length < 3 || password.length < 3"
                >login</v-btn
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
  name: "Login",

  components: {
    InputForm
  },

  data: () => ({
    show: false,
    name: "",
    password: "",
    api_error: false
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
    login: function() {
      this.axios
        .post("http://localhost:3000/user/login", this.user_obj)
        .then(response => {
          //トークンをローカルストレージに保存
          this.$store.state.auth.store_token = response.data.token;
          this.$store.dispatch("auth/do_save");
          //ホームページに遷移
          window.location.href = "/";
        })
        .catch(error => {
          console.log(error)
          this.api_error = true;
        });
    }
  }
};
</script>
