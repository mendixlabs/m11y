"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cbTests = exports._descriptions = exports.rationalizeTagInformation = exports._getCorrespondingEnum = exports.removeDuplicates = exports._compareCount = exports._compareErrorLength = void 0;
const types_1 = require("./types");
const _compareErrorLength = (a, b) => {
    if (a.errors.length < b.errors.length) {
        return 1;
    }
    if (a.errors.length > b.errors.length) {
        return -1;
    }
    return 0;
};
exports._compareErrorLength = _compareErrorLength;
const _compareCount = (a, b) => {
    if (a.count < b.count) {
        return 1;
    }
    if (a.count > b.count) {
        return -1;
    }
    return 0;
};
exports._compareCount = _compareCount;
const removeDuplicates = (errorList) => {
    const uniq = errorList.filter((thing, index, self) => index === self.findIndex((t) => t.message === thing.message));
    return uniq;
};
exports.removeDuplicates = removeDuplicates;
const _getCorrespondingEnum = (tag) => {
    switch (tag) {
        case "a":
            return types_1.ATagErrorEnum;
        case "button":
            return types_1.ButtonTagErrorEnum;
        case "img":
            return types_1.ImgTagErrorEnum;
        case "col":
            return types_1.ColTagErrorEnum;
        case "h1":
            return types_1.HTagErrorEnum;
        case "h2":
            return types_1.HTagErrorEnum;
        case "h3":
            return types_1.HTagErrorEnum;
        case "h4":
            return types_1.HTagErrorEnum;
        case "h5":
            return types_1.HTagErrorEnum;
        case "h6":
            return types_1.HTagErrorEnum;
        case "input":
            return types_1.InputTagErrorEnum;
        case "textarea":
            return types_1.InputTagErrorEnum;
        case '[role="menu"]':
            return types_1.MenuErrorEnum;
        case "mx-placeholder":
            return types_1.DataViewErrorEnum;
        default:
            break;
    }
};
exports._getCorrespondingEnum = _getCorrespondingEnum;
const rationalizeTagInformation = (tag) => {
    switch (tag) {
        case "a":
            return {
                mendixName: "Links",
                showButtons: true
            };
        case "button":
            return {
                mendixName: "Buttons",
                showButtons: true
            };
        case "img":
            return {
                mendixName: "Image",
                showButtons: true
            };
        case "col":
            return {
                mendixName: "Layout Grids",
                showButtons: true
            };
        case "h1":
            return {
                mendixName: "Page Title / Text Render Mode h1",
                showButtons: true
            };
        case "input":
            return {
                mendixName: "Text Box",
                showButtons: true
            };
        case "textarea":
            return {
                mendixName: "Text Area",
                showButtons: true
            };
        case '[role="menu"]':
            return {
                mendixName: "Top- & Side- Menu",
                showButtons: false
            };
        case "mx-placeholder":
            return {
                mendixName: "Dataview/Layoutgrid",
                showButtons: false
            };
        default:
            return {
                mendixName: "⚠️ No Corresponding Tag found",
                showButtons: false
            };
    }
};
exports.rationalizeTagInformation = rationalizeTagInformation;
const _descriptions = (r) => {
    switch (r) {
        case types_1.ATagErrorEnum.A_HREF:
            return {
                mendix: "All A tags must have HREF's",
                technical: "`<a>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ATagErrorEnum.A_TAB_INDEX:
            return {
                mendix: "Add Tooltips to Buttons/Links without captions. Usually buttons/links used for icons only",
                technical: "`<a>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ATagErrorEnum.A_TOOL:
            return {
                mendix: "A Tags without titles must have Aria Tags on itself or its first child element",
                technical: "`<a>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ButtonTagErrorEnum.BUTTON_TITLE:
            return {
                mendix: "If a button has no caption you must add a tooltip. Usually this error usually occurs when buttons/links have icons only",
                technical: "`<button>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ColTagErrorEnum.COL_EMPTY:
            return {
                mendix: "ColTagErrorEnum.COL_EMPTY",
                technical: "`.col` class names are added to layout grids to help with layout and responsiveness - Usually follows Bootstrap 4"
            };
        case types_1.DataViewErrorEnum.BASE_DATA_VIEW:
            return {
                mendix: "Consider using a data view as the base for you page",
                technical: "Using a dataview as base for a page is considered pest practice, you can then place layout grids inside of that."
            };
        case types_1.HTagErrorEnum.ONE_H1:
            return {
                mendix: "You should only ever have one Page Title or Text set to display as heading 1 on the page",
                technical: "`<h1>` tags and Page titles are usually set as h1 to show describe what is on this set page. Heading tags are used for semantic html and not font size. Read More [here](https://www.w3.org/WAI/tutorials/page-structure/headings/)"
            };
        case types_1.ImgTagErrorEnum.ALT_TEXT:
            return {
                mendix: "An image must have an alternative text, This Alternative text must describe the photo provided",
                technical: "`<img>` tags are used to display Images in HTML, they must have alt tags for A11y and slow internet connections. Read More [here](https://www.w3.org/WAI/tutorials/images/)"
            };
        case types_1.InputTagErrorEnum.INPUT_LABEL:
            return {
                mendix: "Input/Textarea must have a Label. In your textbox/textarea properties select label to true",
                technical: "`<input>/<textarea>` Input used to submit short text  Read More [here](https://www.w3.org/WAI/tutorials/forms/labels/)"
            };
        case types_1.MenuErrorEnum.LONG_MENU:
            return {
                mendix: "Your menu seems very long consider using skip links. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)",
                technical: "`[role=menu]` is used to Identify Side- & Top-bar menu in Mendix for Accessability you should consider using [this](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget) widget"
            };
        case types_1.MenuErrorEnum.USING_SKIP_LINK:
            return {
                mendix: "🥳 You are using the Skip Link Widget",
                technical: "Your menu is very long. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)"
            };
        default:
            return {
                mendix: "⚠️ No Corresponding Tag found",
                technical: "⚠️ No Corresponding Tag found"
            };
    }
};
exports._descriptions = _descriptions;
exports.cbTests = [
    {
        name: "Achromatomaly",
        type: types_1.ENUM_CBTestTypes.achromatomaly,
        group: "Monochromat",
        desc: "1 good cone, 2 blind/bad | almost no color"
    },
    {
        name: "Achromatopsia",
        type: types_1.ENUM_CBTestTypes.achromatopsia,
        group: "Monochromat",
        desc: "1 good cone, 2 blind/bad | no color"
    },
    {
        name: "Deuteranomaly",
        type: types_1.ENUM_CBTestTypes.deuteranomaly,
        group: "Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low green"
    },
    {
        name: "Deuteranopia",
        type: types_1.ENUM_CBTestTypes.deuteranopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no green"
    },
    {
        name: "Protanomaly",
        type: types_1.ENUM_CBTestTypes.protanomaly,
        group: " Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low red"
    },
    {
        name: "Protanopia",
        type: types_1.ENUM_CBTestTypes.protanopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no red"
    },
    {
        name: "Tritanomaly",
        type: types_1.ENUM_CBTestTypes.tritanomaly,
        group: "Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low blue"
    },
    {
        name: "Tritanopia",
        type: types_1.ENUM_CBTestTypes.tritanopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no blue"
    }
];
//# sourceMappingURL=helpers.js.map