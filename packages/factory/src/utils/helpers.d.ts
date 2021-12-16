import { ErrorType, IRationalize, ATagErrorEnum, HTagErrorEnum, MenuErrorEnum, ImgTagErrorEnum, ColTagErrorEnum, descriptionsType, InputTagErrorEnum, DataViewErrorEnum, ButtonTagErrorEnum, ReturnErrorList, AllErrorEnumTypes, CB_TEST_TYPE } from "./types";
export declare const _compareErrorLength: (a: ReturnErrorList, b: ReturnErrorList) => 1 | -1 | 0;
export declare const _compareCount: (a: ReturnErrorList, b: ReturnErrorList) => 1 | -1 | 0;
export declare const removeDuplicates: (errorList: ErrorType[]) => ErrorType[];
export declare const _getCorrespondingEnum: (tag: string) => typeof ATagErrorEnum | typeof ButtonTagErrorEnum | typeof ImgTagErrorEnum | typeof ColTagErrorEnum | typeof HTagErrorEnum | typeof InputTagErrorEnum | typeof MenuErrorEnum | typeof DataViewErrorEnum | undefined;
export declare const rationalizeTagInformation: (tag: string) => IRationalize;
export declare const _descriptions: (r: AllErrorEnumTypes) => descriptionsType;
export declare const cbTests: CB_TEST_TYPE[];
//# sourceMappingURL=helpers.d.ts.map