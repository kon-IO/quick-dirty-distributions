import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Article from "~/components/article/article";
import Equation from "~/components/article/equation";
import NormalGraph from "~/components/images/normal-graph";
import { rootHead } from "~/lib/root-head";

/* The G.O.A.T. https://stackoverflow.com/a/36577594 */
function percentile_z(p: number): number {
  if (p < 0.5) return -percentile_z(1 - p);

  if (p > 0.92) {
    if (p == 1) return Infinity;
    const r = Math.sqrt(-Math.log(1 - p));
    return (
      (((2.3212128 * r + 4.8501413) * r - 2.2979648) * r - 2.7871893) /
      ((1.6370678 * r + 3.5438892) * r + 1)
    );
  }
  p -= 0.5;
  const r = p * p;
  return (
    (p * (((-25.4410605 * r + 41.3911977) * r - 18.6150006) * r + 2.5066282)) /
    ((((3.1308291 * r - 21.062241) * r + 23.0833674) * r - 8.4735109) * r + 1)
  );
}

export default component$(() => {
  const zSt = useSignal("");
  const out = useComputed$(() => {
    const num = parseFloat(zSt.value);
    if (Number.isNaN(num)) {
      return "";
    }
    const z = percentile_z(num).toFixed(2);
    return z.endsWith("ity") ? z.slice(0, -5) : z;
  });

  return (
    <Article title="Κανονική">
      <div q:slot="graph">
        <NormalGraph large />
      </div>
      <div q:slot="main">
        <Equation title="Ιδιότητες" class="text-lg">
          <div class="mt-3 flex flex-col items-center gap-2">
            {"\\(E(X) = \\mu\\)"}
            <br />
            {"\\(V(X) = \\sigma^2\\)"}
          </div>
        </Equation>
        <Equation title="ΣΠΠ" class="text-2xl">
          {
            "$$ \\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}} $$"
          }
        </Equation>
        <hr />
        <div class="mx-2 mt-3 flex flex-col gap-3">
          <h3 class="text-lg">Εύρεση Z (τυπική)</h3>
          <div class="flex flex-row justify-center gap-3">
            <input
              type="text"
              class="w-32 border-1 border-black"
              bind:value={zSt}
            />
            <p class="w-20">Z = {out.value}</p>
          </div>
        </div>
        <p class="mt-3.5 ml-1.5 text-xs text-gray-700">
          (Πολύ ωραίος ο κώδικας που πήρα για αυτό, pay respects:{" "}
          <a
            class="text-blue-500"
            target="_blank"
            href="https://stackoverflow.com/a/36577594"
          >
            https://stackoverflow.com/a/36577594
          </a>
          )
        </p>
        {/*
          <Equation title="Αθροιστική" class="text-base">
            {
              "$$ \\Phi\\left(\\frac{x - \\mu}{\\sigma}\\right) = \\frac{1}{2}\\left[1 + \\text{erf}\\left(\\frac{x - \\mu}{\\sigma\\sqrt{2}}\\right)\\right] $$"
            }
          </Equation>
          */}
      </div>
    </Article>
  );
});

export const head: DocumentHead = {
  title: `${rootHead.title} - Κανονική`,
  meta: [
    ...rootHead.meta,
    { property: "og:title", content: `${rootHead.title} - Κανονική` },
    {
      property: "og:url",
      content: "https://kon-io.github.io/quick-dirty-distributions/normal",
    },
  ],
};
