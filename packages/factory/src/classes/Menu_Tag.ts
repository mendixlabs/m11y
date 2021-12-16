import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, MenuErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class Menu_Tag extends ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag: string) {
        super(tag);
        // this._scanAllErrors(); // Get all errors on creation of Class
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    private _getAllATags() {
        super.getElementByClassName;
        const allTags = super.querySelectorAll();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    private _scanAllErrors() {
        const skip_link = document.getElementById("skip_link");
        if (skip_link) {
            this._pushErrorToErrorList({
                errorType: ErrorEnum.Success,
                errorEnumToTarget: MenuErrorEnum.USING_SKIP_LINK,
                errorDescription: _descriptions(MenuErrorEnum.USING_SKIP_LINK)
            });
            return;
        }
        let menuLength = [];
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index] as HTMLDivElement;
            menuLength.push(tag.childElementCount);
            if (tag) {
            }
        }
        const totalMenuLength = menuLength.reduce((a, b) => a + b, 0);
        if (totalMenuLength > 14) {
            this._pushErrorToErrorList({
                errorType: ErrorEnum.Error,
                errorEnumToTarget: MenuErrorEnum.LONG_MENU,
                errorDescription: _descriptions(MenuErrorEnum.LONG_MENU)
            });
        }
    }
    public getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
