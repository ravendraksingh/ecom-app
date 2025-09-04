"use client";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect, useState } from "react";

const UserDetails = () => {
  const [username, setUsername] = useState();
  const { appData, setAppData } = useContext(AppContext);

  useEffect(() => {
    if (appData != null) {
      const user = appData.user;
      if (user?.authenticated) {
        setUsername(user?.email);
      }
    }
  }, [appData]);

  return (
    <div className="me-3 text-nowrap text-muted-foreground">
      {username && `Hi, ${username}`}
    </div>
  );
};

export default UserDetails;
