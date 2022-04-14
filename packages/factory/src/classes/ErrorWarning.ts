import {
    ErrorEnum,
    CountedErrorList,
    AllChecksReturn,
    IStepFunction,
    IRationalizeDataInput,
    IPushErrorToErrorFunctionInput,
    AllErrorEnumTypes,
    IReturnRationalizedData
} from "../utils/types";
import { _getCorrespondingEnum } from "../utils/helpers";

export class ErrorWarning {
    /**
     * Tag passed in in String
     */
    tag: string;
    protected errorList: AllChecksReturn;
    protected countedErrorList: CountedErrorList[];
    protected allTags: HTMLCollectionOf<Element> | NodeListOf<Element>;

    constructor(tag: string) {
        this.tag = tag;
        this.errorList = {};
        this.countedErrorList = [];
        this.allTags = [] as any;
    }

    private build() {
        this.errorList = {};
        this.countedErrorList = [];
        this.allTags = [] as any;
    }

    protected getElementByTagName(): HTMLCollectionOf<Element> {
        this.build(); // Re-create error lists when Tag names are re-gotten
        const allATags = document.getElementsByTagName(this.tag);
        return allATags;
    }
    protected querySelectorAll(): NodeListOf<Element> {
        this.build(); // Re-create error lists when Tag names are re-gotten
        const allATags = document.querySelectorAll(this.tag);
        return allATags;
    }
    protected getElementByClassName(): HTMLCollectionOf<Element> {
        this.build(); // Re-create error lists when Tag names are re-gotten
        const allATags = document.getElementsByClassName(this.tag);
        return allATags;
    }

    // Toggles On And Off the class Names to Show Errors/warnings
    protected _toggleClassName(allATags: CountedErrorList[]): void {
        for (let index = 0; index < allATags.length; index++) {
            const { tag, errorType } = allATags[index];
            let found = false;
            if (tag && tag.classList) {
                tag.classList.forEach((className: string) => {
                    if (
                        errorType == ErrorEnum.Error &&
                        className == "mx-bp-a11y-extension-error"
                    ) {
                        return (found = true);
                    }
                    if (errorType == ErrorEnum.Warning && className == "≈") {
                        return (found = true);
                    }
                });
                if (found) {
                    if (errorType == ErrorEnum.Error) {
                        tag.classList.remove("mx-bp-a11y-extension-error");
                    }
                    if (errorType == ErrorEnum.Warning) {
                        tag.classList.remove("mx-bp-a11y-extension-warning");
                    }
                }
                if (!found) {
                    if (errorType == ErrorEnum.Error) {
                        tag.classList.add("mx-bp-a11y-extension-error");
                    }
                    if (errorType == ErrorEnum.Warning) {
                        tag.classList.add("mx-bp-a11y-extension-warning");
                    }
                }
            }
        }
    }

    protected _stepThroughErrors({ list, step }: IStepFunction): void {
        if (step === 0) {
            this.removeAllClassNames();
        }
        if (list.length) {
            const prevError: CountedErrorList = list[step - 1];
            const nextError: CountedErrorList = list[step + 1];
            const selectedError: CountedErrorList = list[step];
            if (prevError && prevError.tag) {
                prevError.tag.classList.remove("mx-bp-a11y-extension-step");
            }
            if (nextError && nextError.tag) {
                nextError.tag.classList.remove("mx-bp-a11y-extension-step");
            }
            if (selectedError.tag) {
                selectedError.tag.classList.add("mx-bp-a11y-extension-step");
                selectedError.tag.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            }
        }
    }
    /**
     * function to construct the internally used Error List and All errorTags
     * @param { {}: tag: HTMLElement, errorType: ErrorEnum, errorDesc: string, errorList: AllChecksReturn, errorEnumToTarget: Enum, allErrorTags: CountedErrorList[]}
     */
    protected _pushErrorToErrorList({
        tag,
        errorType,
        errorEnumToTarget,
        errorDescription
    }: IPushErrorToErrorFunctionInput): void {
        this.countedErrorList.push({ tag, errorType });
        if (this.errorList[errorEnumToTarget]) {
            this.errorList[errorEnumToTarget].tags.push({ tag, errorType });
            this.errorList[errorEnumToTarget].errorCount++;
            this.errorList[errorEnumToTarget].errorDescription =
                errorDescription;
            // this.errorList[errorEnumToTarget].errorDesc =  _descriptions(this.errorList[errorEnumToTarget])
        }
        if (!this.errorList[errorEnumToTarget]) {
            this.errorList[errorEnumToTarget] = {
                errorEnumToTarget,
                errorDescription,
                errorType,
                errorCount: 1,
                tags: [{ tag, errorType }]
            };
        }
    }

