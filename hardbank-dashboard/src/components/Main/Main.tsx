import React from 'react';
import './Main.css';
import PriceTicker from '../PriceTicker/PriceTicker';
import Header from '../Header/Header';
import Card from '../Card/Card';

const Main = () => (
  <div className="Main flex-1 h-full overflow-x-hidden overflow-y-auto">
    <Header />
    <div className="grid grid-cols-4 gap-8 p-4">
      <Card>
        <PriceTicker title="SLP to USD" />
      </Card>
      <Card>
        <PriceTicker title="SLP to PHP" showButton={true} showSecondPrice={true} />
      </Card>
    </div>
  </div>
);

export default Main;
