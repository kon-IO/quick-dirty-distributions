import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Article from "~/components/article/article";
import Equation from "~/components/article/equation";
import ExponentialGraph from "~/components/images/exponential-graph";
import { rootHead } from "~/lib/root-head";

export default component$(() => {
  return (
    <Article title="Εκθετική">
      <div q:slot="graph">
        <ExponentialGraph large />
      </div>
      <div q:slot="main">
        <Equation title="Ιδιότητες" class="text-lg">
          <div class="mt-3 flex flex-col items-center gap-2">
            {"\\(E(X) = \\frac{1}{\\lambda}\\)"}
            <br />
            {"\\(V(X) = \\frac{1}{\\lambda^2}\\)"}
          </div>
        </Equation>
        <Equation title="ΣΜΠ" class="text-2xl">
          {"$$ \\lambda e^{-\\lambda x} $$"}
        </Equation>
        <Equation title="Αθροιστική" class="text-2xl">
          {"$$ 1 - e^{-\\lambda x} $$"}
        </Equation>
      </div>
    </Article>
  );
});

export const head: DocumentHead = {
  title: `${rootHead.title} - Εκθετική`,
  meta: [
    ...rootHead.meta,
    { property: "og:title", content: `${rootHead.title} - Εκθετική` },
    {
      property: "og:url",
      content: "https://kon-io.github.io/quick-dirty-distributions/exponential",
    },
  ],
};
