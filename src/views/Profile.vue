<template>
  <div class="container py-4">
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <div class="card mx-auto">
          <div class="card-header text-white bg-dark">
            <h4>Profile</h4>
          </div>
          <div class="card-body" v-if="user">
            <ul class="list-group">
              <li class="list-group-item"><b>Email</b>: {{ user.email }}</li>
              <li class="list-group-item">
                <b>Username</b>: {{ user.username }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getProfile"]),
  },
  created() {
    this.getProfile();
  },
};
</script>
