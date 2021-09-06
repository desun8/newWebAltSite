import { ref } from "vue";
import { FilterItem, FilterTypes } from "../types";

export default function useFilters() {
  const activeFilter = ref<string>(FilterTypes.ALL);
  const filterItems: FilterItem[] = [
    {
      value: FilterTypes.ALL,
      name: FilterTypes.ALL,
      checked: true,
    },
    {
      value: FilterTypes.DEVELOPMENT,
      name: FilterTypes.DEVELOPMENT,
      checked: false,
    },
    {
      value: FilterTypes.DESIGN,
      name: FilterTypes.DESIGN,
      checked: false,
    },
    {
      value: FilterTypes.CONTEXT,
      name: FilterTypes.CONTEXT,
      checked: false,
    },
    {
      value: FilterTypes.SMM,
      name: FilterTypes.SMM,
      checked: false,
    },
  ];

  const setActiveFilter = (value: FilterTypes) => {
    activeFilter.value = value;
  };

  return {
    activeFilter,
    setActiveFilter,
    filterItems,
  };
}
