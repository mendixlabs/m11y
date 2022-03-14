import { _compareCount, _compareErrorLength } from '../utils/helpers';
import { GetAllErrors_TYPE, ReturnErrorList } from '../utils/types';

export const getAllErrors = ({ allCurrentClasses }: GetAllErrors_TYPE) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Col_Class,
    Row_Class,
    Menu_Class,
    Input_Class,
    Button_Class,
    TextArea_Class,
    DataView_Class,
  } = allCurrentClasses;

  const a_Errors = A_Class?.getAllErrorsAndScan();
  const h_Errors = H_Class?.getAllErrorsAndScan();
  const row_Errors = Row_Class?.getAllErrorsAndScan();
  const img_Errors = Img_Class?.getAllErrorsAndScan();
  const col_Errors = Col_Class?.getAllErrorsAndScan();
  const input_Errors = Input_Class?.getAllErrorsAndScan();
  const button_Errors = Button_Class?.getAllErrorsAndScan();
  const menuClass_Errors = Menu_Class?.getAllErrorsAndScan();
  const textArea_Errors = TextArea_Class?.getAllErrorsAndScan();
  const dataView_Errors = DataView_Class?.getAllErrorsAndScan();
  const response: ReturnErrorList[] = [
    {
      tag: H_Class?.tag,
      errors: h_Errors?.errors,
      count: h_Errors?.totalError,
    },
    {
      tag: A_Class?.tag,
      errors: a_Errors?.errors,
      count: a_Errors?.totalError,
    },
    {
      tag: Row_Class?.tag,
      errors: row_Errors?.errors,
      count: row_Errors?.totalError,
    },
    {
      tag: Img_Class?.tag,
      errors: img_Errors?.errors,
      count: img_Errors?.totalError,
    },
    {
      tag: Col_Class?.tag,
      errors: col_Errors?.errors,
      count: col_Errors?.totalError,
    },
    {
      tag: Input_Class?.tag,
      errors: input_Errors?.errors,
      count: input_Errors?.totalError,
    },
    {
      tag: Button_Class?.tag,
      errors: button_Errors?.errors,
      count: button_Errors?.totalError,
    },
    {
      tag: Menu_Class?.tag,
      errors: menuClass_Errors?.errors,
      count: menuClass_Errors?.totalError,
    },
    {
      tag: TextArea_Class?.tag,
      errors: textArea_Errors?.errors,
      count: textArea_Errors?.totalError,
    },
    {
      tag: DataView_Class?.tag,
      errors: dataView_Errors?.errors,
      count: dataView_Errors?.totalError,
    },
  ];
  const sortListEmptyAtBottom = response.sort(_compareErrorLength);
  const sortListMostErrorsAtTop = sortListEmptyAtBottom.sort(_compareCount);
  return sortListMostErrorsAtTop;
};
