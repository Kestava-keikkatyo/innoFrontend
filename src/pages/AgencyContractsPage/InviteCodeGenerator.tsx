import React, { useState } from "react";
import { addInviteCode } from "../../services/codeService";
import { InviteCode } from "../../types/types";

const generateCode = (): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

interface InviteCodeGeneratorProps {
  userId: string;
}

const InviteCodeGenerator: React.FC<InviteCodeGeneratorProps> = ({ userId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [code, setCode] = useState("");

  const handleGenerateCode = () => {
    const newCode = generateCode();
    setCode(newCode);
    setShowPopup(true);

    const newInviteCode: InviteCode = {
      code: newCode,
      userId: userId,
    };

    addInviteCode(newInviteCode)
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Invite Code Generator</h1>
      <button onClick={handleGenerateCode}>Generate New Code</button>

      {showPopup && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <h2>Your Invite Code</h2>
          <p>{code}</p>
          <p>
            Share this code with others to connect with them. The code expires in 4 weeks.
          </p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default InviteCodeGenerator;
