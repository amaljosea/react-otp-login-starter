import { authStatus } from '../constants'

// will give success response for all apis
const dummyApi = () => {
    return Promise.resolve({
        success: true,
        data: {
            token: "123xyz",
            authStatus: authStatus.GUEST,
            isRegisterd: true
        }
    })
}

export default dummyApi