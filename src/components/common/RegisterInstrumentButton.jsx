import { useState } from 'react';
import { InstrumentForm } from '../instrument/InstrumentForm';

export const RegisterInstrumentButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className=" add-button">
            <button className="custom-button" onClick={() => setIsModalOpen(true)}>
                Agregar Producto
            </button>
            <InstrumentForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

