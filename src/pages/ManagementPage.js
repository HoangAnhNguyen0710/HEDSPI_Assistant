import React from 'react'
import PageLayout from '../layouts/PagesLayout';

const ManagementPage = () => {
    const ManagementContent = (
        <>
          <div className="min-h-screen py-20">
            <p className="">Management Page</p>
          </div>
        </>
      );
    
      return <PageLayout page={ManagementContent} />;
}

export default ManagementPage