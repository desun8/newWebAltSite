<template>
  <article
    ref="subscribeBlock"
    :class="{ 'lg:hidden mb': isOnlySm }"
    class="subscribe-block px-5 py-8 bg-sun"
  >
    <div class="grid grid-cols-subscribe grid-cols gap-7">
      <form class="grid gap-5" action="/subscribe" novalidate>
        <h2
          class="
            title-size
            pr-9
            text-lg
            font-semibold
            text-white text-justify
            uppercase
          "
        >
          Подпишитесь на рассылку
        </h2>
        <span class="text-size pr-9 text-sm text-justify tracking-wide"
          >И получите доступ к видео-лекции для владельцев бизнеса, о маркетинге
          и продвижении в сети.</span
        >
        <div class="grid grid-cols-fillAuto gap-2.5 items-start">
          <div class="form-field grid gap-2">
            <label class="sr-only" :for="inputId">Электронная почта</label>
            <input
              class="
                subscribe-block__input
                input-size
                pb-2.5
                text-md
                font-light
                tracking-wide
                bg-transparent
                border-b border-black
                rounded-none
                placeholder-black
                focus:outline-none
                transition-colors
              "
              type="email"
              name="email"
              :id="inputId"
              autocomplete="email"
              placeholder="Email"
              required
            />
            <span
              class="
                form-field__error
                msg-size
                text-white text-xs
                font-light
                tracking-wide
                js-text
              "
              data-message="спасибо за подписку!"
              >*это поле необходимо заполнить</span
            >
          </div>

          <button class="subscribe-block__submit w-min" type="submit">
            <span class="sr-only">Отправить</span>
            <svg class="w-7 h-7" width="66" height="66">
              <use xlink:href="/images/sprite.symbol.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </form>
      <div class="relative">
        <div class="absolute w-44 h-44 lg:w-20 lg:h-20">
          <div class="subscribe-block__image"></div>
          <div class="subscribe-block__text"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { initSubscribeBlock } from "@/scripts/components/subscribeBlock";

export default {
  name: "SubscribeBanner",

  props: {
    isOnlySm: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      default: "vue",
    },
  },

  computed: {
    inputId() {
      return `subscribe-email-${this.id}`;
    },
  },

  mounted() {
    initSubscribeBlock(this.$refs.subscribeBlock);
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../../styles/_config/index" as *;
@use "../../../../../styles/components/subscribe-block.scss";

.mb {
  margin: vw(45, $mobile-viewport) calc(var(--page-gap) * -1);

  // noinspection CssInvalidMediaFeature
  @media (--md) {
    margin: 0;
  }
}

.grid-cols {
  // noinspection CssInvalidMediaFeature
  @media (--md) {
    grid-template-columns: 4fr 1fr;
  }
}

.subscribe-block {
  @media (--lg) {
    padding: vw(34) vw(42);
  }
}

.subscribe-block * ::selection {
  background-color: var(--c-dark-grey);
}

.subscribe-block__text {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    width: 74px;
    height: 84px;
  }
}

.title-size {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    @include font-size-new(18, 24);
  }
}

.text-size {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    @include font-size-new(14, 18);
  }
}

.input-size {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    @include font-size-new(14, 16);
  }
}

.msg-size {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    @include font-size-new(12);
  }
}
</style>
