import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Article from "~/components/article/article";
import Equation from "~/components/article/equation";
import BinomialGraph from "~/components/images/binomial-graph";

export default component$(() => {
  return (
    <Article title="Διωνυμική">
      <div q:slot="graph">
        <BinomialGraph large />
      </div>
      <div q:slot="main">
        <Equation title="ΣΜΠ" class="text-2xl">
          {"$$ \\binom nk p^k q^{n - k} $$"}
        </Equation>
      </div>
    </Article>
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
