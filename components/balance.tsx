"use client";

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { getWalletBalance } from '@/lib/logic';
import { PublicKey } from '@solana/web3.js';

const Balance = () => {
  const [balance, setBalance] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null); // State for error messages

  const balanceHandler = async () => {
    if (address) {
      try {
        const balance = await getWalletBalance(address); // Address is passed as a string
        setBalance(balance.toString());
        setError(null); // Clear any previous error
      } catch (error) {
        console.error("Error fetching balance:", error);
        setBalance(""); // Clear balance on error
        setError("Invalid address or unable to fetch balance."); // Set error message
      }
    } else {
      setError("Please enter a valid wallet address."); // Handle empty address
    }
  };

  return (
    <div className="w-full justify-center items-center flex flex-col gap-5">
      <Input
        className="mt-3"
        placeholder="Enter wallet address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <div className="flex flex-row gap-2 w-full">
        <Button className="w-full hover:" onClick={balanceHandler}>
          Get Balance
        </Button>
        <Button className="w-full" onClick={() => setAddress("")} variant="outline">
          Clear
        </Button>
      </div>
      {/* Display error message below buttons */}
      {error && <p className="text-[#ff3333] font-bold text-center mt-2">{error}</p>}
      {/* Display balance if available */}
      {balance && (
        <div className="flex flex-row gap-2 w-full">
          <p className="text-center">Balance: {balance}</p>
        </div>
      )}
    </div>
  );
};

export default Balance;
