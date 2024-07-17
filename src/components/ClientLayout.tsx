"use client";

import React, { ReactNode } from 'react';
import ModeBar from './ModeBar';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
    return (
        <div>
            <ModeBar />
            {children}
        </div>
    );
};

export default ClientLayout;
