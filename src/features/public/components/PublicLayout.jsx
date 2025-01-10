import React, { Suspense } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';
import PageLoading from '../../../components/PageLoading';

const PublicLayout = () => {

  return (
    <div className="flex flex-col min-h-screen p-5">
      <Header />
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      <Footer />
    </div>
  );
}

export default PublicLayout