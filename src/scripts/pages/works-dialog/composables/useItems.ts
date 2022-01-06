import { computed, onMounted, Ref, ref } from "vue";
import { FilterTypes, Item } from "../types";
import { getWorksAll } from "../api/getWorksAll";

export default function useItems(activeFilter: Ref) {
  const items = ref<Item[]>([]);

  const getWorksCards = async () => {
    const cards = await getWorksAll();
    await items.value.push(...cards);
  };

  const itemsFiltered = computed(() => {
    let filteredItems;

    if (activeFilter.value === FilterTypes.ALL) {
      filteredItems = items.value;
    } else {
      filteredItems = items.value.filter((card) => {
        const result = card.types.filter((type) => type === activeFilter.value);

        return result.length !== 0;
      });
    }

    const dateNow = Date.now();

    filteredItems = filteredItems.map((card) => ({
      ...card,
      id: card.id + dateNow,
    }));

    return filteredItems;
  });

  const total = computed(() => itemsFiltered.value.length);

  onMounted(getWorksCards);

  return {
    itemsFiltered,
    total,
  };
}
