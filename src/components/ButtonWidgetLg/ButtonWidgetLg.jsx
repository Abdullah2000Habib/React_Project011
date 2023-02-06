import React from 'react';
import { Button } from './style';

export default function ButtonWidgetLg({type}) {
  return (
    <>
        <Button type={type}>{type}</Button>
    </>
  )
}
