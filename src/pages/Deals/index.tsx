import React, { useEffect, useState } from 'react';
import DealList, { Deal } from '../../components/templates/DealsList';

const DealListPage: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);

  // Replace this with your actual data fetching logic
  useEffect(() => {
    const fetchDeals = async () => {
      const fetchedDeals = await fetchDealsFromServer();
      setDeals(fetchedDeals);
    };

    fetchDeals();
  }, []);

  return <DealList deals={deals} />;
};

export default DealListPage;

// Replace this function with actual API call
async function fetchDealsFromServer(): Promise<Deal[]> {
  // simulate API call
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: '1',
            imageUrl: 'https://example.com/image1.jpg',
            title: 'Deal 1',
            price: '$50',
            oldPrice: '$60',
          },
          {
            id: '2',
            imageUrl: 'https://example.com/image2.jpg',
            title: 'Deal 2',
            price: '$70',
            oldPrice: '$80',
          },
        ]),
      2000
    )
  );
}
