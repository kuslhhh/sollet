"use client";

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardTitle
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import Balance from "./balance";
import Airdrop from "./airdrop";
import Image from "next/image";

const Wrapper = () => {
    const [activeTab, setActiveTab] = useState<string>("balance");

    // Handler to reset states or perform actions on tab change
    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <Card className="py-5 shadow-xl hover:shadow-black/15">
            <div className="flex items-center justify-center mb-4">
                <div className="relative w-8 h-8 mr-2">
                    <Image
                        src="/favicon.ico"
                        alt="Logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <CardTitle className="text-xl font-bold">SOLLET</CardTitle>
            </div>
            <CardContent>
                <Tabs
                    defaultValue="balance"
                    value={activeTab}
                    onValueChange={handleTabChange}
                    className="w-full md:w-[500px]"
                >
                    <TabsList className="grid grid-cols-2 w-full">
                        <TabsTrigger value="balance">Balance</TabsTrigger>
                        <TabsTrigger value="airdrop">Airdrop</TabsTrigger>
                    </TabsList>
                    <TabsContent value="balance">
                        {activeTab === "balance" && <Balance />}
                    </TabsContent>
                    <TabsContent value="airdrop">
                        {activeTab === "airdrop" && <Airdrop />}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}

export default Wrapper;
