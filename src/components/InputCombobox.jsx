import { useSearchContext } from '../context/search/SearchContext';

// eslint-disable-next-line react/prop-types
const InputCombobox = ({ name, label }) => {
  const { contacts, handleInputChange } = useSearchContext();

  return (
    <div className='flex justify-center items-start flex-col gap-1'>
      <label className='text-gray-800 font-semibold' htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        defaultValue=''
        onChange={handleInputChange}
        className='border-2 border-gray-300 w-full rounded-md px-3 py-1.5 focus:border-blue-300 focus:outline-none transition-all'
      >
        <option value=''>Select {label}</option>
        {contacts.map(
          (contact) =>
            contact?.address?.[name] && (
              <option key={contact.id} value={contact.address[name]}>
                {contact.address[name]}
              </option>
            )
        )}
      </select>
    </div>
  );
};

export default InputCombobox;