    private _rationalizeData({
        errorList,
        passedEnum
    }: IRationalizeDataInput): IReturnRationalizedData {
        const rationalizeErrorList = [];
        const countAllTagErrors = [];

        for (let item in passedEnum) {
            if (errorList[item]) {
                countAllTagErrors.push(errorList[item].errorCount);
                rationalizeErrorList.push(errorList[item]);
            }
        }
        // const totalError = eval(countAllTagErrors.join("+"));

        return { errors: rationalizeErrorList, totalError: 0 };
    }

    // ********************
    // ALL PUBLIC CLASSES
    // ********************

    /**
     * Toggles on an Off Class names that will show the error in the dom
     */
    public seeErrorsOnType(errorEnumToTarget: AllErrorEnumTypes): void {
        if (this.errorList) {
            if (this.errorList[errorEnumToTarget]) {
                if (this.errorList[errorEnumToTarget].tags.length) {
                    this.removeAllClassNames();
                    setTimeout(() => {
                        this._toggleClassName(
                            this.errorList[errorEnumToTarget].tags
                        );
                    }, 100);
                }
            } else {
                throw new Error("Enum Not in Error List");
            }
        }
    }
    /**
     * Toggles on an Off Class names that will show the error in the dom
     */
    public seeAllErrors(): void {
        // We do this so that we don't have to return something from _scanAllErrors
        if (this.countedErrorList.length) {
            this._toggleClassName(this.countedErrorList);
        }
    }

    /**
     * Removes All class Names M11Y Adds to Dom
     */
    public async removeAllClassNames() {
        const allStepAddedClassNames = document.getElementsByClassName(
            "mx-bp-a11y-extension-step"
        );
        await this.removeClassNameFromArray(
            allStepAddedClassNames,
            "mx-bp-a11y-extension-step"
        );

        const allErrorAddedClassNames = document.getElementsByClassName(
            "mx-bp-a11y-extension-error"
        );
        await this.removeClassNameFromArray(
            allErrorAddedClassNames,
            "mx-bp-a11y-extension-error"
        );
        const allWarningAddedClassNames = document.getElementsByClassName(
            "mx-bp-a11y-extension-warning"
        );
        this.removeClassNameFromArray(
            allWarningAddedClassNames,
            "mx-bp-a11y-extension-warning"
        );
    }
    /**
     * Removes All Classnames from HTMLCollection
     *  @param collectionClass: HTMLCollectionOfElement
     *  @param className: string
     */
    private async removeClassNameFromArray(
        collectionClass: HTMLCollectionOf<Element>,
        className: string
    ) {
        for (let index = 0; index < collectionClass.length; index++) {
            const element = collectionClass[index];
            setTimeout(() => {
                element.classList.remove(className);
            }, 0);
        }
    }
    /**
     * Log Out All Errors
     * @param step:number
     */
    public logOutAllErrors({
        errorEnumToTarget
    }: {
        errorEnumToTarget: AllErrorEnumTypes;
    }): void {
        if (this.errorList) {
            if (this.errorList[errorEnumToTarget]) {
                if (this.errorList[errorEnumToTarget].tags.length) {
                    this.errorList[errorEnumToTarget].tags.map((tag, i) => {
                        console.log(
                            `--------------🔥 Error (Hover Over Me)- ${
                                i + 1
                            } 👩🏽‍🚒 --------------`
                        );
                        console.log(tag.tag);
                    });
                }
            } else {
                throw new Error("Enum Not in Error List");
            }
        }
    }
    /**
     * Steps through every error one-by-one
     * @param step:number
     */
    public stepThrough({
        step,
        errorEnumToTarget
    }: {
        step: number;
        errorEnumToTarget: AllErrorEnumTypes;
    }): void {
        if (this.errorList) {
            if (this.errorList[errorEnumToTarget]) {
                if (this.errorList[errorEnumToTarget].tags.length) {
                    this._stepThroughErrors({
                        list: this.errorList[errorEnumToTarget].tags,
                        step
                    });
                }
            } else {
                throw new Error("Enum Not in Error List");
            }
        }
    }

    /**
     * Returns a Array of All Errors/warning associated with that Tag
     * @returns IReturnRationalizedData
     */
    protected getAllErrors(): IReturnRationalizedData {
        if (this.errorList) {
            const { totalError, errors } = this._rationalizeData({
                errorList: this.errorList,
                passedEnum: _getCorrespondingEnum(this.tag)
            });
            return { totalError, errors };
        } else {
            return { totalError: 0, errors: [] };
        }
    }
}
