import { computed, onMounted, ref } from "vue";
import { getWorksMain } from "../api/getWorksMain";
import { CardResponse } from "../types";

export default function useWorksCards(activeFilter: string) {
  const worksCards = ref<CardResponse[]>([]);

  const getWorksCards = async () => {
    const cards = await getWorksMain();
    await worksCards.value.push(...cards);
  };

  const worksCardsFiltered = computed(() =>
    worksCards.value.filter((card) =>
      card.types.filter((type) => type === activeFilter)
    )
  );

  onMounted(getWorksCards);

  return {
    worksCardsFiltered,
  };
}
