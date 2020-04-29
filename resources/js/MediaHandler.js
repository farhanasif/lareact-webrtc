export default class Mediahandler {
    getPermissions() {
        return new Promise((res, rej) => {
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            }).then((stream) => {
                res(stream)
            })
            .catch(err => {
                throw new Error(`unable to fetch stream ${err}`)
            })
        })
    }
}