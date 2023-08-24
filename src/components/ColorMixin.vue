<template>
  <div>
    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="increment"
      @decrement="decrement"
    />

    <!-- result box -->
    <result-box @refresh="refresh" :mixtures="mixtures" />
  </div>
</template>

<script>
import MixturesList from "./MixturesList";
import ResultBox from "./ResultBox";
import { mapGetters, mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "ColorMixin",
  computed: {
    ...mapGetters({ mixtures: "MixturesAmount" }),
  },
  methods: {
    ...mapMutations({
      incrMutation: "INCREMENT_COLOR",
      decrMutation: "DECREMENT_COLOR",
      refreshMutation: "REFRESH_MIXTURES",
    }),
    increment(index) {
      this.incrMutation(index);
    },
    decrement(index) {
      this.decrMutation(index);
    },
    refresh() {
      this.refreshMutation();
    },
  },
  components: {
    MixturesList,
    ResultBox,
  },
};
</script>
