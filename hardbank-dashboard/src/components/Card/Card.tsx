import React, { FC, ReactNode } from 'react';
import './Card.css';
import { TrendingUpIcon } from '@heroicons/react/outline'


interface CardProps {
  children?: ReactNode
}

const Card = ({children}:CardProps) => (
  <div className="flex items-center justify-between p-4 bg-gray-light rounded-md dark:bg-darker">
    {children}
    <TrendingUpIcon className="h-16 w-16 p-2 transition-colors text-gray bg-primary-50 focus:outline-none focus:bg-primary-100 focus:ring-primary-darker" />
  </div>
);

export default Card;
