import { FC, memo } from 'react';
import Contact from '../../../../common/types/entities/Contact';
import { Form, Input, Modal } from 'antd';
import InputMask from 'react-input-mask';
import useFormWithRerender from '../../../../common/hooks/useFormWithRerender';

type ActionModalProps = {
  onSubmit: (values: Contact) => void
  visible: boolean
  onClose: VoidFunction
  title: string
  contact?: Contact | null
}

const ActionModal: FC<ActionModalProps> = ({
   contact,
   onSubmit,
   onClose,
   visible,
   title,
}) => {
  const { form, doFormRerender, isDirty, submitFormWithReset } = useFormWithRerender(contact);

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      title={title}
      onOk={submitFormWithReset}
      okButtonProps={{
        disabled: !isDirty,
      }}
    >
      <Form
        form={form}
        layout={'vertical'}
        onFinish={onSubmit}
        initialValues={contact || {}}
        onValuesChange={doFormRerender}
      >
        <Form.Item rules={[{ required: true }]} name={'name'} label={'Name'}>
          <Input placeholder={'Input name'} />
        </Form.Item>
        <Form.Item rules={[{ type: 'email' }]} name={'email'} label={'Email'}>
          <Input placeholder={'Input email'} />
        </Form.Item>
        <Form.Item
          name={'phone'}
          label={'Phone'}
        >
          <InputMask placeholder={'Input phone'} mask="+7 999 999 99 99">
            <Input />
          </InputMask>
        </Form.Item>
        <Form.Item
          name="photo"
          label={'Photo'}
        >
          <Input placeholder={'Insert link here'} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(ActionModal) as typeof ActionModal;