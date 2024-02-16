import defaultUser from '../utils/default-user';
import axios from 'axios'


export async function signIn(email, password) {
  try {
    // Send request
    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    }

    const body_raw = {
      email: email,
      password: password,
    }

    const body = JSON.stringify(body_raw)

    const res = await axios.post(
      'http://localhost:3021/users',
      body,
      config
    )
    
    return {
      isOk: true,
      data: defaultUser
    };
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      data: defaultUser
    };
  }
  catch {
    return {
      isOk: false
    };
  }
}

export async function createAccount(email, password,firstname,lastname) {
  try {
    // Send request
    console.log(email, password,firstname,lastname);
    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    }

    const body_raw = {
      email: email,
      password: password,
      lastName: lastname,
      firstName: firstname
    }

    const body = JSON.stringify(body_raw)

    const res = await axios.post(
      'http://localhost:3021/users',
      body,
      config
    )

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
