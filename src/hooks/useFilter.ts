import { useEffect, useState } from 'react';

const useFilter = (items: any[]) => {
  const [filter, setFilter] = useState('');
  const [filterBy, setFilterBy] = useState('name');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (f: any, fBy: any) => {
    setFilter(f);
    setFilterBy(fBy);
  };

  useEffect(() => {
    if (!items) return;
    const filtered = items.filter((item) => {
      const itemLower = item[filterBy].toLowerCase();
      const filterLower = filter.toLowerCase();
      return itemLower.includes(filterLower);
    });

    setFilteredItems(filtered);
  }, [filter, items]);

  return { handleFilter, filteredItems };
};

export default useFilter;
