import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addAgencyConnection } from '../../services/codeService';
import { InviteCode } from '../../types/types';


export const InvitationCodeInput = () => {
  const [code, setCode] = useState('');
  const { data, ...user } = useSelector((state: any) => state.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCode = e.target.value;
    if (inputCode.length <= 5) {
      setCode(inputCode);
    }
  };

  const handleSubmit = () => {
    if (code.length === 5) {
      const newInviteCode: InviteCode = {
        code: code,
        userId: data._id,
      };
      addAgencyConnection(newInviteCode)
    } else {
      alert('Please enter a 5-character invitation code.');
    }
  };

  return (
    <div>
      <label htmlFor="invitation-code">Invitation Code:</label>
      <input
        type="text"
        id="invitation-code"
        name="invitation-code"
        value={code}
        onChange={handleChange}
        maxLength={5}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InvitationCodeInput;
