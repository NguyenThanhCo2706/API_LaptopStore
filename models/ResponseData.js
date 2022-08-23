
const responseData = (status_code, data, error_messages) => {
    return {
        "status_code": status_code,
        "data": data,
        "error_messages": error_messages
    }
}

module.exports = responseData