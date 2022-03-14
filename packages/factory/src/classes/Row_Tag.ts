import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, ColTagErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class Row_Tag extends ErrorWarning {
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
        const allTags = super.getElementByClassName();
        this.allTags = allTags;
        return allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    private _scanAllErrors() {
        const clientViewPortHeight = window.innerHeight;
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index] as HTMLDivElement;
            if (tag) {
                if (tag.children.length >= 2) {
                    for (
                        let childIndex = 0;
                        childIndex < tag.children.length;
                        childIndex++
                    ) {
                        const child = tag.children[childIndex];
                        if (child.clientHeight >= clientViewPortHeight * 1.5) {
                            this._pushErrorToErrorList({
                                tag,
                                errorType: ErrorEnum.Warning,
                                errorEnumToTarget: ColTagErrorEnum.LONG_COLS,
                                errorDescription: _descriptions(
                                    ColTagErrorEnum.LONG_COLS
                                )
                            });
                        }
                    }
                }
            }
        }
    }
    public getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
