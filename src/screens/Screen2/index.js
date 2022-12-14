import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {Title, TextBox, Button} from '../../components';
import {dataAtom} from '../../recoil/atoms';

const Screen2 = () => {
  const navigate = useNavigate();
  const [dataCalculate, setDataCalculate] = useRecoilState(dataAtom);

  const onClick = () => {
    navigate('/screen3');
  }

  const onTextChange = useCallback((event) => {
    event.preventDefault();
    setDataCalculate({...dataCalculate, number2: event.target.value});
  }, [dataCalculate.number2]);

  return (
    <div className="mx-auto w-1/2 bg-white py-24 px-10">
      <div className='mb-10 w-40 mx-auto'>
        <Title className='text-center' />
      </div>
      <div className='flex'>
        <div className='mr-3 flex-1'>
          <TextBox onChange={onTextChange} value={dataCalculate.number2} />
        </div>
        <div className='flex-1'>
          <Button onClick={onClick} className='h-full' disabled={dataCalculate.number2 === ''} />
        </div>
      </div>
    </div>
  );
}

export default Screen2;
