import React from 'react';
import Header from "./Header";

function Layout({children}) {
    return (
        <div className="min-h-screen bg-black">
            <Header/>
            <main className="flex flex-col items-center justify-center py-2">
             {children}
            </main>
        </div>
    );
}

export default Layout;
