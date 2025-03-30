import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Equation from "~/components/article/equation";
import BinomialGraph from "~/components/images/binomial-graph";

export default component$(() => {
  return (
    <>
      <h1 class="mt-1.5 mb-4 text-center text-3xl">Διωνυμική</h1>
      <div class="flex justify-center">
        <BinomialGraph large />
      </div>
      <main class="m-3 text-xl">
        <Equation title="ΣΜΠ">{"$$ \\binom nk p^k q^{n - k} $$"}</Equation>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Γρήγορα να τελειώνουμε - Διωνυμική",
  meta: [
    {
      name: "description",
      content: "Προβολή ιδιοτήτων & συναρτήσεων κοινών κατανομών",
    },
  ],
};
