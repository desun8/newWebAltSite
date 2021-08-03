<template>
  <div
    class="instagram-block  hidden lg:block lg:relative lg:col-start-8 lg:col-end-13 lg:transform lg:translate-y-$pos-top">
    <div ref="subscribeBlock"
         class="absolute -top-48 -top-178px w-$width-full h-screen z-10 overflow-hidden">
      <div ref="subscribeBlockInner" class="w-full h-full">
        <SubscribeBlog/>
      </div>
    </div>

    <div ref="wrapper">
      <div ref="instagram">
        <Instagram/>
      </div>

      <div ref="subscribeBanner"
           class="instagram-block__banner  hidden opacity-0 transform -translate-y-28 lg:block">
        <SubscribeBanner :is-only-sm="false" id="instagram"/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import Instagram from "@/scripts/pages/blog/vue/Instagram/Instagram.vue";
import SubscribeBanner
  from "@/scripts/pages/blog/vue/Subscribes/SubscribeBanner.vue";
import SubscribeBlog
  from "@/scripts/pages/blog/vue/Subscribes/SubscribeBlog.vue";
import APP from "@/scripts/app/APP";

export default defineComponent({
  name: "InstagramBlock",
  components: {SubscribeBlog, SubscribeBanner, Instagram},
  mounted() {
    if (APP.scrollbar) {
      const observeFooterVisible = () => {
        const footerElm = document.querySelector(".page-footer")!;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const {isIntersecting} = entry;
              isFooterHidden = !isIntersecting;
            });
          },
          {rootMargin: "200px", threshold: [0.1, 0.5, 1]},
        );

        observer.observe(footerElm);
      };

      const wrapper = this.$refs.wrapper as HTMLElement;
      const instagram = this.$refs.instagram as HTMLElement;
      const subscribeBlock = this.$refs.subscribeBlock as HTMLElement;
      const subscribeBlockInner = this.$refs.subscribeBlockInner as HTMLElement;
      const subscribeBanner = this.$refs.subscribeBanner as HTMLElement;

      const setSubscribeBlockPos = gsap.quickSetter(subscribeBlock, "y", "px");
      const setWrapperPos = gsap.quickSetter(wrapper, "y", "px");

      let isPlay = false;
      let isShow = false;
      let isVisibleSubscribeBlock = true;
      let isFooterHidden = true;
      let prevScrollPos = 0;

      const hideSubscribeBlock = () => {
        const duration = 0.4;

        gsap.timeline({
              onStart() {
                isPlay = true;
              },
              onComplete() {
                isVisibleSubscribeBlock = false;

                setTimeout(() => {
                  isPlay = false;
                }, 1000);
              },
            },
          )
          .to(subscribeBlockInner, {x: "100%", duration})
          .from(wrapper, {alpha: 0, duration});
      };

      const moveInstagram = gsap.timeline({
          paused: true,
          onStart() {
            isPlay = true;
          },
          onReverseComplete() {
            isPlay = false;
            isShow = false;
          },
          onComplete(this) {
            isPlay = false;
            isShow = true;
          },
        })
        .to(instagram, {y: `-=300`, duration: 0.6})
        .to(subscribeBanner, {y: -250, autoAlpha: 1, duration: 0.4}, "-=0.4");

      observeFooterVisible();


      APP.scrollbar.addListener(status => {
        const currScrollPos = status.offset.y;
        const isScrollDown = currScrollPos > prevScrollPos;
        const triggerInstagramAnimation = currScrollPos > 300 && !isVisibleSubscribeBlock;

        if (isFooterHidden) {
          setWrapperPos(currScrollPos);

          if (isVisibleSubscribeBlock) {
            const shouldHideSubscribeBlock = !isPlay && currScrollPos > 50 && isScrollDown;

            setSubscribeBlockPos(currScrollPos);

            if (shouldHideSubscribeBlock) {
              hideSubscribeBlock();
            }
          }

          if (triggerInstagramAnimation) {
            if (!isPlay) {
              if (isScrollDown) {
                // show subscribe
                if (!isShow) {
                  moveInstagram.play();
                }
              } else {
                // hide subscribe
                if (isShow) moveInstagram.reverse();
              }
            }
          } else {
            if (moveInstagram.isActive) {
              moveInstagram.pause();
            }

            moveInstagram.reverse();
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
