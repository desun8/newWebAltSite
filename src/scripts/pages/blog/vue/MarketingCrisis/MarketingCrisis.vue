<template>
  <section
    class="
      block block--marketing-crisis
      marketing-crisis marketing-crisis--blog
    "
  >
    <div class="marketing-crisis__bg"></div>
    <div class="marketing-crisis__content">
      <div class="marketing-crisis__header">
        <h2 class="marketing-crisis__title" data-text="Маркетинг в кризис">
          <span class="relative z-1">Маркетинг</span><br />
          <span class="text-sun">в кризис</span>
        </h2>
        <p class="marketing-crisis__subtitle">
          как развивать бизнес под санкциями
        </p>
      </div>

      <div class="marketing-crisis__marquee" aria-hidden="true">
        <div class="marquee">
          <span class="marquee__item"
            >подписывайся на наши телеграм каналы</span
          >
          <span class="marquee__item"
            >подписывайся на наши телеграм каналы</span
          >
        </div>
      </div>

      <div class="marketing-crisis-dl">
        <div class="marketing-crisis-dl__item">
          <dt class="marketing-crisis-dl__title">
            <a
              href="https://t.me/svazhnina_o_vazhnom"
              class="link link--uppercase link--orange link--semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="link__text">svetlanavazhnina</span>
              <span class="link__icon">
                <svg class="link__arrow" width="12" height="12">
                  <use xlink:href="/images/sprite.symbol.svg#icon-arrow"></use>
                </svg> </span
            ></a>
          </dt>
          <dd class="marketing-crisis-dl__desc">
            Всё самое интересное про внутрянку бизнеса, лайфхаки и полезная
            информация о новых возможностях для вашего бизнеса в россии и за
            границей.
          </dd>
        </div>
        <div class="marketing-crisis-dl__item">
          <dt class="marketing-crisis-dl__title">
            <a
              href="https://t.me/web_alternative"
              class="link link--uppercase link--orange link--semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="link__text">web_alternative</span>
              <span class="link__icon">
                <svg class="link__arrow" width="12" height="12">
                  <use xlink:href="/images/sprite.symbol.svg#icon-arrow"></use>
                </svg> </span
            ></a>
          </dt>
          <dd class="marketing-crisis-dl__desc">
            Наш внутренний канал компании, где мы рассказываем про наши
            мероприятия и всё, что может понадобиться для интегрирования бизнеса
            в цифровой мир.
          </dd>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MarketingCrisis",
};
</script>

<style lang="scss" scoped>
@use "@/styles/_config/mixins/typographic" as *;
@use "@/styles/_config/mixins/grid" as *;
@use "@/styles/_config/functions/convert.scss" as *;

// @use "@/styles/components/marketing-crisis.scss";

.marketing-crisis {
  @include grid(5);

  position: relative;
}

.marketing-crisis__bg {
  position: absolute;
  top: vw(-220);
  right: vw(-100);
  width: vw(486 * 0.8);
  height: vw(664 * 0.8);
  background-repeat: no-repeat;
  background-position: vw(20) center;
  background-size: contain;

  @media (--xxl) {
    top: vw(-160);
  }

  .no-webp & {
    background-image: url("/images/components/marketing-crisis-vazhnina-lg.png");
  }

  .webp & {
    background-image: url("/images/components/marketing-crisis-vazhnina-lg.webp");
  }
}

.marketing-crisis__content {
  grid-column: 2/-1;
  transform: translateX(vw(-20));
}

.marketing-crisis__header {
  --left-gap: #{vw(20)};

  position: relative;
  margin-bottom: min(#{vh(25)}, 25px);
  margin-left: var(--left-gap);
}

.marketing-crisis__header::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: calc(var(--left-gap) * -1);
  width: vw(358);
  height: vw(65);
  background: url("/images/components/marketing-crisis-wave-blog.svg") no-repeat
    right center/contain;
}

.marketing-crisis__title {
  @include font-size-new(48, 36);

  position: relative;
  display: inline;
  color: #fff;
  margin-bottom: em(20, 96);
  font-weight: 700;
  text-transform: uppercase;
  background-color: var(--c-black);

  @media (--xxxl) {
    @include font-size-new(64, 52);
  }
}

.marketing-crisis__title > span {
  padding-right: 10px;
}

.marketing-crisis__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(var(--left-gap) * -1);
  display: block;
  width: var(--page-gap);
  height: 100%;
  background-color: var(--c-black);
  z-index: -1;
}

.marketing-crisis__subtitle {
  @include font-size-new(20, 18);

  max-width: vw(336);
  margin-top: 25px;
  margin-left: calc(var(--left-gap) * -1);
  font-weight: 700;
  text-transform: uppercase;

  @media (--xxxl) {
    @include font-size-new(24, 22);
  }
}

$width: 320px;
$duration: 4s;

@keyframes marquee-scroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-$width, 0);
  }
}

.marketing-crisis__marquee {
  max-width: 320px;
  margin-bottom: min(#{vh(10)}, 10px);
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  overflow: hidden;
}

.marquee {
  position: relative;
  width: 100%;
  min-width: $width;
  min-height: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;

  @media (--lg) {
    $width: 320px;
    min-width: $width;
  }
}

.marquee__item {
  position: absolute;
  animation: marquee-scroll $duration linear 0s infinite;
}

.marquee__item:nth-child(2) {
  left: $width;
}

.marketing-crisis-dl {
  max-width: 457px;
}

.marketing-crisis-dl__item {
  padding: min(#{vh(26)}, 26px) vw(20);
  border: 1px solid #dfdddf;
}

.marketing-crisis-dl__item:not(:last-child) {
  margin-bottom: 12px;
}

.marketing-crisis-dl__title {
  @include font-size-new(20);

  position: relative;
  margin-bottom: min(#{vh(28)}, 28px);
  padding-bottom: min(#{vh(28)}, 28px);

  @media (--xxxl) {
    @include font-size-new(24);
  }
}

.marketing-crisis-dl__title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 1px;
  background-color: #dfdddf;
}

.marketing-crisis-dl__desc {
  @include font-size-new(14, 24);
  text-align: justify;
  text-transform: uppercase;

  @media (--xxxl) {
    @include font-size-new(16, 26);
  }
}
</style>
