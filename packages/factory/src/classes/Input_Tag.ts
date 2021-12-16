import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, InputTagErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class Input_Tag extends ErrorWarning {
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
            case "input":
                this.mustHaveLabel("Input");
                break;
            case "textarea":
                this.mustHaveLabel("Text area");
                break;
            default:
                break;
        }
    }

    private mustHaveLabel(input: string) {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index] as HTMLTextAreaElement;
            if (tag) {
                const hasNativeLabel = tag.labels?.length;
                const hasAriaLabel = (tag as any).ariaLabel;
                const tagType = tag.type;
                const tagHidden = tag.hidden;
                if (
                    !hasAriaLabel &&
                    !hasNativeLabel &&
                    tagType !== "hidden" &&
                    !tagHidden
                ) {
                    this._pushErrorToErrorList({
                        tag: tag,
                        errorType: ErrorEnum.Error,
                        errorEnumToTarget: InputTagErrorEnum.INPUT_LABEL,
                        errorDescription: _descriptions(
                            InputTagErrorEnum.INPUT_LABEL
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
