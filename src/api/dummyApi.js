import { authStatus } from '../constants'

// will give success response for all apis
const dummyApi = () => {
    return Promise.resolve({
        success: true,
        data: {
            token: "123xyz",
            authStatus: authStatus.GUEST,
            isRegisterd: true //true - profile page, false - enter otp page
        }
    })
}

export default dummyApi