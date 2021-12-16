import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, ColTagErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class Col_Tag extends ErrorWarning {
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
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index] as HTMLDivElement;
            if (tag) {
                if (!tag.childElementCount) {
                    //   Empty Col
                    this._pushErrorToErrorList({
                        tag,
                        errorType: ErrorEnum.Error,
                        errorEnumToTarget: ColTagErrorEnum.COL_EMPTY,
                        errorDescription: _descriptions(
                            ColTagErrorEnum.COL_EMPTY
                        )
                    });
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
