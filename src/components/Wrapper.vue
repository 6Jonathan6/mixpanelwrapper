
<script>
export default {
  name: "Wrapper",
  props: {
    clickHandler: {
      type: Function,
      default: () => null,
    },
    trackingFunction: {
      type: Function,
      default: () => null,
    },
    event: {
      type: String, //Agregar validador para  'click' | 'show' | 'submit' | 'interact'
      default: null,
    },
    features: {
      type: Object,
      default: null,
    },
    // export type Features = {
    //   stage: string;
    //   action: string;
    // } & Record<string, string>;
  },
  computed: {
    isShowEvent() {
      return this.event === "show";
    },
    eventParam() {
      return [{ event: this.event, features: this.features }];
    },
  },
  methods: {
    onClick(e) {
      if (this.trackingFunction) {
        this.trackingFunction(this.eventParam);
      }
      this.clickHandler(e);
    },
  },
  mounted() {
    if (this.isShowEvent) {
      this.trackingFunction(this.eventParam);
    }
  },
  render() {
    return this.$scopedSlots.default({
      onClick: this.onClick,
    });
  },
};
</script>
