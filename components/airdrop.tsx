"use client";

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { airdrop } from '@/lib/logic'; // Make sure to import your airdrop function
import { Card, CardContent, CardTitle } from "@/components/ui/card"; // Import Card components

const Airdrop = () => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionSignature, setTransactionSignature] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // State for error messages

  const airdropHandler = async () => {
    if (recipientAddress && amount) {
      try {
        const amountInSOL = parseFloat(amount);
        if (isNaN(amountInSOL) || amountInSOL <= 0) {
          setError("Please enter a valid amount.");
          return;
        }
        const signature = await airdrop(recipientAddress, amountInSOL);
        setTransactionSignature(signature);
        setError(null); // Clear any previous error
      } catch (error) {
        console.error("Error during airdrop:", error);
        setTransactionSignature(null); // Clear transaction signature on error
        setError("Failed to send airdrop. Please try again."); // Set error message
      }
    } else {
      setError("Please enter both recipient address and amount."); // Handle empty fields
    }
  };

  return (
    
        <div className="w-full flex flex-col gap-5">
          <Input
            className="mt-3"
            placeholder="Enter recipient address"
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
          <Input
            className=""
            placeholder="Enter amount (SOL)"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex flex-row gap-2 w-full">
            <Button className="w-full" onClick={airdropHandler}>
              Send Airdrop
            </Button>
            <Button className="w-full" onClick={() => { setRecipientAddress(""); setAmount(""); }} variant="outline">
              Clear
            </Button>
          </div>
          {/* Display error message below buttons */}
          {error && <p className="text-[#ff3333] font-bold text-center mt-2">{error}</p>}
          {/* Display transaction signature if available */}
          {transactionSignature && (
            <div className="flex flex-row gap-2 w-full">
              <p className="text-center">Transaction Signature: {transactionSignature}</p>
            </div>
          )}
        </div>
      
  );
};

export default Airdrop;
