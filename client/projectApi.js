import request from 'superagent'

const url = '/v1'
//doesnt exist till instatiated

export default {
  getPosts(callback) {
    const getUrl = `${url}/list`
    request.get(getUrl)
    .end((err, res) => {
      if(err) {
        callback(err)
      } else {
        const posts = res.body.map(posts => {
          return {
            id: posts.id,
            title: posts.text

          }
        })
      }
    })
  },
    add(post, callback) {
    const addUrl = `${url}/add`
    request.post(addUrl)
      .send(post)
      .end((err, res) => {
        if (err) {
          callback(err)
        } else {
          post.id = res.body.newId
          callback(null, post)
        }
      })
   }

  //  update (posts, callback) {
  //    const updateURL = `${url}/update/${posts.id}`
  //    request.put(updateURL)
  //    .send({id: post.id, title: posts.text, body: posts.text})
  //    .end((err) => {
  //      if (err) {
  //        callback(err)
  //      } else {
  //        callback(null, posts)
  //      }
  //    })
  //  }

}
