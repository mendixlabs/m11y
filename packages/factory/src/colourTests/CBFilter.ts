import { ENUM_CBTestTypes } from "../utils/types";

export class CBFilter {
    protected documentBody;
    private getBodyTag() {
        const documentBody = document.body;
        return documentBody;
    }
    private injectStyleIDs() {
        const div = document.createElement("div");
        div.innerHTML = `<svg height="0">
      <filter id="protanopiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".56667 .43333 0      0 0
              .55833 .44167 0      0 0
              0      .24167 .75833 0 0
              0      0      0      1 0" />
      </filter>
      
      <filter id="protanomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".81667 .18333 0    0 0
              .33333 .66667 0    0 0
              0      .125   .875 0 0
              0      0      0    1 0" />
      </filter>
      
      <filter id="deuteranopiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".625 .375 0  0 0
              .7   .3   0  0 0
              0    .3   .7 0 0
              0    0    0  1 0" />
      </filter>
      
      <filter id="deuteranomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".8     .2     0      0 0
              .25833 .74167 0      0 0
              0      .14167 .85833 0 0
              0      0      0      1 0" />
      </filter>
      
      <filter id="tritanopiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".95 .5     0      0 0
              0   .43333 .56667 0 0
              0   .475   .525   0 0
              0   0      0      1 0" />
      </filter>
      
      <filter id="tritanomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".96667 .3333  0      0 0
              0      .73333 .26667 0 0
              0      .18333 .81667 0 0
              0      0      0      1 0" />
      </filter>
      
      <filter id="achromatopsiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".299 .587 .114 0 0
              .299 .587 .114 0 0
              .299 .587 .114 0 0
              0    0    0    1 0" />
      </filter>
      
      <filter id="achromatomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".618 .32  .62  0 0
              .163 .775 .62  0 0
              .163 .320 .516 0 0
              0    0    0    1 0" />
      </filter>
      </svg>
      `;
        document.body.appendChild(div);
    }
    constructor() {
        this.documentBody = this.getBodyTag();
        this.injectStyleIDs();
    }

    public applyFilter(typeOfCBTest: ENUM_CBTestTypes) {
        const uri = `url(#${typeOfCBTest}SVG_INJECTED_FILTER)`;
        this.documentBody.style.filter = uri;
    }
    public clearFilter() {
        this.documentBody.style.filter = "";
    }
}
