<template>
  <div
    class="
      instagram-block
      lg:block
      lg:relative
      lg:col-start-8
      lg:col-end-13
      lg:transform
      lg:translate-y-$pos-top
    "
  >
    <div
      ref="subscribeBlock"
      class="
        <lg:hidden
        absolute
        -top-48 -top-178px
        w-$width-full
        h-101vh
        z-10
        overflow-hidden
      "
    >
      <div ref="subscribeBlockInner" class="w-full h-full">
        <SubscribeBlock />
      </div>
    </div>

    <div ref="wrapper" class="<lg:hidden">
      <MarketingCrisis />
    </div>

    <div class="lg:hidden">
      <MarketingCrisisMobile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import SubscribeBlock from "@/scripts/pages/blog/vue/Subscribes/SubscribeBlock.vue";
import APP from "@/scripts/app/APP";
import MarketingCrisis from "./MarketingCrisis.vue";
import MarketingCrisisMobile from "./MarketingCrisisMobile.vue";

export default defineComponent({
  name: "MarketingBlock",
  components: {
    SubscribeBlock,
    MarketingCrisis,
    MarketingCrisisMobile,
  },
  mounted() {
    if (APP.scrollbar) {
      const footerElm = document.querySelector(".page-footer")!;

      const observeFooterVisible = () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const { intersectionRatio } = entry;
              isFooterHidden = !intersectionRatio;
            });
          },
          {
            rootMargin: "200px",
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
          }
        );

        observer.observe(footerElm);
      };

      const wrapper = this.$refs.wrapper as HTMLElement;
      const subscribeBlock = this.$refs.subscribeBlock as HTMLElement;
      const subscribeBlockInner = this.$refs.subscribeBlockInner as HTMLElement;

      const setSubscribeBlockPos = gsap.quickSetter(subscribeBlock, "y", "px");
      const setWrapperPos = gsap.quickSetter(wrapper, "y", "px");

      let isPlay = false;
      let isVisibleSubscribeBlock = true;
      let isFooterHidden = true;
      let prevScrollPos = 0;

      const hideSubscribeBlock = () => {
        const duration = 0.4;

        gsap.to(subscribeBlockInner, {
          x: "100%",
          duration,
          onStart() {
            isPlay = true;
          },
          onComplete() {
            isVisibleSubscribeBlock = false;
            gsap.set(subscribeBlock, { display: "none" });

            setTimeout(() => {
              isPlay = false;
            }, 1000);
          },
        });
      };

      observeFooterVisible();

      APP.scrollbar.addListener((status) => {
        const currScrollPos = status.offset.y;
        const isScrollDown = currScrollPos > prevScrollPos;

        if (isFooterHidden) {
          setWrapperPos(currScrollPos);

          if (isVisibleSubscribeBlock) {
            const shouldHideSubscribeBlock =
              !isPlay && currScrollPos > 50 && isScrollDown;

            setSubscribeBlockPos(currScrollPos);

            if (shouldHideSubscribeBlock) {
              hideSubscribeBlock();
            }
          }
        }

        prevScrollPos = currScrollPos;
      });
    }
  },
});
</script>

<style lang="scss">
@use "../../../../../styles/_config/index" as *;

$top-gap: vw(-145);
$top: 90px;
$top-pos: calc(#{$top} + #{$top-gap} * -1);

.instagram-block {
  --pos-top: #{$top-gap};
  --right: #{vw(-100)};
  --width-full: calc(100% + #{vw(100)});
}

.instagram-block__banner {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    margin-bottom: 10vh;
    padding: 0 vw(100);
  }
}
</style>
