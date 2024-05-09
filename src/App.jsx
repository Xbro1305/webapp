import React from "react";
import { Routes, Route } from "react-router-dom";
import { Guild } from "./Pages/Guild/Guild";
import { Profile } from "./Pages/Profile/Profile";
import { Frens } from "./Pages/Frens/Frens";
import { Contest } from "./Pages/Contest/Contest";
import { Guilds } from "./Pages/Guilds/Guilds";

export const App = () => {
  return (
    <Routes>
      <Route path="/guild" element={<Guild />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/frens" element={<Frens />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/guilds" element={<Guilds />} />
    </Routes>
  );
};
