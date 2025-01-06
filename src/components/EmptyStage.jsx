import React from "react";

const 
EmptyStage = ({type}) => {
  return (
    <tr>
      <td colSpan={6} className="py-6 text-center">
        There is no {type}
      </td>
    </tr>
  );
};

export default EmptyStage;
