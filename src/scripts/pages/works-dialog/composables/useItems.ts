import { computed, onMounted, Ref, ref } from "vue";
import { FilterTypes, Item } from "../types";
import { getWorksAll } from "../api/getWorksAll";
import { log } from "@/scripts/utils/log";

export default function useItems(activeFilter: Ref) {
  // TODO: remove
  log("Start useItems works-dialog");

  const items = ref<Item[]>([]);

  const getWorksCards = async () => {
    const cards = await getWorksAll();
    // TODO: remove
    console.log(
      "🚀 ~ file: useItems.ts ~ line 14 ~ getWorksCards ~ cards",
      cards
    );
    await items.value.push(...cards);
  };

  const itemsFiltered = computed(() => {
    // TODO: remove
    console.log("computed all-works items");
    let filteredItems;

    if (activeFilter.value === FilterTypes.ALL) {
      // TODO: remove
      console.log("filter === all");
      filteredItems = items.value;
    } else {
      // TODO: remove
      console.log("filter !== all");
      filteredItems = items.value.filter((card) => {
        const result = card.types.filter((type) => type === activeFilter.value);

        return result.length !== 0;
      });

      // TODO: remove
      console.log(
        "🚀 ~ file: useItems.ts ~ line 39 ~ filteredItems=items.value.filter ~ filteredItems",
        filteredItems
      );
    }

    const dateNow = Date.now();
    // TODO: remove
    console.log("set random item id");
    filteredItems = filteredItems.map((card) => ({
      ...card,
      id: card.id + dateNow,
    }));
    console.log(
      "🚀 ~ file: useItems.ts ~ line 31 ~ filteredItems=filteredItems.map ~ filteredItems",
      filteredItems
    );

    // TODO: remove
    log("End useItems works-dialog");

    return filteredItems;
  });

  const total = computed(() => itemsFiltered.value.length);

  onMounted(getWorksCards);

  return {
    itemsFiltered,
    total,
  };
}
