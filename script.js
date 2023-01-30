const prompt = require('prompt')
const axios = require('axios')

prompt.start();

prompt.get(
    ['username'], function (err, result){
        console.log(' Username ' + result.username)
        axios.get('https://www.instagram.com/'+result.username+'/?__a=1&__d=dist').then( response =>{
            console.log('===============Informations below=================')
            console.log('Username: ' + response.data.graphql.user.full_name)
            console.log('==================================================')
            console.log('Biography: ' + response.data.graphql.user.biography)
            console.log('==================================================')
            console.log('Profile Picture: ' + response.data.graphql.user.profile_pic_url_hd)
            console.log('==================================================')
            console.log('End. Made by J/Bug')
        })
    }
)
