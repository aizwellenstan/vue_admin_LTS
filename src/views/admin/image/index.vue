<template>
  <div class="contents">
      <h3>圖片上傳</h3>
    <label v-show="!uploadedImage" class="input-item__label"
      >
      <input type="file" @change="onFileChange" />
    </label>
    <div class="preview-item">
      <img
        v-show="uploadedImage"
        class="preview-item-file"
        :src="uploadedImage"
        alt=""
      />
      <div v-show="uploadedImage" class="preview-item-btn" @click="remove">
        <p class="preview-item-name">{{ img_name }}</p>
        <!-- <e-icon class="preview-item-icon">close</e-icon> -->
      </div>
      <br />
      <button type="button" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
// import EIcon from '../components/EIcon.vue';

export default {
  components: {
    // EIcon,
  },
  data() {
    return {
      uploadedImage: '',
      img_name: '',
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
      this.img_name = files[0].name;
    },
    // アップロードした画像を表示
    createImage(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    remove() {
      this.uploadedImage = false;
    },
  },
};
</script>