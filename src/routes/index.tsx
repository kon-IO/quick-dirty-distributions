import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ArticleCard from "~/components/article-card/article-card";
import BinomialGraph from "~/components/images/binomial-graph";
import GeometricGraph from "~/components/images/geometric-graph";
import NormalGraph from "~/components/images/normal-graph";

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
        </main>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Κατανομές",
  meta: [
    {
      name: "description",
      content: "Προβολή ιδιοτήτων & συναρτήσεων κοινών κατανομών",
    },
  ],
};
