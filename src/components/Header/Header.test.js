import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from "@testing-library/react";
import Header from './Header';
import { BrowserRouter } from "react-router-dom";

describe('Header', () => {
  it('should have a logo', () => {
    const { getByText } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
  )
    expect(getByText('Beast of Bourbon')).toBeInTheDocument();
    expect(getByText('Welcome, Bourbon Lover!')).toBeInTheDocument();
    expect(getByText('View Favorites')).toBeInTheDocument();
  });
})
