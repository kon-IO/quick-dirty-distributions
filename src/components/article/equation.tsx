import { Slot, component$ } from "@builder.io/qwik";

export default component$<{ title: string }>((props) => {
  return (
    <div>
      <h3 class="text-lg">{props.title}</h3>
      <Slot />
    </div>
  );
});
