// components/NavBar.tsx
'use client';  // Necessário se você estiver usando Next.js 13 e Server Components

import * as React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">My Website</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
