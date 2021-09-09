import { onMounted, provide, ref } from "vue";
import A11yDialog from "a11y-dialog";
import APP from "@/scripts/app/APP";
import { disableScroll, enableScroll } from "@/scripts/helpers/scrollLock";

export default function useDialog() {
  const dialogElm = ref();
  const dialog = ref<A11yDialog>();

  provide("dialogElm", dialogElm);

  const openDialog = () => {
    dialog.value?.show();
  };
  const closeDialog = () => {
    dialog.value?.hide();
  };

  onMounted(() => {
    if (dialogElm.value) {
      dialog.value = new A11yDialog(dialogElm.value);

      dialog.value.on("show", () => {
        disableScroll(dialogElm.value, APP.scrollbar);
      });
      dialog.value.on("hide", () => {
        enableScroll(dialogElm.value, APP.scrollbar);
      });
    }
  });

  return { dialogElm, dialog, openDialog, closeDialog };
}
