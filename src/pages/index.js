import { useState } from 'react';
import Head from 'next/head';
import Layout from '@containers/Layout';
import FilterProductsPanel from '@molecules/FilterProducts/FilterProducts';
import Button from '@atoms/Button/Button';
import ProductCard  from '@atoms/ProductCard/ProductCard';
import Photo from '@assets/images/Photo.png';

export default function Home() {

  const [ openFilter, setOpenFilter ] = useState(false);
  return (
    <>
      <Head>
        <title>Ecommerce | Products</title>
      </Head>
      <Layout>
        <div className='p-5 mx-auto text-center md:bg-white md:px-[80px]'>
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
        <section className='bg-white p-6 md:px-[80px] grid gap-3 grid-cols-fit md:grid-cols-4 grid-rows-fit'>
          {
            [1,2,3,4,5,6].map((_, idx) => (
              <ProductCard
                key={idx}
                urlImage={Photo}
                title={'The Dandy chair'}
                price={'165'}/>
              ))
            }
        </section>
      </Layout>
    </>
  );
}
