import { random } from "lodash-es";
import { computed, onMounted, Ref, ref } from "vue";
import { getWorksMain } from "../api/getWorksMain";
import { CardMarketingKeys, CardResponse, FilterTypes } from "../types";

export default function useWorksCards(activeFilter: Ref) {
  const worksCards = ref<CardResponse[]>([]);

  const getWorksCards = async () => {
    const cards = await getWorksMain();
    await worksCards.value.push(...cards);
  };

  // Меняем текст карточки, в зависимости от выбранного фильтра
  const changeCardText = (
    card: CardResponse,
    selectedFilter: CardMarketingKeys
  ) => {
    const newText = card.marketing?.[selectedFilter];

    if (newText) {
      return { ...card, text: newText };
    }

    return { ...card };
  };

  const worksCardsFiltered = computed(() => {
    let filteredCards: CardResponse[];

    if (activeFilter.value === FilterTypes.ALL) {
      filteredCards = worksCards.value;
    } else {
      filteredCards = worksCards.value
        .filter((card) => {
          const result = card.types.filter(
            (type) => type === activeFilter.value
          );
          return result.length !== 0;
        })
        .map((card) => changeCardText(card, activeFilter.value));
    }

    const dateNow = Date.now();
    filteredCards = filteredCards.map((card) => ({
      ...card,
      id: (card.id + dateNow) * random(true),
    }));

    return filteredCards;
  });

  onMounted(getWorksCards);

  return {
    worksCardsFiltered,
  };
}
