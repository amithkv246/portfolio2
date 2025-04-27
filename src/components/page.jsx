import React from 'react';

function Page() {
    return (
        <>
            <div className='m-3 rounded-5' style={{ backgroundColor: "#f4f4f4" }}>
                <nav className='p-5'>
                    <header className='d-flex justify-content-between'>
                        <div className='d-flex gap-2'>
                            <div className='d-flex gap-1'>
                                <p>kawsarvy.design@gmail.com</p>
                                <button className='btn btn-light rounded-4'>copy</button>
                            </div>
                            <div><button className='btn btn-light rounded-4'>cv</button></div>
                        </div>
                        <div>
                            <p>linkedin / dribble / instagram</p>
                        </div>
                    </header>
                </nav>
            </div>
        </>
    );
}

export default Page;