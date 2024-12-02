import { useSearchContext } from '../context/search/SearchContext';

const InputDate = ({ name, label }) => {
  const { handleInputChange } = useSearchContext();

  return (
    <div className='flex justify-center items-start flex-col gap-1'>
      <div className='text-gray-800 font-semibold'>{label}</div>
      <input
        type='date'
        name={name}
        onChange={handleInputChange}
        className='border-2 border-gray-300 w-full rounded-md px-3 py-1.5 focus:border-blue-300 focus:outline-none transition-all'
      />
    </div>
  );
};
export default InputDate;
