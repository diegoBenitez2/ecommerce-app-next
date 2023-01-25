import Head from 'next/head';
import Layout from '@containers/Layout';
import FilterProductsPanel from '@components/FilterProductsPanel';
import Button from '@atoms/Button/Button';
import { useState } from 'react';

export default function Home() {

  const [ openFilter, setOpenFilter ] = useState(false);
  return (
    <>
      <Head>
        <title>Ecommerce | Products</title>
      </Head>
      <Layout>
        <div className='p-5 mx-auto text-center border'>
          <h1 className='mb-7 text-3xl md:text-4xl'>View all products</h1>
          <div className='flex justify-evenly'>
            <Button
              text={'Sorting'}
              style={'primary'}
              size={'small'}
              iconColor={'#000'} />
            <Button
              text={'Filtering'}
              style={'primary'}
              size={'small'}
              iconColor={'#000'} 
              onclick={() => setOpenFilter(true)}/>
          </div>
          <FilterProductsPanel 
            open={openFilter} 
            toggleOpen={setOpenFilter}
          />
        </div>
      </Layout>
    </>
  );
}
