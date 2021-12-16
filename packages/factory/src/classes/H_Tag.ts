import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, HTagErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class H_Tag extends ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
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
        const allTags = super.getElementByTagName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */

    private _scanAllErrors() {
        switch (this.tag) {
            case "h1":
                this.multipleH1();
                break;
            default:
                break;
        }
    }

    private multipleH1() {
        if (this.allTags.length > 1) {
            for (let index = 0; index < this.allTags.length; index++) {
                const tag = this.allTags[index] as HTMLHeadingElement;
                if (tag) {
                    this._pushErrorToErrorList({
                        tag: tag,
                        errorType: ErrorEnum.Error,
                        errorEnumToTarget: HTagErrorEnum.ONE_H1,
                        errorDescription: _descriptions(HTagErrorEnum.ONE_H1)
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
