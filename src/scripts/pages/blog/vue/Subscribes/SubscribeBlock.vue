<template>
  <div
    ref="subscribeBlock"
    class="subscribe-block relative w-full h-full bg-sun"
  >
    <div class="grid content-center w-full h-full">
      <div
        class="grid grid-cols-5 gap-$gap pr-$right transform translate-x-$pos-x"
      >
        <form
          class="subscribe-block__form col-start-2 col-span-3 grid gap-7"
          action="/subscribe"
          novalidate
        >
          <h2 class="title-size font-semibold text-black">
            Подпишись на нашу рассылку
          </h2>
          <span class="text-size mb-6 font-light text-justify tracking-wide"
            >Мы отправим доступ к нашим секретным
            <span class="font-medium">“ЭДЮКЕЙШЕН” видео лекциям!</span></span
          >
          <div class="grid grid-cols-fillAuto gap-4 items-start pr-9">
            <div class="form-field grid gap-2">
              <label class="sr-only" for="subscribe-email-block"
                >Электронная почта</label
              >
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
                id="subscribe-email-block"
                autocomplete="email"
                placeholder="Сюда имейлик позязя"
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

        <div class="subscribe-block__icon relative row-start-2 col-start-4">
          <div class="absolute w-$width h-$height">
            <div class="subscribe-block__image"></div>
            <div class="subscribe-block__text"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        text-120
        absolute
        bottom-0
        grid
        text-true-black
        font-medium
        uppercase
        opacity-5
        select-none
      "
    >
      <span class="whitespace-nowrap">SIGN UP</span>
      <span class="whitespace-nowrap">SIGN UP</span>
      <span class="whitespace-nowrap">SIGN UP</span>
      <span class="whitespace-nowrap">SIGN UP</span>
    </div>
  </div>
</template>

<script>
import { initSubscribeBlock } from "@/scripts/components/subscribeBlock";

export default {
  name: "SubscribeBlock",
  mounted() {
    initSubscribeBlock(this.$refs.subscribeBlock);
  },
};
</script>

<style scoped lang="scss">
@use "../../../../../styles/_config/index" as *;
@use "../../../../../styles/components/subscribe-block.scss";

.subscribe-block {
  --gap: #{vw(20)};
  --right: #{vw(100)};
  --pos-x: #{vw(50)};
}

.subscribe-block * ::selection {
  background-color: var(--c-dark-grey);
}

.title-size {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    @include font-size-new(36, 42);
  }
}

.text-size {
  // noinspection CssInvalidMediaFeature
  @media (--lg) {
    @include font-size-new(20, 24);
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

.text-120 {
  @include font-size-vw(120, 80);
}

.subscribe-block__form {
  margin-bottom: vw(96);
}

.subscribe-block__icon {
  --width: #{vw(154)};
  --height: #{vw(190)};

  margin-top: vw(-40);
}

.subscribe-block__image {
  width: 100% !important;
  height: 100% !important;
}

.subscribe-block__text {
  top: auto;
  left: -15%;
  bottom: -10%;
  width: vw(130) !important;
  height: vw(144) !important;
}
</style>
