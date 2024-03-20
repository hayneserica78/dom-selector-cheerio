import axios from 'axios';
function get_dom(url,config={}){

  if (!url){
    throw('please entry an url')

  }

  return new Promise(resolve=>{

    axios.get(url,config).then(res=>{

      resolve(res.data)
    })

  })

}

export {
  get_dom
}


