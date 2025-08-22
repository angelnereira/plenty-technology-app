import React from "react";

const MyPage: React.FC = () => {
  return (
    <iframe
      src="public/index.html" // Ruta relativa a la carpeta `public`
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default MyPage;
