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
        <g id="background-02c98dff">
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
        <g id="graphpaper-02c98dff">
          <g id="grid-02c98dff">
            <g>
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 25.5 0 L 25.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 47.5 0 L 47.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 70.5 0 L 70.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 92.5 0 L 92.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 114.5 0 L 114.5 160"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 136.5 0 L 136.5 160"
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
                d=" M 0 120.5 L 160 120.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 85.5 L 160 85.5"
                stroke-opacity="0.2"
                stroke-miterlimit="10"
                stroke-dasharray=""
              />
              <path
                fill="none"
                stroke="rgb(0,0,0)"
                class="dcg-svg-minor-gridline"
                paint-order="fill stroke markers"
                d=" M 0 49.5 L 160 49.5"
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
                d=" M 114.5 0 L 114.5 160"
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
          <g id="axis-02c98dff">
            <g id="yaxis-02c98dff">
              <title>Y axis</title>
              <g>
                <path
                  fill="none"
                  stroke="rgb(0,0,0)"
                  class="dcg-svg-axis-line"
                  paint-order="fill stroke markers"
                  d=" M 3 0 L 3 160"
                  stroke-opacity="0.9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  stroke-dasharray=""
                />
              </g>
            </g>
            <g id="xaxis-02c98dff">
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
        <g id="expressions-02c98dff">
          <g id="sketch-02c98dff">
            <title>Expression 1</title>
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 7.083333333333343 143.41999012356683 A 3.75 3.75 0 1 1 7.0833314583334985 143.41624012419183 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 18.194444444444454 104.34662716093388 A 3.75 3.75 0 1 1 18.19444256944461 104.34287716155887 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 29.305555555555564 52.24880987742331 A 3.75 3.75 0 1 1 29.30555368055572 52.24505987804831 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 40.41666666666667 17.51693168841632 A 3.75 3.75 0 1 1 40.416664791666825 17.513181689041318 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 51.527777777777786 17.51693168841632 A 3.75 3.75 0 1 1 51.52777590277794 17.513181689041318 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 62.6388888888889 45.3024342396219 A 3.75 3.75 0 1 1 62.638887013889054 45.2986842402469 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 73.75 82.34977097456274 A 3.75 3.75 0 1 1 73.74999812500016 82.34602097518774 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 84.86111111111111 114.10463103308348 A 3.75 3.75 0 1 1 84.86110923611128 114.10088103370848 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 95.97222222222223 135.274537738764 A 3.75 3.75 0 1 1 95.97222034722239 135.270787739389 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 107.08333333333334 147.03559701969758 A 3.75 3.75 0 1 1 107.0833314583335 147.03184702032257 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 118.19444444444446 152.6809054745457 A 3.75 3.75 0 1 1 118.19444256944462 152.6771554751707 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 129.30555555555554 155.07588481902673 A 3.75 3.75 0 1 1 129.3055536805557 155.07213481965172 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 140.41666666666666 155.98825790263854 A 3.75 3.75 0 1 1 140.41666479166682 155.98450790326353 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 151.52777777777777 156.30407935465803 A 3.75 3.75 0 1 1 151.52777590277793 156.30032935528303 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 162.63888888888889 156.40434013307691 A 3.75 3.75 0 1 1 162.63888701388905 156.4005901337019 Z"
              fill-opacity="0.9"
            />
            <path
              fill="#c74440"
              stroke="none"
              class="dcg-svg-point"
              paint-order="stroke fill markers"
              d=" M 173.75 156.4337499614131 A 3.75 3.75 0 1 1 173.74999812500016 156.4299999620381 Z"
              fill-opacity="0.9"
            />
          </g>
        </g>
        <g id="labels-02c98dff" />
        <g id="labels-02c98dff" />
      </g>
    </svg>
  );
});
