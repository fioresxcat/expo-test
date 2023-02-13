// import { mytoken, host } from "../constant"

// export const postLike = async (postID, mytoken) => {
//     try {
//         const token = mytoken
//         const response = await fetch(`${host}/like/like?token=${token}&id=${postID}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({})
//         })
//         const data = await response.json()

//         console.log('return data from post like: ', data)
//         return data.data
//     } catch (error) {
//         console.error(error)
//     }
// }