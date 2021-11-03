<template>
  <li class="insta-list__item">
    <a :href="href" target="_blank" rel="noopener noreferrer"
      >посмотреть пост</a
    >
    <video v-if="isVideo" :src="`${src}#t=0.01`"></video>
    <img v-else :src="src" :alt="describe" />
  </li>
</template>

<script>
import APP from "@/scripts/app/APP";

export default {
  name: "ListItem",

  props: {
    src: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
  },

  computed: {
    isVideo() {
      return this.type.toLowerCase() === "video";
    },

    isDesktop() {
      return APP.isDesktop;
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../../../../../../styles/_config/index" as *;

.insta-list__item {
  --size: #{vw(160)};
  --pos-y: 0;
  --bdrs: 10px;

  position: relative;
  width: var(--size);
  height: var(--size);

  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateY(var(--pos-y));
  transition: border-color var(--trans-dur-fast) ease-in;

  //noinspection CssInvalidMediaFeature
  @media screen and (--tablet-sm) {
    --size: #{vw(160, $mobile-viewport)};
  }

  &:nth-child(3n-1) {
    --pos-y: #{vw(30)};

    //noinspection CssInvalidMediaFeature
    @media screen and (--tablet-sm) {
      --pos-y: 0;
    }
  }

  &:nth-child(3n) {
    --pos-y: #{vw(60)};

    //noinspection CssInvalidMediaFeature
    @media screen and (--tablet-sm) {
      --pos-y: 0;
    }
  }

  &:nth-child(1) {
    border-top-left-radius: var(--bdrs);
  }

  &:nth-child(3) {
    border-top-right-radius: var(--bdrs);

    //noinspection CssInvalidMediaFeature
    @media screen and (--tablet-sm) {
      border-top-right-radius: 0;
    }
  }

  &:nth-child(7) {
    border-bottom-left-radius: var(--bdrs);

    //noinspection CssInvalidMediaFeature
    @media screen and (--tablet-sm) {
      border-bottom-left-radius: 0;
    }
  }

  &:nth-child(9) {
    border-bottom-right-radius: var(--bdrs);

    //noinspection CssInvalidMediaFeature
    @media screen and (--tablet-sm) {
      border-bottom-right-radius: 0;
    }
  }

  //noinspection CssInvalidMediaFeature
  @media screen and (--tablet-sm) {
    &:nth-last-child(1),
    &:nth-last-child(2),
    &:nth-last-child(3) {
      display: none;
    }

    &:nth-child(2n) {
      --pos-y: 30px;
    }

    &:nth-child(2) {
      border-top-right-radius: var(--bdrs);
    }

    &:nth-child(5) {
      border-bottom-left-radius: var(--bdrs);
    }

    &:nth-child(6) {
      border-bottom-right-radius: var(--bdrs);
    }
  }
}

.insta-list__item:hover {
  border-color: rgba(#f50000, 0.5);
}

.insta-list__item img,
.insta-list__item video {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.insta-list__item a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  z-index: 1;
}
</style>
