import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {Title, TextBox, Button} from '../../components';
import {dataAtom} from '../../recoil/atoms';

const Screen1 = () => {
  const navigate = useNavigate();
  const [dataCalculate, setDataCalculate] = useRecoilState(dataAtom);

  const onClick = () => {
    navigate('screen2');
  }

  const onTextChange = useCallback((event) => {
    event.preventDefault();
    setDataCalculate({...dataCalculate, number1: event.target.value});
  }, [dataCalculate.number1]);

  return (
    <div className="max-w-sm mx-auto bg-white py-24 px-10">
      <div className='mb-10 w-1/2 mx-auto'>
        <Title className='text-center' />
      </div>
      <div className='mb-3'>
        <TextBox onChange={onTextChange} value={dataCalculate.number1} />
      </div>
      <Button onClick={onClick} disabled={dataCalculate.number1 === ''} />
    </div>
  );
}

export default Screen1;
