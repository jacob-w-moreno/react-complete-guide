import React, { useContext } from 'react';

const authContext = useContext(AuthContext);

<button onClick={authContext.login}>Log In</button>
