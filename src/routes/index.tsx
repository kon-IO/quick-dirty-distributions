import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ArticleCard from "~/components/article-card/article-card";
import BinomialGraph from "~/components/images/binomial-graph";
import NormalGraph from "~/components/images/normal-graph";

export default component$(() => {
  return (
    <>
      <h1 class="mt-1.5 text-center text-3xl">Γρήγορες & Βρώμικες</h1>
      <div class="mt-5 flex justify-center">
        <main class="grid grid-cols-2 gap-4">
          <ArticleCard title="Διωνυμική" href="/binomial">
            <BinomialGraph />
          </ArticleCard>
          <ArticleCard title="Κανονική" href="">
            <NormalGraph />
          </ArticleCard>
        </main>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Γρήγορα να τελειώνουμε",
  meta: [
    {
      name: "description",
      content: "Προβολή ιδιοτήτων & συναρτήσεων κοινών κατανομών",
    },
  ],
};
