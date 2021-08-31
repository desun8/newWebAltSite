import { ref } from "vue";
import { FilterItem, FilterTypes } from "../types";

export default function useFilters() {
  const activeFilter = ref<string>(FilterTypes.DEVELOPMENT);
  const filterItems: FilterItem[] = [
    {
      value: FilterTypes.DEVELOPMENT,
      name: FilterTypes.DEVELOPMENT,
      checked: true,
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
