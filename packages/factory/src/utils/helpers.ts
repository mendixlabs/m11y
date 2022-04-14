import {
    ErrorType,
    IRationalize,
    ATagErrorEnum,
    HTagErrorEnum,
    MenuErrorEnum,
    ImgTagErrorEnum,
    ColTagErrorEnum,
    descriptionsType,
    InputTagErrorEnum,
    DataViewErrorEnum,
    ButtonTagErrorEnum,
    ReturnErrorList,
    AllErrorEnumTypes,
    ENUM_CBTestTypes,
    CB_TEST_TYPE,
    ListsErrorEnum
} from "./types";

export const _compareErrorLength = (a: ReturnErrorList, b: ReturnErrorList) => {
    if (a?.errors?.length < b?.errors?.length) {
        return 1;
    }
    if (a?.errors?.length > b?.errors?.length) {
        return -1;
    }
    return 0;
};
export const _compareCount = (a: ReturnErrorList, b: ReturnErrorList) => {
    if (a.count < b.count) {
        return 1;
    }
    if (a.count > b.count) {
        return -1;
    }
    return 0;
};

export const removeDuplicates = (errorList: ErrorType[]) => {
    const uniq = errorList.filter(
        (thing, index, self) =>
            index === self.findIndex((t) => t.message === thing.message)
    );
    return uniq;
};
export const _getCorrespondingEnum = (tag: string) => {
    switch (tag) {
        case "a":
            return ATagErrorEnum;
        case "row":
            return ColTagErrorEnum;
        case "button":
            return ButtonTagErrorEnum;
        case "img":
            return ImgTagErrorEnum;
        case "col":
            return ColTagErrorEnum;
        case "h1":
            return HTagErrorEnum;
        case "h2":
            return HTagErrorEnum;
        case "h3":
            return HTagErrorEnum;
        case "h4":
            return HTagErrorEnum;
        case "h5":
            return HTagErrorEnum;
        case "h6":
            return HTagErrorEnum;
        case "input":
            return InputTagErrorEnum;
        case "textarea":
            return InputTagErrorEnum;
        case '[role="menu"]':
            return MenuErrorEnum;
        case 'li[role="button"]':
            return ListsErrorEnum;
        case "mx-placeholder":
            return DataViewErrorEnum;
        default:
            break;
    }
};

