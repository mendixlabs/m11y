import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, ATagErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class ATagErrorList extends ErrorWarning {
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
            const tag = this.allTags[index] as HTMLAnchorElement;
            if (tag) {
                if (!tag.title && !tag.innerText) {
                    if (tag.tabIndex >= 0) {
                        this._pushErrorToErrorList({
                            tag,
                            errorType: ErrorEnum.Error,
                            errorEnumToTarget: ATagErrorEnum.A_TAB_INDEX,
                            errorDescription: _descriptions(
                                ATagErrorEnum.A_TAB_INDEX
                            )
                        });
                    }
                    if (tag.children.length) {
                        // A tag has children
                        if (!tag.children[0].hasOwnProperty("ariaLabel")) {
                            this._pushErrorToErrorList({
                                tag,
                                errorType: ErrorEnum.Error,
                                errorEnumToTarget: ATagErrorEnum.A_TOOL,
                                errorDescription: _descriptions(
                                    ATagErrorEnum.A_TOOL
                                )
                            });
                        }
                    }
                }
                /**
                 * I don't this this is a Error
                 */
                if (!tag.href) {
                    this._pushErrorToErrorList({
                        tag,
                        errorType: ErrorEnum.Warning,
                        errorEnumToTarget: ATagErrorEnum.A_HREF,
                        errorDescription: _descriptions(ATagErrorEnum.A_HREF)
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
