import React, {useCallback, useState} from 'react';
import {useRecoilState} from 'recoil';

import {Label, TextBox, Button, DropDown} from '../../components';
import {dataAtom} from '../../recoil/atoms';

const Screen3 = () => {
  const [dataCalculate, setDataCalculate] = useRecoilState(dataAtom);
  const [operation, setOperation] = useState({
    number2: dataCalculate.number2,
    operator: dataCalculate.operator,
  });

  const onClick = () => {
    setDataCalculate({
      ...dataCalculate,
      ...operation
    });
  }

  const onTextChange = useCallback((event) => {
    event.preventDefault();
    setOperation({...operation, number2: event.target.value});
  }, [operation]);

  const onDropDownChange = useCallback((operator) => {
    setOperation({...operation, operator});
  }, [operation]);

  const renderResult = (number1, operation, number2) => {
    switch(operation) {
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case '/':
        return number1 / number2;
      case '+':
      default:
        return number1 + number2;
    }
  }

  return (
    <div className="mx-auto w-1/2 bg-white py-24 px-10">
      <div className='mb-8 flex items-center justify-center'>
        <Label text={dataCalculate?.number1} />
        <Label text={dataCalculate?.number2} />
        <Label text={dataCalculate.operator} />
      </div>
      <label className='mb-8 flex justify-center text-5xl font-extralight'>=</label>
      <p className='text-eton-blue text-5xl font-extralight mb-40 text-center'>{renderResult(+dataCalculate?.number1, dataCalculate.operator, +dataCalculate?.number2)}</p>
      <div className='flex'>
        <div className='mr-3'>
          <DropDown onClick={onDropDownChange} operator={operation.operator} />
        </div>
        <div className='mr-3'>
          <TextBox onChange={onTextChange} value={operation?.number2} />
        </div>
        <div className='flex-1 h-auto'>
          <Button onClick={onClick} className='h-full' name='Add Operation' disabled={operation.number2 === ''} />
        </div>
      </div>
    </div>
  );
}

export default Screen3;
