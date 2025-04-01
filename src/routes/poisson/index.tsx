import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Article from "~/components/article/article";
import Equation from "~/components/article/equation";
import PoissonGraph from "~/components/images/poisson-graph";

export default component$(() => {
  return (
    <Article title="Poisson">
      <div q:slot="graph">
        <PoissonGraph large />
      </div>
      <div q:slot="main">
        <Equation title="Ιδιότητες" class="text-lg">
          <div class="mt-3 flex flex-col items-center gap-2">
            {"\\(E(X) = V(X) = \\lambda\\)"}
          </div>
        </Equation>
        <Equation title="ΣΜΠ" class="text-lg">
          {"$$ \\frac{\\lambda^ke^{-\\lambda}}{k!} $$"}
        </Equation>
      </div>
    </Article>
  );
});

export const head: DocumentHead = {
  title: "Κατανομές - Poisson",
  meta: [
    {
      name: "description",
      content: "Προβολή ιδιοτήτων & συναρτήσεων κοινών κατανομών",
    },
  ],
};
