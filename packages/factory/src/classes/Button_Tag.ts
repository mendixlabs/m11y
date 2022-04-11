import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, ButtonTagErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class Button_Tag extends ErrorWarning {
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
        super.getElementByClassName;
        const allTags = super.getElementByTagName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    private _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index] as HTMLButtonElement;
            if (tag) {
                if (!tag.title && !tag.innerText && !tag.ariaLabel) {
                    this._pushErrorToErrorList({
                        tag,
                        errorType: ErrorEnum.Error,
                        errorEnumToTarget: ButtonTagErrorEnum.BUTTON_TITLE,
                        errorDescription: _descriptions(
                            ButtonTagErrorEnum.BUTTON_TITLE
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
