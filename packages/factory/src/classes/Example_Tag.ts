import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum } from "../utils/types";

export class Example_Tag extends ErrorWarning {
    /**
     * Class For All Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag: string) {
        super(tag);
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    private _getAllATags() {
        super.getElementByClassName;
        /**
         * Choose One that fits your needs
         */
        const allTags = super.getElementByTagName();
        // const allTags = super.getElementByClassName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All Tags And List Errors (Add Checks for Errors here)
     */
    private _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index] as HTMLElement;
            if (tag) {
            }
        }
    }
    public getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
