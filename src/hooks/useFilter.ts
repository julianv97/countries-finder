import { useEffect, useState } from 'react';

const useFilter = (items: any[]) => {
  const [filter, setFilter] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (!items) return;
    const filtered = items.filter((item) => {
      const itemLower = item.name.common.toLowerCase();
      const filterLower = filter.toLowerCase();
      return itemLower.includes(filterLower);
    });

    setFilteredItems(filtered);
  }, [filter, items]);

  return { setFilter, filteredItems };
};

export default useFilter;
