import React, { memo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import {Loading} from '../components'

const Screen1 = React.lazy(() => import('../screens/Screen1'));
const Screen2 = React.lazy(() => import('../screens/Screen2'));
const Screen3 = React.lazy(() => import('../screens/Screen3'));

const MainRoutes = () => {
	return (
		<div className='flex flex-1 bg-neutral-200 h-full'>
            <Routes>
                <Route path='/' element={
                    <Suspense fallback={<Loading />}>
                        <Screen1 />
                    </Suspense>
                } />
                <Route path='/screen2' element={
                    <Suspense fallback={<Loading />}>
                        <Screen2 />
                    </Suspense>
                } />
                <Route path='/screen3' element={
                    <Suspense fallback={<Loading />}>
                        <Screen3 />
                    </Suspense>
                } />
            </Routes>
        </div>
	);
}

export default memo(MainRoutes);
