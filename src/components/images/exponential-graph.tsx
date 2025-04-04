import { component$ } from "@builder.io/qwik";

export default component$<{ large?: boolean }>((props) => {
  const large = props.large ?? false;
  return (
    <svg
      version="1.1"
      class={large ? "h-36 w-36 fill-current" : "h-16 w-16 fill-current"}
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 320 320"
      // width="320"
      // height="320"
    >
      <defs />
      <g transform="scale(2,2)">
        <g id="background-be323655">
          <rect
            fill="white"
            stroke="none"
            x="0"
            y="0"
            width="160"
            height="160"
            class="dcg-svg-background"
          />
        </g>
        <g id="graphpaper-be323655">
          <g id="grid-be323655">
            <g>
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 30.5 0 L 30.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 56.5 0 L 56.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 82.5 0 L 82.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 108.5 0 L 108.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 134.5 0 L 134.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 127.5 L 160 127.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 99.5 L 160 99.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 70.5 L 160 70.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 42.5 L 160 42.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 14.5 L 160 14.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-major-gridline"
                paint-order="fill stroke markers"
                d=" M 134.5 0 L 134.5 160"
                stroke-opacity="0.2500000000000001"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-major-gridline"
                paint-order="fill stroke markers"
                d=" M 0 14.5 L 160 14.5"
                stroke-opacity="0.2500000000000001"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
            </g>
          </g>
          <g id="axis-be323655">
            <g id="yaxis-be323655">
              <title>Y axis</title>
              <g>
                <path
                  fill="none"
                  stroke="rgb(0,0,0)"
                  class="dcg-svg-axis-line"
                  paint-order="fill stroke markers"
                  d=" M 4 0 L 4 160"
                  stroke-opacity="0.9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  stroke-dasharray=""
                />
              </g>
            </g>
            <g id="xaxis-be323655">
              <title>X axis</title>
              <g>
                <path
                  fill="none"
                  stroke="rgb(0,0,0)"
                  class="dcg-svg-axis-line"
                  paint-order="fill stroke markers"
                  d=" M 0 156 L 160 156"
                  stroke-opacity="0.9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  stroke-dasharray=""
                />
              </g>
            </g>
            <g />
          </g>
        </g>
        <g id="expressions-be323655">
          <g id="sketch-be323655">
            <title>Expression 1</title>
            <path
              fill="#c74440"
              stroke="none"
              paint-order="stroke fill markers"
              d=""
              fill-opacity="0.4"
            />
            <g>
              <path
                fill="none"
                stroke="#c74440"
                class="dcg-svg-curve"
                paint-order="fill stroke markers"
                d=" M 4.155844155844164 14.159292035398238 L 4.155844155844164 14.159292035398238 L 5.6400742115027915 22.023485027275086 L 7.124304267161419 29.450893953544167 L 8.608534322820045 36.46577817815627 L 10.092764378478673 43.09104967905235 L 11.616053119812527 49.50823344959231 L 13.13934186114638 55.55989420799398 L 14.662630602480235 61.266852157820196 L 16.18591934381409 66.64874158311021 L 17.74826677082317 71.85034153614117 L 19.31061419783225 76.74828730122024 L 20.87296162484133 81.36030532149829 L 22.47436773752564 85.8083450914703 L 24.07577385020995 89.9904277355254 L 25.716238648569487 94.01536256376316 L 27.35670344692902 97.79395218624302 L 29.03622693096378 101.42303357547192 L 30.75480910067377 104.90140337779835 L 32.51244995605899 108.2285919808119 L 34.309149497119435 111.4048192893651 L 36.1449077238551 114.43094835448346 L 38.019724636266 117.30843739944345 L 39.97265892002734 120.09295405070293 L 42.00371057513915 122.77511423011049 L 44.03476223025096 125.25553204124796 L 46.065813885362765 127.54938181392147 L 48.1359242261498 129.70988737026835 L 50.206034566936836 131.70488527494473 L 52.31520359339908 133.58042052569994 L 54.46343130553658 135.34039376869436 L 56.650717703349294 136.98889894286577 L 58.87706278683722 138.53018433571216 L 61.18152524167563 139.9923325388233 L 63.525046382189245 141.35201524895902 L 65.94668489405333 142.63390435915971 L 68.44644077726785 143.8375686183194 L 71.06337271750807 144.97949971251782 L 73.79748071477395 146.05582700776554 L 76.64876476906554 147.06389982679866 L 79.65628356605801 148.013856364028 L 82.8200371057514 148.9012800295356 L 86.14002538814569 149.7233085779398 L 89.69436578459135 150.49435764753667 L 93.48305829508837 151.20798174494686 L 97.545161605312 151.8658738661486 L 101.95879308661266 152.47319877883817 L 106.76301142466556 153.02690767771082 L 112.03593399082122 153.5276221782949 L 117.89473684210527 153.97684245652547 L 124.45659603554341 154.373186689642 L 131.955863685187 154.71901791864886 L 140.6659505907626 155.01337905735468 L 151.09461966604823 155.25770178061677 L 160 155.40123862985254"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
                stroke-dasharray=""
              />
            </g>
          </g>
        </g>
        <g id="labels-be323655" />
        <g id="labels-be323655" />
      </g>
    </svg>
  );
});
