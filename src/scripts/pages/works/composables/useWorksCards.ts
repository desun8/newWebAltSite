import { log } from "@/scripts/utils/log";
import { random } from "lodash";
import { computed, onMounted, Ref, ref } from "vue";
import { getWorksMain } from "../api/getWorksMain";
import { CardResponse, FilterTypes } from "../types";

export default function useWorksCards(activeFilter: Ref) {
  // TODO: remove
  log("Start useWorksCards");

  const worksCards = ref<CardResponse[]>([]);

  const getWorksCards = async () => {
    const cards = await getWorksMain();
    // TODO: remove
    console.log(
      "🚀 ~ file: useWorksCards.ts ~ line 11 ~ getWorksCards ~ cards",
      cards
    );
    await worksCards.value.push(...cards);
  };

  const worksCardsFiltered = computed(() => {
    // TODO: remove
    console.log("computed worksCards");
    let filteredCards: CardResponse[];

    if (activeFilter.value === FilterTypes.ALL) {
      // TODO: remove
      console.log("filter === all");
      filteredCards = worksCards.value;
    } else {
      // TODO: remove
      console.log("filter !== all");
      filteredCards = worksCards.value.filter((card) => {
        const result = card.types.filter((type) => type === activeFilter.value);

        return result.length !== 0;
      });
      // TODO: remove
      console.log(
        "🚀 ~ file: useWorksCards.ts ~ line 34 ~ filteredCards=worksCards.value.filter ~ filteredCards",
        filteredCards
      );
    }

    const dateNow = Date.now();
    // TODO: remove
    console.log("set random card id");
    filteredCards = filteredCards.map((card) => ({
      ...card,
      id: (card.id + dateNow) * random(true),
    }));
    // TODO: remove
    console.log(
      "🚀 ~ file: useWorksCards.ts ~ line 50 ~ filteredCards=filteredCards.map ~ filteredCards",
      filteredCards
    );

    // TODO: remove
    log("End useWorksCards");

    return filteredCards;
  });

  onMounted(getWorksCards);

  return {
    worksCardsFiltered,
  };
}
