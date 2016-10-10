import request from 'superagent'

const url = '/v1'
//doesnt exist till instatiated

export default {
  getPosts(callback) {
    const getUrl = '${url}/list'
    request.get(getUrl)
    .end((err, res) => {
      if(err) {
        callback(err)
      } else {
        const posts = res.body.map(posts => {
          return {
            id: posts.id,
            title: posts.text,
            body:posts.text

          }
        })
      }
    })
  }
}
