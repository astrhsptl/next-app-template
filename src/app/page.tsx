'use client';

import { CSI } from '@/shared';
import React, { useState } from 'react';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const [first, setfirst] = useState(document.cookie);
  const [couter, setcouter] = useState(0);

  return (
    <main>
      <p>{first}</p>
      <button
        onClick={() => {
          CSI.invalidate();
          setfirst(document.cookie);
        }}
      >
        Invalidate
      </button>
      <button
        onClick={() => {
          console.log(CSI.getCredential('some0'));
        }}
      >
        get
      </button>
      <button
        onClick={() => {
          setcouter(() => couter + 1);
          CSI.setCredential(`some${couter}`, 'some', {
            path: '/',
            samesite: 'strict',
          });
          setfirst(document.cookie);
        }}
      >
        UPD
      </button>
    </main>
  );
};
