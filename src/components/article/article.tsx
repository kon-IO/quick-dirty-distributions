import { Slot, component$ } from "@builder.io/qwik";

export default component$<{ title: string }>((props) => {
  return (
    <>
      <h1 class="mt-2 mb-3.5 text-center text-3xl">{props.title}</h1>
      <div class="flex w-full flex-col items-center">
        <div class="flex justify-center">
          <Slot name="graph" />
        </div>
        <main class="m-3 w-5/6">
          <Slot name="main" />
        </main>
      </div>
    </>
  );
});