export const rationalizeTagInformation = (tag: string): IRationalize => {
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
        case "row":
            return {
                mendixName: "Dataview/Layoutgrid (Row)",
                showButtons: true
            };
        case 'li[role="button"]':
            return {
                mendixName: "List View | As Button",
                showButtons: true
            };
        default:
            return {
                mendixName: "⚠️ No Corresponding Tag found",
                showButtons: false
            };
    }
};
export const _descriptions = (r: AllErrorEnumTypes): descriptionsType => {
    switch (r) {
        case ATagErrorEnum.A_HREF:
            return {
                mendix: "All A tags must have HREF's. `<a>` tags are used in Menu items or buttons set to display as links",
                technical: `
                \n &nbsp;
                &#9830; Add a link/url to a the corresponding button.
                `
            };
        case ATagErrorEnum.A_TAB_INDEX:
            return {
                mendix: "Usually buttons/links used for icons only",
                technical: `
                \n &nbsp;
                &#9830; Add Tooltips to Buttons/Links without captions.
                \n &nbsp;
                &#9830; Consider using [this](https://marketplace.mendix.com/link/component/114803) widget is it is not possible to make the changes directly in Mendix
                `
            };
        case ATagErrorEnum.A_TOOL:
            return {
                mendix: "A Tags without titles must have Aria Tags on itself or its first child element",
                technical:
                    "`<a>` tags are used in Menu items or buttons set to display as links.  Consider using [this](https://marketplace.mendix.com/link/component/114803) widget if it is not possible to make the changes directly in Mendix"
            };
        case ButtonTagErrorEnum.BUTTON_TITLE:
            return {
                mendix: "Usually this error usually occurs when buttons/links have icons only",
                technical: `
                \n &nbsp;
                &#9830; Add a Caption or Tooltip to your button.
                \n &nbsp;
                &#9830; Consider using [this](https://marketplace.mendix.com/link/component/114803) widget is it is not possible to make the changes directly in Mendix
                `
            };
        case ColTagErrorEnum.COL_EMPTY:
            return {
                mendix: "Empty Columns should be avoided as Layout helper - _(Design System)_",
                technical:
                    "`.col` class names are added to layout grids to help with layout and responsiveness - Usually follows Bootstrap 4"
            };
        case ColTagErrorEnum.LONG_COLS:
            return {
                mendix: "Usage of Very long columns are to be avoided for help with Keyboard interactions",
                technical:
                    "`.col` class names are added to layout grids to help with layout and responsiveness - Usually follows Bootstrap 4"
            };
        case DataViewErrorEnum.BASE_DATA_VIEW:
            return {
                mendix: "Consider using a data view as the base for you page",
                technical:
                    "Using a dataview as base for a page is considered pest practice, you can then place layout grids inside of that."
            };
        case HTagErrorEnum.ONE_H1:
            return {
                mendix: "You should only ever have one Page Title or Text set to display as heading 1 on the page",
                technical:
                    "`<h1>` tags and Page titles are usually set as h1 to show describe what is on this set page. Heading tags are used for semantic html and not font size. Read More [here](https://www.w3.org/WAI/tutorials/page-structure/headings/)"
            };
        case ImgTagErrorEnum.ALT_TEXT:
            return {
                mendix: "An image must have an alternative text, This Alternative text must describe the photo provided",
                technical:
                    "`<img>` tags are used to display Images in HTML, they must have alt tags for A11y and slow internet connections. Read More [here](https://www.w3.org/WAI/tutorials/images/)"
            };
        case InputTagErrorEnum.INPUT_LABEL:
            return {
                mendix: "Input/Textarea must have a Label. In your textbox/textarea properties select label to true",
                technical:
                    "`<input>/<textarea>` Input used to submit short text  Read More [here](https://www.w3.org/WAI/tutorials/forms/labels/)"
            };
        case MenuErrorEnum.LONG_MENU:
            return {
                mendix: "Your menu seems very long consider using skip links. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)",
                technical:
                    "`[role=menu]` is used to Identify Side- & Top-bar menu in Mendix for Accessability you should consider using [this](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget) widget"
            };
        case MenuErrorEnum.USING_SKIP_LINK:
            return {
                mendix: "🥳 You are using the Skip Link Widget",
                technical:
                    "Your menu is very long. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)"
            };
        case ListsErrorEnum.LIST_AS_BUTTON:
            return {
                mendix: "Using List view Items should be avoided",
                technical: `
                    \n &nbsp;
                    &#9830; Use a different implementation.
                    \n &nbsp;
                    &#9830; Consider using [this](https://marketplace.mendix.com/link/component/114803) widget is it is not possible to make the changes directly in Mendix
                    `
            };

        default:
            return {
                mendix: "⚠️ No Corresponding Tag found (DESC)",
                technical: "⚠️ No Corresponding Tag found"
            };
    }
};

export const cbTests: CB_TEST_TYPE[] = [
    {
        name: "Achromatomaly",
        type: ENUM_CBTestTypes.achromatomaly,
        group: "Monochromat",
        desc: "1 good cone, 2 blind/bad | almost no color"
    },
    {
        name: "Achromatopsia",
        type: ENUM_CBTestTypes.achromatopsia,
        group: "Monochromat",
        desc: "1 good cone, 2 blind/bad | no color"
    },
    {
        name: "Deuteranomaly",
        type: ENUM_CBTestTypes.deuteranomaly,
        group: "Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low green"
    },
    {
        name: "Deuteranopia",
        type: ENUM_CBTestTypes.deuteranopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no green"
    },

    {
        name: "Protanomaly",
        type: ENUM_CBTestTypes.protanomaly,
        group: " Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low red"
    },
    {
        name: "Protanopia",
        type: ENUM_CBTestTypes.protanopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no red"
    },
    {
        name: "Tritanomaly",
        type: ENUM_CBTestTypes.tritanomaly,
        group: "Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low blue"
    },
    {
        name: "Tritanopia",
        type: ENUM_CBTestTypes.tritanopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no blue"
    }
];
