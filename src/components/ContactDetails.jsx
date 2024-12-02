import { useState, useEffect } from 'react';
import { useSearchContext } from '../context/search/SearchContext';

const ContactDetails = () => {
  const { filteredContacts, setContacts } = useSearchContext();

  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 10; // Number of contacts per page

  const fetchContacts = async () => {
    try {
      const res = await fetch('/src/data/contacts.json');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  return (
    <>
      <div className='px-4'>
        <div className='relative overflow-x-auto shadow-md'>
          <table className='w-full divide-y text-left text-gray-600'>
            <thead className='text-md text-gray-700 uppercase bg-slate-100'>
              <tr className='divide-x'>
                <th scope='col' className='px-6 py-2'>
                  Name
                </th>
                <th scope='col' className='px-6 py-2'>
                  DOB
                </th>
                <th scope='col' className='px-6 py-2'>
                  Address
                </th>
                <th scope='col' className='px-6 py-2'>
                  City
                </th>
                <th scope='col' className='px-6 py-2'>
                  State
                </th>
                <th scope='col' className='px-6 py-2'>
                  Zip
                </th>
                <th scope='col' className='px-6 py-2'>
                  Email
                </th>
                <th scope='col' className='px-6 py-2'>
                  Phone
                </th>
              </tr>
            </thead>

            <tbody>
              {currentContacts.map((contact) => {
                return (
                  <tr key={contact.id} className='bg-white border-b divide-x hover:bg-gray-100 text-sm'>
                    <td className='px-6 py-1'>
                      {contact.firstName} {contact.lastName}
                    </td>
                    <td className='px-6 py-1'>{contact.dob}</td>
                    <td className='px-6 py-1'>{contact.address.street}</td>
                    <td className='px-6 py-1'>{contact.address.city}</td>
                    <td className='px-6 py-1'>{contact.address.state}</td>
                    <td className='px-6 py-1'>{contact.address.zip}</td>
                    <td className='px-6 py-1'>{contact.email}</td>
                    <td className='px-6 py-1'>{contact.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-end mt-4'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md bg-blue-500'
          >
            Previous
          </button>

          <span className='px-4 py-2 text-gray-700'>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-gray-300 text-gray-700 rounded-r-md bg-blue-500'
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
