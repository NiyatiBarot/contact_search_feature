import InputCombobox from './InputCombobox';
import InputDate from './InputDate';
import InputText from './InputText';

const ContactSearchForm = () => {
  return (
    <>
      <div className='flex justify-between items-start px-4 py-6'>
        <div className='grid grid-cols-3 gap-4'>
          <InputText name={'firstName'} label={'First name'} />
          <InputText name={'lastName'} label={'Lase name'} />
          <InputDate name={'dob'} label={'Date of birth'} type={'date'} />
          <InputText name={'email'} label={'Email address'} type={'email'} />
          <InputText name={'phone'} label={'Phone number'} type={'number'} />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3'>
            <InputText name={'street'} label={'Street'} />
          </div>
          <InputText name={'city'} label={'City'} />
          <InputCombobox name={'state'} label={'State'} />
          <InputText name={'zip'} label={'Zip'} />
        </div>
      </div>
    </>
  );
};
export default ContactSearchForm;
