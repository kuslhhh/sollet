"use client";

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { getWalletBalance } from '@/lib/logic';

const Balance = () => {
  const [balance, setBalance] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null); 

  const balanceHandler = async () => {
    if (address) {
      try {
        const balance = await getWalletBalance(address); 
        setBalance(balance.toString());
        setError(null); 
      } catch (error) {
        console.error("Error fetching balance:", error);
        setBalance(""); 
        setError("Invalid address or unable to fetch balance."); 
      }
    } else {
      setError("Please enter a valid wallet address."); 
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
      
      {error && <p className="text-[#ff3333] font-bold text-center mt-2">{error}</p>}
      {balance && (
        <div className="flex flex-row gap-2 w-full">
          <p className="text-center">Balance: {balance}</p>
        </div>
      )}
    </div>
  );
};

export default Balance;
