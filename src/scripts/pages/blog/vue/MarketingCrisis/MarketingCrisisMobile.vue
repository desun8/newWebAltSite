<template>
  <section class="block block--marketing-crisis marketing-crisis">
    <div class="marketing-crisis__content">
      <div class="marketing-crisis__header">
        <h2 class="marketing-crisis__title" data-text="Маркетинг в кризис">
          <span class="relative z-1">Маркетинг</span>
          <span class="<lg:text-sun">в кризис</span>
        </h2>
        <p class="marketing-crisis__subtitle">
          <span class="relative z-1">как развивать бизнес</span>
          <span class="relative">под санкциями</span>
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
  name: "MarketingCrisisMobile",
};
</script>

<style lang="scss" scoped>
@use "@/styles/components/marketing-crisis.scss";
</style>
