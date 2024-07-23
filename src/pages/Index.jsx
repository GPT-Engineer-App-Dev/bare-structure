import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [colors, setColors] = useState({
    primary: "bg-primary",
    secondary: "bg-secondary",
    background: "bg-background",
    text: "text-foreground",
  });

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  const changeColors = () => {
    setColors({
      primary: generateRandomColor(),
      secondary: generateRandomColor(),
      background: generateRandomColor(),
      text: generateRandomColor(),
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${colors.background}`} style={{color: colors.text}}>
      <header className="p-4" style={{backgroundColor: colors.primary}}>
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
          <Button onClick={changeColors}>Get Started</Button>
        </Card>
      </main>

      <footer className="p-4 text-center" style={{backgroundColor: colors.secondary}}>
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;