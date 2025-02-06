// pages/index.tsx
import * as React from 'react';
import NavBar from '../components/navbar';  // Caminho para o componente NavBar

const HomePage: React.FC = () => {
    return (
        <div>
            <NavBar />  {/* Importa e usa o componente NavBar */}
            <h1 className="text-center text-4xl mt-8">Welcome to My Website</h1>
            <p className="text-center mt-4">This is a simple website using Next.js and Tailwind CSS.</p>
        </div>
    );
};

export default HomePage;
