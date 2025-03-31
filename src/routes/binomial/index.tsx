import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Equation from "~/components/article/equation";
import BinomialGraph from "~/components/images/binomial-graph";

export default component$(() => {
  return (
    <>
      <h1 class="mt-2 mb-3.5 text-center text-3xl">Διωνυμική</h1>
      <div class="flex flex-col items-center">
        <div class="flex justify-center">
          <BinomialGraph large />
        </div>
        <main class="m-3 w-5/6">
          <Equation title="ΣΜΠ" class="text-2xl">
            {"$$ \\binom nk p^k q^{n - k} $$"}
          </Equation>
        </main>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Κατανομές - Διωνυμική",
  meta: [
    {
      name: "description",
      content: "Προβολή ιδιοτήτων & συναρτήσεων κοινών κατανομών",
    },
  ],
};
