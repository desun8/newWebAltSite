import { computed, onMounted, Ref, ref } from "vue";
import { getWorksMain } from "../api/getWorksMain";
import { CardResponse } from "../types";

export default function useWorksCards(activeFilter: Ref) {
  const worksCards = ref<CardResponse[]>([]);

  const getWorksCards = async () => {
    const cards = await getWorksMain();
    await worksCards.value.push(...cards);
  };

  const worksCardsFiltered = computed(() => {
    const filteredCards = worksCards.value.filter((card) => {
      const result = card.types.filter((type) => type === activeFilter.value);

      return result.length !== 0;
    });

    return filteredCards;
  });

  onMounted(getWorksCards);

  return {
    worksCardsFiltered,
  };
}
