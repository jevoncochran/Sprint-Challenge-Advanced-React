import React, { useState } from "react";

export const usePlayer = initialValue => {
    const [value, setValue] = useState(initialValue);
    
    return [value, setValue];
}