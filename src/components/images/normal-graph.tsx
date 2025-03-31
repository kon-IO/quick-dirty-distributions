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
        <g id="background-04b2d8e6">
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
        <g id="graphpaper-04b2d8e6">
          <g id="grid-04b2d8e6">
            <g>
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 1.5 0 L 1.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 21.5 0 L 21.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 40.5 0 L 40.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 60.5 0 L 60.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 99.5 0 L 99.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 119.5 0 L 119.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 138.5 0 L 138.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 158.5 0 L 158.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 112.5 L 160 112.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 80.5 L 160 80.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 47.5 L 160 47.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 16.5 L 160 16.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
            </g>
          </g>
          <g id="axis-04b2d8e6">
            <g id="yaxis-04b2d8e6">
              <title>Y axis</title>
              <g>
                <path
                  fill="none"
                  stroke="rgb(0,0,0)"
                  class="dcg-svg-axis-line"
                  paint-order="fill stroke markers"
                  d=" M 80 0 L 80 160"
                  stroke-opacity="0.9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  stroke-dasharray=""
                />
              </g>
            </g>
            <g id="xaxis-04b2d8e6">
              <title>X axis</title>
              <g>
                <path
                  fill="none"
                  stroke="rgb(0,0,0)"
                  class="dcg-svg-axis-line"
                  paint-order="fill stroke markers"
                  d=" M 0 144 L 160 144"
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
        <g id="expressions-04b2d8e6">
          <g id="sketch-04b2d8e6">
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
                d=" M 0 143.9714362697033 L 0 143.9714362697033 L 7.343749999999986 143.8754861343473 L 11.7578125 143.71820157505886 L 15 143.50303258512213 L 17.656250000000007 143.22508695687233 L 19.921875 142.88455889645775 L 21.9140625 142.48046728050042 L 23.710937499999986 142.00966045838356 L 25.351562499999993 141.4722453637766 L 26.874999999999993 140.86398170995136 L 28.3203125 140.1737550117424 L 29.6875 139.40480566140783 L 31.015624999999993 138.53587049970182 L 32.304687499999986 137.5642137215357 L 33.59375 136.45278434244045 L 34.88281249999999 135.18796075089455 L 36.171875 133.75597564490053 L 37.4609375 132.14315074606893 L 38.78906249999999 130.2782442290159 L 40.07812500000001 128.25799755922299 L 41.32812499999999 126.09012785009507 L 42.578125 123.70716848247373 L 43.82812499999999 121.10131898144411 L 45.078125 118.26667299243937 L 46.36718749999999 115.09995178444632 L 47.65625 111.68488451482062 L 48.984375 107.90888838027058 L 50.390625 103.63314707386574 L 51.875 98.82442910450055 L 53.4375 93.45948304032156 L 55.15625 87.24126140419636 L 57.1484375 79.69772617053641 L 59.84375 69.12426354006932 L 64.21875 51.95177828754939 L 66.0546875 45.11215077860642 L 67.578125 39.75548409312496 L 68.90625 35.39089473005146 L 70.1171875 31.70668798445257 L 71.2109375 28.654195491163364 L 72.2265625 26.07772798883775 L 73.203125 23.853463029369024 L 74.1015625 22.04021579908462 L 74.9609375 20.525404933626305 L 75.78125 19.287775663936017 L 76.6015625 18.26017618786946 L 77.34375 17.51592748481322 L 78.0078125 17.002132183419292 L 78.6328125 16.65146786955364 L 79.21875 16.440758063317773 L 79.8046875 16.344865660863107 L 80.3515625 16.359190170349706 L 80.8984375 16.473728395354897 L 81.484375 16.707343260992047 L 82.0703125 17.055055502255158 L 82.6953125 17.550647076378624 L 83.3984375 18.26017618786946 L 84.140625 19.180767512421028 L 84.9609375 20.398654866780305 L 85.8203125 21.89348988532673 L 86.6796875 23.604015118294285 L 87.6171875 25.70472197783542 L 88.59375 28.138755413036037 L 89.6484375 31.02957827332571 L 90.78125 34.41146572142222 L 91.9921875 38.30938259464233 L 93.359375 43.0124391987257 L 94.921875 48.70625547957367 L 96.8359375 56.01780368814215 L 99.921875 68.19487133385269 L 103.28125 81.3500913921075 L 105.3125 88.96697763561113 L 107.0703125 95.23525691740397 L 108.671875 100.63013177862081 L 110.15625 105.329181822288 L 111.5625 109.49504394977455 L 112.9296875 113.2679177158184 L 114.2578125 116.66634886453784 L 115.546875 119.71288124311371 L 116.8359375 122.51383719285715 L 118.0859375 125.00041246000382 L 119.3359375 127.26802767540912 L 120.625 129.38635911663616 L 121.9140625 131.2920867789531 L 123.2421875 133.04610374798816 L 124.5703125 134.60166536780875 L 125.8984375 135.97359474896385 L 127.2265625 137.17694046623845 L 128.5546875 138.2266865643127 L 129.8828125 139.13750676801394 L 131.25 139.94493312512412 L 132.65625 140.65297151018436 L 134.140625 141.28203644208529 L 135.703125 141.83052908811354 L 137.3828125 142.3094958273623 L 139.21875 142.723797952895 L 141.25 143.07454912413945 L 143.59375 143.3698161363532 L 146.328125 143.60477242957126 L 149.6484375 143.7815547608176 L 154.0234375 143.904315774618 L 160 143.9714362697033"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
                stroke-dasharray=""
              />
            </g>
          </g>
        </g>
        <g id="labels-04b2d8e6" />
        <g id="labels-04b2d8e6" />
      </g>
    </svg>
  );
});
