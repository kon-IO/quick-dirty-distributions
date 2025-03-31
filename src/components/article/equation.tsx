import { QwikAttributes, Slot, component$ } from "@builder.io/qwik";

export default component$<{
  title: string;
  class: QwikAttributes<HTMLDivElement>["class"];
}>((props) => {
  return (
    <div class="mx-2 mt-3 mb-3.5">
      <h3 class="text-lg">{props.title}</h3>
      <div class={props.class}>
        <Slot />
      </div>
    </div>
  );
});
