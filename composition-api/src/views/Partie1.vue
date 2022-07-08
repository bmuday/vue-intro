<template>
  <div class="partie1">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name" />
    <br />
    <button @click="age++">Increment age</button>
    <hr />
    <h2>Refs</h2>
    <p>{{ dev1.pseudo }} - {{ dev1.city }}</p>
    <button @click="updateDev1">Update developer</button>
    <hr />
    <h2>Reactive</h2>
    <p>{{ dev2.pseudo }} - {{ dev2.city }}</p>
    <button @click="updateDev2">Update developer</button>
    <hr />
    <h2>Reactive</h2>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="character in matching" :key="character">{{ character }}</div>
    <h2>Watch</h2>
    <button @click="handleWatch">Stop Watching</button>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";

export default {
  name: "Partie1View",
  setup() {
    console.log("setup");

    let name = ref("Mario");
    let age = ref(30);

    const p = ref(null);
    // console.log(p, p.value);

    const handleClick = () => {
      // console.log(p, p.value);

      name.value = "Luigi";
      age.value = "35";
    };

    const dev1 = ref({ pseudo: "babou", city: "Paris" });
    const dev2 = reactive({ pseudo: "nato", city: "Lyon" });

    const updateDev1 = () => {
      // console.log(dev1);
      dev1.value.pseudo = "nato";
      dev1.value.city = "Lyon";
    };

    const updateDev2 = () => {
      // console.log(dev2);
      dev2.pseudo = "babou";
      dev2.city = "Paris";
    };

    const search = ref("");
    const characters = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const matching = computed(() => {
      return characters.value.filter((character) =>
        character.includes(search.value)
      );
    });

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const handleWatch = () => {
      stopWatch();
      stopEffect();
    };

    return {
      name,
      age,
      handleClick,
      p,
      dev1,
      dev2,
      updateDev1,
      updateDev2,
      search,
      characters,
      matching,
      handleWatch,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
