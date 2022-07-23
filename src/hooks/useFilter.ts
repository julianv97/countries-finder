import { useEffect, useState } from 'react';

const useFilter = (items: any[]) => {
  const [filter, setFilter] = useState<string>('');
  const [filterBy, setFilterBy] = useState<string>('name');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (f: any, fBy: any) => {
    setFilter(f);
    setFilterBy(fBy);
  };

  useEffect(() => {
    if (!items) return;
    const filtered = items.filter((item) => {
      const itemLower =
        filterBy === 'name' ? item.name.common.toLowerCase() : item[filterBy].toLowerCase();
      const filterLower = filter.toLowerCase();
      return itemLower.includes(filterLower);
    });

    setFilteredItems(filtered);
  }, [filter, items]);

  return { handleFilter, filteredItems };
};

export default useFilter;
