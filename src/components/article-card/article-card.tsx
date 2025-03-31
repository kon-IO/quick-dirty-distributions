import { Slot, component$ } from "@builder.io/qwik";

export default component$<{
  title: string;
  href: string;
}>((props) => {
  return (
    <a href={props.href}>
      <article class="flex flex-col items-center gap-1 rounded-sm border-2 border-black p-2 transition duration-200 ease-in-out not-motion-reduce:hover:-translate-y-1 not-motion-reduce:hover:scale-110 not-motion-reduce:focus:-translate-y-1 not-motion-reduce:focus:scale-110 motion-reduce:transition-none">
        <Slot />
        <h2 class="text-2xl">{props.title}</h2>
      </article>
    </a>
  );
});
