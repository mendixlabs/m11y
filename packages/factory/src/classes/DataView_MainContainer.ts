import { ErrorWarning } from "./ErrorWarning";
import { ErrorEnum, DataViewErrorEnum } from "../utils/types";
import { _descriptions } from "../utils/helpers";

export class DataView_MainContainer extends ErrorWarning {
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
        const allTags = super.getElementByClassName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    private _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index] as HTMLDivElement;
            if (tag) {
                if (tag.children.length) {
                    if (
                        !tag.children[0].classList.contains("mx-dataview") &&
                        !tag.children[0].classList.contains(
                            "mx-scrollcontainer"
                        )
                    ) {
                        this._pushErrorToErrorList({
                            tag,
                            errorType: ErrorEnum.Warning,
                            errorEnumToTarget: DataViewErrorEnum.BASE_DATA_VIEW,
                            errorDescription: _descriptions(
                                DataViewErrorEnum.BASE_DATA_VIEW
                            )
                        });
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
