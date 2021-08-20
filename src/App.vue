<template>
  <div id="app">
    <wrapper
      :clickHandler="(e) => console.log('Clickme was clicked')"
      :trackingFunction="trackingFunction"
      event="click"
      :features="{ stage: 'action', action: 'click' }"
    >
      <template v-slot:default="{ onClick }">
        <button @click="onClick">Cickme</button>
      </template>
    </wrapper>
    <wrapper2
      :trackingFunction="trackingFunction"
      event="click"
      :features="{ stage: 'action', action: 'click' }"
    >
      <GxButton @click="(e) => console.log('Clickme2 was clicked')">
        Cickme2
      </GxButton>
    </wrapper2>
  </div>
</template>

<script>
import Wrapper from "./components/Wrapper.vue";
import Wrapper2 from "./components/Wrapper2.vue";
import GxButton from "./components/GxButton.vue";
import { pushMixpanelEvents, setDataLayer } from "./gtm/index";

export default {
  name: "App",
  components: {
    Wrapper,
    Wrapper2,
    GxButton,
  },
  data() {
    return {
      console: { log: console.log },
      trackingFunction: pushMixpanelEvents,
    };
  },
  created() {
    setDataLayer({ userId: "123", domain: "test-gestionix", pageView: "2" });
    document.addEventListener("click", (e) => {
      console.log(e.target);
    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
