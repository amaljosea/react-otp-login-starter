import { authStatus } from '../constants'

const dummyApi = () => {
    return Promise.resolve({
        success: true,
        data: {
            token: "123xyz",
            authStatus: authStatus.GUEST
        }
    })
}

export default dummyApi