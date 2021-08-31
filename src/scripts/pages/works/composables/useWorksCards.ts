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
    let filteredCards = worksCards.value.filter((card) => {
      const result = card.types.filter((type) => type === activeFilter.value);

      return result.length !== 0;
    });

    const dateNow = Date.now();
    filteredCards = filteredCards.map((card) => ({
      ...card,
      id: card.id + dateNow,
    }));

    return filteredCards;
  });

  onMounted(getWorksCards);

  return {
    worksCardsFiltered,
  };
}
