import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Article from "~/components/article/article";
import Equation from "~/components/article/equation";
import GeometricGraph from "~/components/images/geometric-graph";

export default component$(() => {
  return (
    <Article title="Γεωμετρική">
      <div q:slot="graph">
        <GeometricGraph large />
      </div>
      <div q:slot="main">
        <Equation title="Ιδιότητες" class="text-lg">
          <div class="mt-3 flex flex-col items-center gap-2">
            {"\\(E(X) = \\frac{1}{p}\\)"}
            <br />
            {"\\(V(X) = \\frac{1 - p}{p^2}\\)"}
          </div>
        </Equation>
        <Equation title="ΣΜΠ" class="text-lg">
          {"$$ (1 - p)^{k - 1}p $$"}
        </Equation>
      </div>
    </Article>
  );
});

export const head: DocumentHead = {
  title: "Κατανομές - Γεωμετρική",
  meta: [
    {
      name: "description",
      content: "Προβολή ιδιοτήτων & συναρτήσεων κοινών κατανομών",
    },
  ],
};
