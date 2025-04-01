import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ArticleCard from "~/components/article-card/article-card";
import BinomialGraph from "~/components/images/binomial-graph";
import ExponentialGraph from "~/components/images/exponential-graph";
import GeometricGraph from "~/components/images/geometric-graph";
import NormalGraph from "~/components/images/normal-graph";
import PoissonGraph from "~/components/images/poisson-graph";
import { rootHead } from "~/lib/root-head";

export default component$(() => {
  return (
    <>
      <h1 class="mt-2 text-center text-4xl">Κατανομές</h1>
      <div class="mt-5 flex justify-center">
        <main class="mb-2 grid grid-cols-2 gap-5">
          <ArticleCard
            title="Διωνυμική"
            href={
              import.meta.env.DEV
                ? "/binomial"
                : "/quick-dirty-distributions/binomial"
            }
          >
            <BinomialGraph />
          </ArticleCard>
          <ArticleCard
            title="Κανονική"
            href={
              import.meta.env.DEV
                ? "/normal"
                : "/quick-dirty-distributions/normal"
            }
          >
            <NormalGraph />
          </ArticleCard>
          <ArticleCard
            title="Γεωμετρική"
            href={
              import.meta.env.DEV
                ? "/geometric"
                : "/quick-dirty-distributions/geometric"
            }
          >
            <GeometricGraph />
          </ArticleCard>
          <ArticleCard
            title="Poisson"
            href={
              import.meta.env.DEV
                ? "/poisson"
                : "/quick-dirty-distributions/poisson"
            }
          >
            <PoissonGraph />
          </ArticleCard>
          <ArticleCard
            title="Εκθετική"
            href={
              import.meta.env.DEV
                ? "/exponential"
                : "/quick-dirty-distributions/exponential"
            }
          >
            <ExponentialGraph />
          </ArticleCard>
        </main>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  ...rootHead,
  meta: [
    ...rootHead.meta,
    { property: "og:title", content: rootHead.title },
    {
      property: "og:url",
      content: "https://kon-io.github.io/quick-dirty-distributions/",
    },
  ],
};
