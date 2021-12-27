<template>
  <div class="container p-4 text-center people">
    <h1 class="people__title">Popular People</h1>
    <div class="row g-4" v-if="peopleData">
      <div class="col-lg-3 people__items" v-for="people in peopleData" :key="people['id']">
        <img :src="people['picture']" :alt="people['title']" :title="people['name']" class="people__images" />
        <h3 class="people__name">{{ people["name"] }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();

    const peopleData = ref(null);
    const peopleInput = ref("");
    const input = ref("");

    store.dispatch("searchPeople").then(() => {
      peopleData.value = store.state.peopleData;
    });

    return {
      peopleData,
      peopleInput,
      input
    };
  }
};
</script>

<style lang="scss" scoped>
.people {
  &__title {
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
    margin: 4rem 0;
  }

  &__name {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    margin: 1rem 0;
  }

  &__images {
    width: 90%;
    height: 330px;
    border-radius: 6px;
  }
}
</style>
