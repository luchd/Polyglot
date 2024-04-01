import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('main.tsx', () => { 
  it('renders the App component', () => {
    render(<App />);
    expect(screen.getByText('Hello, Vite + React + TypeScript!')).toBeInTheDocument()
  });
})