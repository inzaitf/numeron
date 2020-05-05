<template>
  <v-form>
    <v-container fluid>
      <v-row align="center" justify="center">
        <h1>{{ title }}</h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="9">
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-text-field
                v-model="input_name"
                label="Name"
                outlined
                :color="name_length >= 3 ? 'teal accent-3' : 'red lighten-4'"
                ref="input_name"
                @keypress.enter="focus_password"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-text-field
                v-model="input_password"
                label="Password"
                outlined
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show_password()"
                counter
                :color="
                  password_length >= 3 ? 'teal accent-3' : 'red lighten-4'
                "
                @keypress.enter="enter"
                ref="input_password"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "InputForm",

  props: ["title", "name", "password"],

  data: () => ({
    show: false
  }),

  mounted() {
    this.$refs.input_name.focus();
  },

  computed: {
    input_name: {
      get() {
        return this.name;
      },
      set(new_name) {
        this.$emit("update:name", new_name);
      }
    },
    input_password: {
      get() {
        return this.password;
      },
      set(new_password) {
        this.$emit("update:password", new_password);
      }
    },
    name_length: {
      get() {
        return this.input_name.length;
      }
    },
    password_length: {
      get() {
        return this.input_password.length;
      }
    }
  },

  methods: {
    show_password() {
      this.show = !this.show;
    },
    enter: function() {
      this.$emit("enter");
    },
    focus_password() {
      this.$refs.input_password.focus();
    }
  }
};
</script>
