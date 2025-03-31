import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Article from "~/components/article/article";
import GeometricGraph from "~/components/images/geometric-graph";

export default component$(() => {
  return (
    <Article title="Geometric">
      <div q:slot="graph">
        <GeometricGraph large />
      </div>
      <div q:slot="main"></div>
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
