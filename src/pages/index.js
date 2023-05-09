import Head from 'next/head';
import Layout from '@containers/Layout';
import FilterProductsPanel from '@components/FilterProductsPanel';
import Button from '@atoms/Button/Button';
import ProductCard  from '@atoms/ProductCard/ProductCard';
import { useState } from 'react';

export default function Home() {

  const [ openFilter, setOpenFilter ] = useState(false);
  return (
    <>
      <Head>
        <title>Ecommerce | Products</title>
      </Head>
      <Layout>
        <div className='p-5 mx-auto text-center'>
          <h1 className='mb-7 text-3xl md:text-4xl'>View all products</h1>
          <div className='flex justify-between'>
            <Button
              text={'Filtering'}
              style={'primary'}
              size={'medium'}
              iconColor={'#000'} 
              onclick={() => setOpenFilter(true)}/>
          </div>
          <FilterProductsPanel 
            open={openFilter} 
            toggleOpen={setOpenFilter}
          />
        </div>
        <section className='bg-white p-6 grid gap-3 grid-cols-fit grid-rows-fit'>
          {
            [1,2,3,4,5,6,7,8,9,10,11,12].map((_, idx) => (
              <ProductCard key={idx} />
              ))
            }
        </section>
      </Layout>
    </>
  );
}
