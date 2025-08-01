
'use client';

import { useState, useEffect } from 'react';

const names = [
  'Bruna S.', 'Carlos M.', 'Juliana T.', 'Ricardo P.', 'Fernanda A.',
  'Lucas G.', 'Mariana C.', 'Gustavo L.', 'Beatriz R.', 'Thiago F.'
];

const plans = [
  'comprou o Plano Básico',
  'comprou o Plano Completo'
];

const SalesNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({ name: '', plan: '' });

  useEffect(() => {
    const showRandomNotification = () => {
      // Hide any existing notification first
      setIsVisible(false);

      // Wait a bit before showing the new one to allow for fade-out
      setTimeout(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomPlan = plans[Math.floor(Math.random() * plans.length)];
        setNotification({ name: randomName, plan: randomPlan });
        setIsVisible(true);

        // Hide notification after 4 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 4000);
      }, 500); // Small delay to reset animation

    };

    const scheduleNextNotification = () => {
        showRandomNotification();
        const randomInterval = Math.random() * (40000 - 20000) + 20000; // 20-40 seconds
        setTimeout(scheduleNextNotification, randomInterval + 4000); // Add the 4s display time
    }

    // Start the first notification after a short delay
    const initialTimeout = setTimeout(scheduleNextNotification, 5000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 p-4 rounded-lg shadow-lg text-white transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: '#28a745' }}
    >
      <p className="font-bold">{notification.name}</p>
      <p>{notification.plan}</p>
    </div>
  );
};

export default SalesNotification;
