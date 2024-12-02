import ContactDetails from './components/ContactDetails';
import ContactSearchForm from './components/ContactSearchForm';

function App() {
  return (
    <>
      <div className='space-y-4 p-4'>
        <div className='text-2xl font-semibold'>Choose a contact</div>
        <ContactSearchForm />
        <ContactDetails />
      </div>
    </>
  );
}

export default App;
