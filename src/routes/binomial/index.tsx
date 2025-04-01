import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Article from "~/components/article/article";
import Equation from "~/components/article/equation";
import BinomialGraph from "~/components/images/binomial-graph";
import { rootHead } from "~/lib/root-head";

export default component$(() => {
  return (
    <Article title="Διωνυμική">
      <div q:slot="graph">
        <BinomialGraph large />
      </div>
      <div q:slot="main">
        <Equation title="Ιδιότητες" class="text-lg">
          <div class="mt-3 flex flex-col items-center gap-2">
            {"\\(E(X) = np\\)"}
            <br />
            {"\\(V(X) = np(1 - p)\\)"}
          </div>
        </Equation>
        <Equation title="ΣΜΠ" class="text-2xl">
          {"$$ \\binom nk p^k q^{n - k} $$"}
        </Equation>
      </div>
    </Article>
  );
});

export const head: DocumentHead = {
  title: `${rootHead.title} - Διωνυμική`,
  meta: [
    ...rootHead.meta,
    { property: "og:title", content: `${rootHead.title} - Διωνυμική` },
    {
      property: "og:url",
      content: "https://kon-io.github.io/quick-dirty-distributions/binomial",
    },
  ],
};
