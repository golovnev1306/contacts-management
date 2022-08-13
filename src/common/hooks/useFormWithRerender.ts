import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Form } from 'antd';
import { isEqual } from 'lodash';

/**
 * form из antd сам по себе не обновляется, когда изменяются значения его полей, что не позволяет
 *  кидать его в deps, поэтому в компонент Form передается onValuesChange={doFormRerender}
 *  Так же хук позволяет отслеживать isDirty формы
 * */
const useFormWithRerender = (depsForReInit?: any) => {
  const [form] = Form.useForm();
  const [formRerender, setFormRerender] = useState<number>(0);
  const [initialValues, setInitialValues] = useState();

  const doFormRerender = useCallback(() => {
    setFormRerender((prev) => prev + 1);
  }, [setFormRerender]);

  const resetForm = useCallback(() => {
    form.resetFields();
    doFormRerender();
  }, [doFormRerender, form]);

  const submitFormWithReset = useCallback(() => {
    form.validateFields()
      .then(() => {
        form.submit();
        setTimeout(resetForm);
      });
  }, [doFormRerender, form]);

  useEffect(() => {
    resetForm();
    setInitialValues(form.getFieldsValue());
  }, [form, depsForReInit, resetForm]);

  const isDirty = useMemo(
    () => !isEqual(form.getFieldsValue(), initialValues),
    [formRerender, initialValues],
  );

  return {
    form, doFormRerender, formRerender, isDirty, resetForm, submitFormWithReset,
  };
};

export default useFormWithRerender;
