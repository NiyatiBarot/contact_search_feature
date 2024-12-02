import { useEffect, useState } from 'react';
import { SearchContext } from './SearchContext';

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [searchForm, setSearchForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchForm({ ...searchForm, [name]: value });
  };

  const filterContacts = () => {
    const filtered = contacts.filter((contact) => {
      for (const key in searchForm) {
        const searchValue = searchForm[key]?.toString()?.toLowerCase().trim(); // searched value
        let contactValue; // value of the contact
        
        if (key === 'street' || key === 'city' || key === 'state' || key === 'zip') {
          contactValue = contact.address[key]?.toString()?.toLowerCase().trim();
        } else {
          contactValue = contact[key]?.toString()?.toLowerCase().trim();
        }

        // If the search field is not empty and doesn't match, exclude the contact
        if (searchValue && !contactValue?.includes(searchValue)) {
          return false;
        }
      }
      return true;
    });

    return filtered;
  };

  useEffect(() => {
    setFilteredContacts(filterContacts());
  }, [searchForm, contacts]);

  return (
    <SearchContext.Provider
      value={{
        searchForm,
        handleInputChange,
        contacts,
        setContacts,
        filteredContacts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
