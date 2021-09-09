<template>
  <div ref="rootElm" class="footer-redirect !py-24 lg:hidden">
    <a
      href="#"
      class="footer-redirect__link"
      aria-label="Вернуться в начало страницы."
      @click.prevent="goToTop"
    ></a>
    <div class="footer-redirect__wrap" aria-hidden="true">
      <div class="footer-redirect__title">
        <svg
          class="footer-redirect__name-svg"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="1.414"
          clip-rule="evenodd"
          version="1.1"
          viewBox="0 0 258 39"
          xml:space="preserve"
        >
          <defs>
            <linearGradient id="vue-a">
              <stop
                id="anim-grad-color-active-top"
                offset="0%"
                stop-color="#ff5000"
              />
              <stop offset="0%" stop-color="#c4c4c4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#vue-a)"
            fill-rule="nonzero"
            d="M251.31 38.5h-2.323V9.315h-5.809L250.148 0l6.97 9.315h-5.808V38.5zm-17.535 0h-2.434V9.315h-6.085L232.558 0l7.301 9.315h-6.084V38.5zm-88.625 0h-28.912V.8h28.912v7.8h-20.02v6.604h18.928v7.852H125.13v7.592h20.02V38.5zm14.765 0h-8.892V.8h14.508c2.427 0 4.68.173 6.76.52 2.115.347 3.935.988 5.46 1.924 1.526.901 2.722 2.149 3.588 3.744.867 1.595 1.3 3.623 1.3 6.084 0 2.496-.433 4.541-1.3 6.136a9.93 9.93 0 01-3.588 3.796c-1.525.901-3.345 1.543-5.46 1.924-2.08.347-4.333.52-6.76.52h-5.616V38.5zm-64.35 0H78.457V.8h16.432c2.08 0 3.987.139 5.72.416 1.768.277 3.293.78 4.576 1.508a7.873 7.873 0 013.016 3.016c.728 1.248 1.092 2.86 1.092 4.836 0 1.733-.381 3.259-1.144 4.576-.763 1.283-1.872 2.375-3.328 3.276 1.768.624 3.207 1.629 4.316 3.016 1.109 1.352 1.664 3.172 1.664 5.46 0 2.115-.364 3.917-1.092 5.408a9.432 9.432 0 01-3.12 3.588c-1.317.901-2.912 1.56-4.784 1.976-1.872.416-3.952.624-6.24.624zm-86.673 0H0V.8h8.892v14.404h15.496V.8h8.892v37.7h-8.892V23.056H8.892V38.5zm66.101 0h-9.672l-2.288-6.708h-14.56L46.237 38.5h-9.464L50.969.8h9.776l14.248 37.7zm116.439 0h-10.244l14.144-19.188L181.812.8h10.452l8.32 11.388L208.956.8h10.296L205.68 19.156 219.876 38.5h-10.452l-8.996-12.22-8.996 12.22zM87.349 31.012h8.32c1.907 0 3.328-.381 4.264-1.144.971-.763 1.456-1.803 1.456-3.12 0-1.317-.485-2.357-1.456-3.12-.936-.763-2.357-1.144-4.264-1.144h-8.32v8.528zm-36.432-6.448h9.724l-4.836-14.352-4.888 14.352zM159.915 8.288v9.672h5.876c1.04 0 2.011-.069 2.912-.208.902-.139 1.682-.381 2.34-.728.694-.381 1.231-.884 1.612-1.508.382-.624.572-1.439.572-2.444 0-.971-.19-1.768-.572-2.392a3.864 3.864 0 00-1.612-1.456c-.658-.381-1.438-.624-2.34-.728a19.132 19.132 0 00-2.912-.208h-5.876zM87.349 15.88h7.852c1.56 0 2.756-.347 3.588-1.04.832-.693 1.248-1.629 1.248-2.808 0-1.179-.416-2.097-1.248-2.756-.832-.659-2.028-.988-3.588-.988h-7.852v7.592z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, Ref, ref } from "vue";
import "@/styles/page-home/footer-redirect.scss";
import APP from "@/scripts/app/APP";
import { mediaQueryEvent } from "@/scripts/utils/mediaQueryEvent";

export default defineComponent({
  setup() {
    const rootElm = ref<HTMLElement>();
    const dialogElm = inject<Ref<HTMLElement>>("dialogElm");

    const goToTop = () => {
      dialogElm?.value.scrollTo(0, 0);
    };

    onMounted(() => {
      if (!APP.isDesktop && rootElm.value) {
        import("../../home/redirectFooter.js").then(
          ({ default: RedirectFooter }) => {
            const redirectFooter = new RedirectFooter(rootElm.value);

            mediaQueryEvent(
              () => redirectFooter.initMobile(),
              () => {}
            );
          }
        );
      }
    });

    return {
      rootElm,
      goToTop,
    };
  },
});
</script>
