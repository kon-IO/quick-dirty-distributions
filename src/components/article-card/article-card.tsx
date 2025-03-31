import { Slot, component$ } from "@builder.io/qwik";

export default component$<{
  title: string;
  href: string;
}>((props) => {
  return (
    <a href={props.href}>
      <article class="flex flex-col items-center gap-1 border-2 border-black rounded-sm p-2">
        <Slot />
        <h2 class="text-2xl">{props.title}</h2>
      </article>
    </a>
  );
});
