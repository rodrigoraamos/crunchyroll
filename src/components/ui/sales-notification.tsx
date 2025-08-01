
'use client';

import { useState, useEffect } from 'react';

const firstNames = ['Ana', 'Bruno', 'Carla', 'Diego', 'Eduarda', 'Felipe', 'Gabriela', 'Heitor', 'Isabela', 'João', 'Larissa', 'Marcos', 'Natália', 'Otávio', 'Patrícia', 'Rafael', 'Sofia', 'Thiago', 'Vanessa', 'William'];
const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 'Nunes', 'Mendes', 'Vieira', 'Barbosa'];
const plans = ['Plano Básico', 'Plano Completo'];

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const SalesNotification = () => {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({ name: '', plan: '' });
  const [usedNames, setUsedNames] = useState<string[]>([]);

  useEffect(() => {
    const generateNotification = () => {
      let fullName = '';
      let availableNames = firstNames.filter(name => !usedNames.includes(name));

      if (availableNames.length === 0) {
        availableNames = [...firstNames];
        setUsedNames([]);
      }
      
      const firstName = getRandomElement(availableNames);
      const lastName = getRandomElement(lastNames);
      fullName = `${firstName} ${lastName}`;
      
      setUsedNames(prev => [...prev, firstName]);

      const plan = getRandomElement(plans);
      setNotification({ name: fullName, plan });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000); // Fica visível por 5 segundos
    };

    const initialTimeout = setTimeout(() => {
        generateNotification();
        const interval = setInterval(() => {
            generateNotification();
        }, 20000); // Gera uma nova notificação a cada 20 segundos

        return () => clearInterval(interval);
    }, 10000)


    return () => clearTimeout(initialTimeout);
  }, [usedNames]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-lg bg-green-600 px-6 py-4 text-white shadow-lg transition-opacity duration-500 animate-in fade-in-0 slide-in-from-bottom-5">
      <p className="font-bold">{notification.name}</p>
      <p className="text-sm">acabou de comprar o {notification.plan}!</p>
    </div>
  );
};

export default SalesNotification;
