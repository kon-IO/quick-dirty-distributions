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
        <g id="background-53513d55">
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
        <g id="graphpaper-53513d55">
          <g id="grid-53513d55">
            <g>
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 43.5 0 L 43.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 80.5 0 L 80.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 116.5 0 L 116.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 152.5 0 L 152.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 109.5 L 160 109.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 72.5 L 160 72.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 36.5 L 160 36.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 -0.5 L 160 -0.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-major-gridline"
                paint-order="fill stroke markers"
                d=" M 152.5 0 L 152.5 160"
                stroke-opacity="0.2500000000000001"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-major-gridline"
                paint-order="fill stroke markers"
                d=" M 0 -0.5 L 160 -0.5"
                stroke-opacity="0.2500000000000001"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
            </g>
          </g>
          <g id="axis-53513d55">
            <g id="yaxis-53513d55">
              <title>Y axis</title>
              <g>
                <path
                  fill="none"
                  stroke="rgb(0,0,0)"
                  class="dcg-svg-axis-line"
                  paint-order="fill stroke markers"
                  d=" M 7 0 L 7 160"
                  stroke-opacity="0.9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  stroke-dasharray=""
                />
              </g>
            </g>
            <g id="xaxis-53513d55">
              <title>X axis</title>
              <g>
                <path
                  fill="none"
                  stroke="rgb(0,0,0)"
                  class="dcg-svg-axis-line"
                  paint-order="fill stroke markers"
                  d=" M 0 145 L 160 145"
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
        <g id="expressions-53513d55">
          <g id="sketch-53513d55">
            <title>Expression 1</title>
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 11.02272727272728 145.4538518732244 A 3.75 3.75 0 1 1 11.022725397727436 145.4501018738494 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 18.295454545454554 145.44067382812497 A 3.75 3.75 0 1 1 18.29545267045471 145.43692382874997 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 25.568181818181827 145.32276500355113 A 3.75 3.75 0 1 1 25.568179943181985 145.31901500417612 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 32.84090909090909 144.66386274857953 A 3.75 3.75 0 1 1 32.840907215909255 144.66011274920453 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 40.113636363636374 142.09414395419034 A 3.75 3.75 0 1 1 40.11363448863653 142.09039395481534 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 47.38636363636364 134.70126065340907 A 3.75 3.75 0 1 1 47.386361761363794 134.69751065403406 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 54.659090909090914 118.57133345170448 A 3.75 3.75 0 1 1 54.65908903409107 118.56758345232947 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 61.93181818181819 91.68812144886365 A 3.75 3.75 0 1 1 61.93181630681834 91.68437144948865 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 69.20454545454547 58.084106445312514 A 3.75 3.75 0 1 1 69.20454357954563 58.08035644593751 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 76.47727272727273 28.960626775568144 A 3.75 3.75 0 1 1 76.4772708522729 28.95687677619314 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 83.75 17.31123490767044 A 3.75 3.75 0 1 1 83.74999812500016 17.307484908295436 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 91.02272727272728 28.960626775568144 A 3.75 3.75 0 1 1 91.02272539772744 28.95687677619314 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 98.29545454545455 58.0841064453125 A 3.75 3.75 0 1 1 98.29545267045471 58.0803564459375 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 105.56818181818183 91.68812144886365 A 3.75 3.75 0 1 1 105.56817994318199 91.68437144948865 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 112.8409090909091 118.57133345170448 A 3.75 3.75 0 1 1 112.84090721590925 118.56758345232947 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 120.11363636363637 134.70126065340907 A 3.75 3.75 0 1 1 120.11363448863654 134.69751065403406 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 127.38636363636364 142.09414395419034 A 3.75 3.75 0 1 1 127.3863617613638 142.09039395481534 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 134.6590909090909 144.66386274857953 A 3.75 3.75 0 1 1 134.65908903409107 144.66011274920453 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 141.9318181818182 145.32276500355113 A 3.75 3.75 0 1 1 141.93181630681835 145.31901500417612 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 149.20454545454547 145.44067382812497 A 3.75 3.75 0 1 1 149.20454357954563 145.43692382874997 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 156.47727272727272 145.4538518732244 A 3.75 3.75 0 1 1 156.47727085227288 145.4501018738494 Z"
              fill-opacity="0.9"
            />
          </g>
        </g>
        <g id="labels-53513d55" />
        <g id="labels-53513d55" />
      </g>
    </svg>
  );
});
