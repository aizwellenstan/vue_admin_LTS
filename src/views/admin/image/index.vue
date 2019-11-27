<template>
   <div>
       <h3>Image Upload</h3>
      <img :src="previewImage" class="uploading-image" width="33%"/>
      <input type="file" accept="image/jpeg" @change=uploadImage>
   </div>
</template>

<script>
    export default {
        name:'imageUpload',
        data(){
            return{
               previewImage:null
            }
        },
        methods:{
            uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                };
            },
//             uploadImage(event) {

//     const URL = 'http://foobar.com/upload'; 

//     let data = new FormData();
//     data.append('name', 'my-picture');
//     data.append('file', event.target.files[0]); 

//     let config = {
//       header : {
//         'Content-Type' : 'image/png'
//       }
//     }

//     axios.put(
//       URL, 
//       data,
//       config
//     ).then(
//       response => {
//         console.log('image upload response > ', response)
//       }
//     )
//   }
        }

     }  // missing closure added
</script>



<style>
   .uploading-image{
     display:flex;
   }
 </style>